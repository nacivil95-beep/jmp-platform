/**
 * XiteCore Smart Site Platform – 관제 대시보드 비즈니스 로직
 * 레퍼런스 이미지 정밀 재현 버전
 * 설명: 가상 현장 데이터 바인딩, Leaflet 위성지도, Chart.js 5종 차트,
 *       기상 실시간 연동(기상청 공공데이터포털 API)
 */

// 무재해 기산일(2026-01-12) 기준 경과일수 배지에 사용하는 상수. 재해 발생 시 이 날짜를
// 사고 발생일 다음날로 바꿔주면 "무재해 N일 달성" 카운트가 그 날부터 다시 시작됩니다.
const NO_ACCIDENT_START_DATE = "2026-01-12";

// =========================================================================
// 0. 토공사 현황 – "시공 및 투입 현황" 시트 01.토공 항목 행 매핑 (엑셀 파싱 + 렌더링 공용)
// =========================================================================
// 열: E=설계, F=전일까지, G=금일, H=누계. 시공 시작일(start)은 엑셀에 없는 메타 정보라 고정값 사용.
// 정수 키(69/70/71/82) 순서 그대로가 표시 순서(토사→리핑암→발파암깎기→흙쌓기)와 일치합니다.
const EARTH_ROWS = {
  69: { label: "토사",         start: "2025-02-01" },
  70: { label: "리핑암",       start: "2025-03-10" },
  71: { label: "발파암깎기",   start: "2025-04-05" },
  82: { label: "흙쌓기(성토)", start: "2025-02-01" }
};
const EARTH_ITEM_ORDER = Object.keys(EARTH_ROWS).map(r => EARTH_ROWS[r].label); // [토사, 리핑암, 발파암깎기, 흙쌓기(성토)]
const EARTH_CUT_ITEMS = ["토사", "리핑암", "발파암깎기"];   // 절토량 그룹
const EARTH_FILL_ITEMS = ["흙쌓기(성토)"];                  // 성토량 그룹

// =========================================================================
// 1. 데이터 정의 (진천메가폴리스 산업단지 조성사업 가상 데이터)
// =========================================================================
const DATA = {
  // ※ 인원/장비 현황은 dailyData.js(DAILY_REPORTS, 작업일보 엑셀 파싱 결과)에서 가져와
  //   렌더링합니다 (아래 "5. 인원 현황" / "6. 장비 현황" 섹션 참고). 이 DATA 객체에는
  //   더 이상 workers/equip 목업 데이터를 두지 않습니다.

  // 토공사 현황(01.토공: 토사/리핑암/발파암깎기/흙쌓기) 수치는 더 이상 특정 날짜(2026-07-20)로
  // 고정하지 않고, dailyData.js(DAILY_REPORTS[key].earth)의 날짜별 "누계(H열)" 값을 그대로
  // 반영합니다. 절토(cut) = 토사+리핑암+발파암깎기, 성토(fill) = 흙쌓기.
  // 아래 EARTH_ITEM_ORDER/EARTH_GROUP은 항목 표시 순서와 절토/성토 그룹 분류만 담당하는
  // 메타데이터이며(수치는 없음), 실제 수치 렌더링은 renderEarth() 함수를 참고하세요.

  // Leaflet 지도 핀 마커들 (충북 진천군 문백면 은탄리 778-1 일원, 주변 개발구역 포함)
  markers: [
    { lat: 36.7886922, lng: 127.4440195, color: "orange", name: "1공구 장비집결지" },
    { lat: 36.776697, lng: 127.457929, color: "orange", name: "2공구 본부" },
    { lat: 36.7626922, lng: 127.4700195, color: "orange", name: "3공구 현장" },
    { lat: 36.7826922, lng: 127.4520195, color: "blue",   name: "CCTV-01" },
    { lat: 36.7706922, lng: 127.4660195, color: "blue",   name: "CCTV-02" },
    { lat: 36.7786922, lng: 127.4760195, color: "green",  name: "경사계 IN-1" },
    { lat: 36.7666922, lng: 127.4480195, color: "green",  name: "침하계 SH-2" }
  ]
};

// =========================================================================
// 2. 전역 차트 인스턴스 저장소 (재생성 시 이전 인스턴스 파괴용)
// =========================================================================
const ChartInstances = {};

// =========================================================================
// 3. 유틸리티 함수
// =========================================================================
function fmt(n) {
  // 숫자를 천 단위 콤마로 포맷팅합니다.
  return Number(n).toLocaleString();
}

// 시계 갱신 함수 – 매초 헤더 시계를 업데이트합니다.
// 착공일(YYYY-MM-DD) 기준 오늘까지 경과일수. 착공일 당일을 1일차로 계산합니다(타임존
// 오차 방지를 위해 연/월/일을 직접 UTC 기준 정수로 변환해 하루 밀리는 문제를 피합니다).
function daysSinceStart(startDateStr) {
  const [sy, sm, sd] = startDateStr.split("-").map(Number);
  const startUTC = Date.UTC(sy, sm - 1, sd);
  const now = new Date();
  const nowUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((nowUTC - startUTC) / 86400000) + 1;
}

function updateNoAccidentDayCount() {
  const el = document.getElementById("no-accident-day-count");
  if (!el) return;
  const elapsed = daysSinceStart(NO_ACCIDENT_START_DATE);
  el.textContent = elapsed >= 1 ? `무재해 ${fmt(elapsed)}일 달성` : `무재해 기산 예정(D${elapsed})`;
}

function updateClock() {
  const now = new Date();
  document.getElementById("live-clock").textContent =
    now.toLocaleString("ko-KR", {
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: false
    });
  // 자정이 지나 날짜가 바뀌어도 별도 처리 없이 매초 함께 갱신되어 항상 정확합니다.
  updateNoAccidentDayCount();
}

// =========================================================================
// 4. 기상 현황 실시간 데이터 연동 (기상청 공공데이터포털 - 단기예보 조회서비스: 초단기실황)
// =========================================================================
// ※ 처음엔 "지상(종관,ASOS) 시간자료 조회서비스"로 시도했지만, 이 API는 QC(품질검사)가 끝난
//    전일(D-1)자료까지만 제공합니다 (당일 조회 시 "전날 자료까지 제공됩니다" 오류 발생).
//    그래서 "당일" 데이터가 필요한 이 화면에는 맞지 않아, 당일 관측을 실제로 제공하는
//    초단기실황(getUltraSrtNcst) API로 되돌렸습니다. 참고로 방재기상관측(AWS) 시간자료 API는
//    당일 자료를 주지만 공공기관 전용이라 일반 인증키로는 사용할 수 없습니다.
// ※ 사내망/현장 내부 전용 대시보드로 확인되어 서비스키를 프론트엔드에 직접 사용합니다.
//    추후 외부에 공개되는 경우, 반드시 서버(백엔드) 프록시를 통해 키를 숨겨야 합니다.
const KMA_SERVICE_KEY = "822537d73cc620c07fa7dd04f3c90fed8ddb840a3b865ece1d4745844dfebaf9";
const KMA_FCST_BASE_URL = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";

// 현장 좌표(36.7766922, 127.4580195)를 기상청 격자좌표(LCC 도법)로 변환한 값
const KMA_NX = 68;
const KMA_NY = 110;

const WEATHER_REFRESH_MS = 10 * 60 * 1000; // 10분마다 갱신

// 화면에 표시 중인 "오늘의 최고기온"은 갱신될 때마다 더 낮은 값으로 절대 내려가지 않도록
// 마지막으로 표시한 값을 기억해둡니다. 날짜가 바뀌면 초기화됩니다.
let displayedMaxTemp = null;
let displayedMaxTempDate = null;

function pad2(n) { return String(n).padStart(2, "0"); }

// 공공데이터포털(apis.data.go.kr) API는 대부분 Access-Control-Allow-Origin 헤더를 내려주지 않아서,
// 브라우저에서 바로 fetch()하면 CORS 정책에 막혀 "네트워크 오류"로 실패합니다(개발자도구 콘솔에서만 보임).
// 아래 함수는 1차로 직접 호출을 시도하고, 실패하면 서로 다른 공개 CORS 프록시들을 순서대로 시도합니다.
// 어떤 단계에서 왜 실패했는지 메시지에 그대로 남겨서, 화면에서 바로 원인을 확인할 수 있게 했습니다.
// ※ corsproxy.io는 2026년부터 무료 사용을 localhost/개발환경으로 제한해(운영 도메인은 403) 더 이상
//   신뢰할 수 없어, 우선순위를 맨 뒤로 내리고 codetabs 프록시를 대신 추가했습니다.
// ※ HTTP 502/503/504(게이트웨이가 백엔드로 전달하지 못함)는 대부분 몇 초 안에 회복되는 일시적
//   오류라서, 같은 주소를 바로 포기하지 않고 짧게 한 번 더 재시도합니다.
// ※ 안정적인 운영 환경에서는 공개 프록시 대신 직접 관리하는 서버(백엔드) 프록시를 통해 서비스키를 호출하는 것을 권장합니다.
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function isTransientHttpError(message) {
  return /HTTP (502|503|504)/.test(message);
}

async function kmaTryFetchOnce(url, label) {
  const res = await fetch(url);
  const text = await res.text(); // 상태코드와 무관하게 우선 원문을 읽어 원인 파악에 사용합니다.
  if (!res.ok) {
    throw new Error(`[${label}] HTTP ${res.status} - ${text.slice(0, 150)}`);
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    // 공공데이터포털은 키 오류/트래픽 초과 등일 때 JSON이 아닌 XML/HTML 에러 문서를 내려주는 경우가 많습니다.
    throw new Error(`[${label}] JSON 아님 - 응답 앞부분: ${text.slice(0, 150)}`);
  }
}

async function kmaFetchJson(url) {
  const attempts = [
    { label: "직접호출", url },
    { label: "프록시1(allorigins)", url: `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}` },
    { label: "프록시2(codetabs)", url: `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}` },
    { label: "프록시3(corsproxy)", url: `https://corsproxy.io/?url=${encodeURIComponent(url)}` }
  ];

  const errors = [];
  for (const attempt of attempts) {
    try {
      const data = await kmaTryFetchOnce(attempt.url, attempt.label);
      if (errors.length) console.warn("[기상 현황] 이전 시도 실패 후 성공:", errors);
      return data;
    } catch (e) {
      // 게이트웨이 일시 오류(502/503/504)는 짧게 대기 후 같은 경로로 한 번 더 시도합니다.
      if (isTransientHttpError(e.message)) {
        try {
          await sleep(800);
          const retryData = await kmaTryFetchOnce(attempt.url, attempt.label + " 재시도");
          if (errors.length) console.warn("[기상 현황] 이전 시도 실패 후 재시도로 성공:", errors);
          return retryData;
        } catch (e2) {
          errors.push(e2.message);
          continue;
        }
      }
      errors.push(e.message);
    }
  }
  throw new Error(errors.join(" | "));
}


// 기상 카드 하단에 마지막 갱신 시각/실패 여부를 화면에 직접 표시합니다.
// (실패 시 콘솔에만 경고를 남기고 조용히 넘어가면, 사용자 입장에서는 이전 값이 그대로 방치된 것처럼 보입니다.)
function setWeatherStatusNote(text, isError) {
  const el = document.getElementById("w-updated-note");
  if (!el) return;
  el.textContent = text;
  el.classList.toggle("error", !!isError);
}

// 강수형태(PTY) 코드를 한글 날씨 상태로 변환
function parseSkyStatus(pty) {
  const code = Number(pty);
  if (code === 1) return "비";
  if (code === 2) return "비/눈";
  if (code === 3) return "눈";
  if (code === 4) return "소나기";
  return "맑음/구름"; // PTY=0(강수 없음)일 때는 별도 SKY값이 없어 간단히 표기
}

// 오늘 00시부터 "지금까지 발표가 끝난 마지막 정시"까지의 시(0~23) 배열을 계산합니다.
// 정시 관측자료는 보통 매시 40분 이후 안정적으로 제공되므로, 그 전에는 직전 시각까지만 사용합니다.
// 빈 배열이면 자정 직후(00:00~00:39)라 당일자 관측자료가 아직 없다는 뜻입니다.
function getAvailableHoursToday() {
  const now = new Date();
  let lastHour = now.getHours();
  if (now.getMinutes() < 40) lastHour -= 1;
  if (lastHour < 0) return [];
  const hours = [];
  for (let h = 0; h <= lastHour; h++) hours.push(h);
  return hours;
}

// 지정한 "시"의 초단기실황(그 시각 정시 관측값 1건)을 조회합니다.
async function fetchNcstForHour(hour) {
  const now = new Date();
  const baseDate = `${now.getFullYear()}${pad2(now.getMonth() + 1)}${pad2(now.getDate())}`;
  const baseTime = `${pad2(hour)}00`;
  const url =
    `${KMA_FCST_BASE_URL}/getUltraSrtNcst?serviceKey=${KMA_SERVICE_KEY}` +
    `&pageNo=1&numOfRows=10&dataType=JSON` +
    `&base_date=${baseDate}&base_time=${baseTime}&nx=${KMA_NX}&ny=${KMA_NY}`;

  const data = await kmaFetchJson(url);
  const header = data?.response?.header;
  if (!header || header.resultCode !== "00") {
    throw new Error(`getUltraSrtNcst(${baseTime}) 오류: ${header?.resultCode} ${header?.resultMsg}`);
  }
  const values = {};
  const item = data.response.body?.items?.item;
  (Array.isArray(item) ? item : [item]).forEach(it => { values[it.category] = it.obsrValue; });
  return { hour, values }; // values: { T1H: 기온, RN1: 1시간강수량, WSD: 풍속, PTY: 강수형태, REH: 습도, ... }
}

// 동네예보(getVilageFcst) 발표시각 계산: 02,05,08,11,14,17,20,23시(+10분 후 제공)
function getKmaFcstBaseDateTime() {
  const times = [2, 5, 8, 11, 14, 17, 20, 23];
  const now = new Date();
  const base = new Date(now);
  let chosen = null;
  for (let i = times.length - 1; i >= 0; i--) {
    if (now.getHours() > times[i] || (now.getHours() === times[i] && now.getMinutes() >= 10)) {
      chosen = times[i];
      break;
    }
  }
  if (chosen === null) {
    base.setDate(base.getDate() - 1);
    chosen = 23;
  }
  const yyyy = base.getFullYear(), mm = pad2(base.getMonth() + 1), dd = pad2(base.getDate());
  return { baseDate: `${yyyy}${mm}${dd}`, baseTime: `${pad2(chosen)}00` };
}

// 오늘 예보상 최고기온(TMX)을 동네예보에서 별도로 가져옵니다 (예보이므로 D-1 제한과 무관).
async function fetchKmaTodayTmx() {
  const { baseDate, baseTime } = getKmaFcstBaseDateTime();
  const url =
    `${KMA_FCST_BASE_URL}/getVilageFcst?serviceKey=${KMA_SERVICE_KEY}` +
    `&pageNo=1&numOfRows=300&dataType=JSON` +
    `&base_date=${baseDate}&base_time=${baseTime}&nx=${KMA_NX}&ny=${KMA_NY}`;

  const data = await kmaFetchJson(url);
  const header = data?.response?.header;
  if (!header || header.resultCode !== "00") {
    throw new Error(`getVilageFcst 오류: ${header?.resultCode} ${header?.resultMsg}`);
  }
  const now = new Date();
  const todayStr = `${now.getFullYear()}${pad2(now.getMonth() + 1)}${pad2(now.getDate())}`;
  const items = data.response.body.items.item;
  const tmxItem = items.find(it => it.category === "TMX" && it.fcstDate === todayStr);
  return tmxItem ? parseFloat(tmxItem.fcstValue) : null;
}

async function fetchWeatherData() {
  const nowStr = new Date().toLocaleTimeString("ko-KR", { hour12: false });
  try {
    const hours = getAvailableHoursToday();
    if (!hours.length) {
      setWeatherStatusNote("오늘자 관측자료 발표 대기 중 (자정 직후)", false);
      return;
    }

    // 오늘 00시부터 지금까지 "매시" 초단기실황과, 오늘 예보상 최고기온(TMX)을 함께 병렬로 조회합니다.
    // → 매시 관측자료는 새로고침 때마다 처음부터 다시 합산되어 항상 같은 값으로 재계산됩니다(리셋되지 않음).
    const [results, tmx] = await Promise.all([
      Promise.allSettled(hours.map(h => fetchNcstForHour(h))),
      fetchKmaTodayTmx().catch(e => {
        console.warn("[기상 현황] 동네예보(최고기온) 조회 실패:", e);
        return null;
      })
    ]);
    const succeeded = results
      .filter(r => r.status === "fulfilled")
      .map(r => r.value)
      .sort((a, b) => a.hour - b.hour);

    if (!succeeded.length) {
      const firstError = results.find(r => r.status === "rejected");
      throw new Error(firstError?.reason?.message || "시간별 관측자료를 하나도 가져오지 못했습니다.");
    }

    let maxTemp = -Infinity, maxWind = 0, rainAccum = 0;
    succeeded.forEach(({ values }) => {
      const ta = parseFloat(values.T1H);
      const ws = parseFloat(values.WSD);
      const rn = isNaN(parseFloat(values.RN1)) ? 0 : parseFloat(values.RN1); // "강수없음"은 NaN -> 0 처리
      if (!isNaN(ta) && ta > maxTemp) maxTemp = ta;
      if (!isNaN(ws) && ws > maxWind) maxWind = ws;
      rainAccum += rn;
    });

    const latest = succeeded[succeeded.length - 1].values;
    const curTemp = parseFloat(latest.T1H);
    const curWind = parseFloat(latest.WSD);
    const curRain = isNaN(parseFloat(latest.RN1)) ? 0 : parseFloat(latest.RN1);
    const obsMaxTemp = maxTemp === -Infinity ? curTemp : maxTemp;

    // 오늘 예보상 최고기온(TMX)을 우선 표시하되, 실황 최고기온이 TMX를 넘어설 때만
    // 관측 기반 최고기온(obsMaxTemp)으로 대체합니다.
    const candidateMaxTemp = (tmx !== null && obsMaxTemp <= tmx) ? tmx : obsMaxTemp;

    // 그날의 "최고기온"은 갱신될 때마다 낮아지면 안 되므로, 직전에 표시했던 값보다
    // 낮으면 무시하고 기존 값을 그대로 유지합니다. 날짜가 바뀌면 새로 시작합니다.
    const todayStr = new Date().toDateString();
    if (displayedMaxTempDate !== todayStr) {
      displayedMaxTempDate = todayStr;
      displayedMaxTemp = candidateMaxTemp;
    } else if (candidateMaxTemp > displayedMaxTemp) {
      displayedMaxTemp = candidateMaxTemp;
    }
    const displayMaxTemp = displayedMaxTemp;

    document.getElementById("w-status").textContent = parseSkyStatus(latest.PTY);
    document.getElementById("w-temp").textContent = curTemp.toFixed(1) + "℃";
    document.getElementById("w-temp-max").textContent = displayMaxTemp.toFixed(1) + "℃";
    document.getElementById("w-wind").textContent = curWind.toFixed(1) + " m/s";
    document.getElementById("w-wind-max").textContent = maxWind.toFixed(1) + " m/s";
    document.getElementById("w-rain").textContent = curRain.toFixed(1) + " mm";
    document.getElementById("w-rain-acc").textContent = rainAccum.toFixed(1) + " mm";

    // 작업 위험도(체감온도 기반 온열/한랭질환 안내) 갱신 — 최신 관측시각의 기온/습도/풍속 사용
    const curReh = parseFloat(latest.REH);
    lastKmaTa = curTemp;
    lastKmaReh = curReh;
    lastKmaWsd = curWind;
    updateWorkRiskUI(curTemp, curReh, curWind);

    const failedCount = hours.length - succeeded.length;
    const note = failedCount > 0
      ? `최근 갱신 ${nowStr} · 00~${pad2(hours[hours.length - 1])}시 중 ${failedCount}개 시간 조회 실패(합산 제외)`
      : `최근 갱신 ${nowStr} · 00~${pad2(hours[hours.length - 1])}시 관측 합산`;
    setWeatherStatusNote(note, failedCount > 0);
  } catch (err) {
    console.warn("[기상 현황] 기상청 데이터를 불러오지 못했습니다:", err);
    setWeatherStatusNote(`⚠ 갱신 실패(${nowStr}): ${err.message}`, true);
  }
}

function initWeatherLive() {
  fetchWeatherData(); // 최초 1회 즉시 로드 (오늘 00시부터 지금까지 전체 재계산)
  setInterval(fetchWeatherData, WEATHER_REFRESH_MS);
}

// =========================================================================
// 4-1. 작업 위험도(체감온도 기반 온열·한랭질환 예방 안내)
// =========================================================================
// 별도의 "생활기상지수" API를 추가로 부르지 않고, 이미 받아오고 있는 초단기실황의
// 기온(T1H)·습도(REH)·풍속(WSD)만으로 기상청 공식 산출식을 그대로 계산합니다.
// (출처: 기상자료개방포털 - 응용기상분석 - 체감온도, data.kma.go.kr/climate/windChill)
//
// 여름철 체감온도 = -0.2442 + 0.55399*Tw + 0.45535*Ta - 0.0022*Tw² + 0.00278*Tw*Ta + 3.0
//   (Tw: 습구온도, Stull 추정식으로 산출. 2022.6.2. 개정 산출식)
// 겨울철 체감온도(windchill) = 13.12 + 0.6215*Ta - 11.37*V^0.16 + 0.3965*V^0.16*Ta
//   (Ta<=10℃, V(풍속, km/h)>=4.8일 때만 유효 — 그 밖에는 기온을 그대로 사용)
//
// 위험도 4단계 기준은 2025년 개정 산업안전보건기준에 관한 규칙 제558~561조
// (고용노동부 "폭염 대비 노동자 건강보호 대책", 2026.7.17. 시행)를 따릅니다.
//   - 31℃ 이상: 온도·습도 조절장치 가동/작업시간 조정/휴식시간 부여 중 1개 이상 조치 (의무)
//   - 33℃ 이상: 매 2시간마다 20분 이상 휴식 부여 (법적 의무, 1시간마다 10분도 가능)
//   - 35℃ 이상: 무더위 시간대(14~17시) 옥외작업 중지, 매시간 15분 이상 휴식 (권고)
//   - 38℃ 이상(폭염중대경보): 긴급조치 작업 외 모든 옥외작업 중지 (권고)

function computeSummerFeelsLike(ta, rh) {
  const Tw = ta * Math.atan(0.151977 * Math.sqrt(rh + 8.313659))
    + Math.atan(ta + rh) - Math.atan(rh - 1.67633)
    + 0.00391838 * Math.pow(rh, 1.5) * Math.atan(0.023101 * rh)
    - 4.686035;
  return -0.2442 + 0.55399 * Tw + 0.45535 * ta - 0.0022 * Tw * Tw + 0.00278 * Tw * ta + 3.0;
}

function computeWinterFeelsLike(ta, wsMs) {
  const vKmh = wsMs * 3.6;
  if (ta > 10 || vKmh < 4.8) return ta; // 산출식 적용 조건을 벗어나면 기온을 그대로 사용
  return 13.12 + 0.6215 * ta - 11.37 * Math.pow(vKmh, 0.16) + 0.3965 * Math.pow(vKmh, 0.16) * ta;
}

// 5~9월은 여름철 체감온도(폭염 기준), 그 외에는 겨울철 체감온도(한파/한랭질환 기준)를 사용합니다.
function computeFeelsLike(ta, rh, wsMs) {
  const month = new Date().getMonth() + 1;
  if (month >= 5 && month <= 9) {
    return { value: computeSummerFeelsLike(ta, rh), season: "summer" };
  }
  return { value: computeWinterFeelsLike(ta, wsMs), season: "winter" };
}

function getHeatRiskLevel(feelsLike) {
  if (feelsLike >= 38) {
    return { level: "danger", label: "위험(폭염중대경보)", guide: "긴급조치 작업 외 모든 옥외작업 중지 권고" };
  }
  if (feelsLike >= 35) {
    return { level: "danger", label: "경고(폭염경보)", guide: "14~17시 옥외작업 중지, 매시간 15분 이상 휴식 권고" };
  }
  if (feelsLike >= 33) {
    return { level: "warning", label: "주의(폭염주의보)", guide: "매 2시간마다 20분 이상 휴식 부여 (의무)" };
  }
  if (feelsLike >= 31) {
    return { level: "caution", label: "관심", guide: "냉방·통풍장치 가동 또는 휴식시간 부여 등 조치 필요" };
  }
  return { level: "safe", label: "안전", guide: "특이 조치사항 없음" };
}

// 한파 시 체감온도 기준 동상 등 한랭질환 위험도(안전보건공단 참고 기준 — 법적 의무 기준 아님)
function getColdRiskLevel(feelsLike) {
  if (feelsLike <= -25) {
    return { level: "danger", label: "위험(한파특보)", guide: "옥외작업 최소화, 방한장구 착용 및 수시 실내 휴식 필요" };
  }
  if (feelsLike <= -15) {
    return { level: "warning", label: "경고", guide: "동상 위험 - 방한복 착용, 노출 최소화 및 휴식 권고" };
  }
  if (feelsLike <= -5) {
    return { level: "caution", label: "주의", guide: "방한대책 점검, 장시간 옥외작업 시 보온 유의" };
  }
  return { level: "safe", label: "안전", guide: "특이 조치사항 없음" };
}

let lastRiskInfo = null; // worker-card 배너를 renderWorkers 재호출 후에도 유지하기 위한 캐시

// 스마트 체감온도계 자동 재조회 시, 기상청 기온/습도/풍속을 다시 받아오지 않고도
// updateWorkRiskUI()를 재실행할 수 있도록 가장 최근 관측값을 기억해둡니다.
let lastKmaTa = null;
let lastKmaReh = null;
let lastKmaWsd = null;

// ─── 현장 스마트 체감온도계(센소링크) 연동 ───────────────────────────────
// fetch_feels_like.py 가 5분마다 로컬 PC에서 센소링크 값을 읽어와 feelsLikeData.js 로
// 저장 → git push 한 결과를 여기서 읽습니다. index.html 에서 feelsLikeData.js 를
// app.js 보다 먼저 불러오면 전역 변수 FEELS_LIKE_DATA 로 접근할 수 있습니다.
// (아직 한 번도 실행 전이거나 파일이 없으면 FEELS_LIKE_DATA 자체가 정의되지 않으므로
//  typeof 체크로 안전하게 처리합니다.)
const SENSOR_FRESH_LIMIT_MS = 30 * 60 * 1000; // 30분 - 이보다 오래된 값이면 "실측"으로 인정하지 않음
// (로컬 PC가 꺼져 있어 갱신이 멈춘 경우, 오래된 값을 현재값처럼 잘못 표시하지 않기 위한 안전장치)

function getFreshSensorFeelsLike() {
  if (typeof FEELS_LIKE_DATA === "undefined" || !FEELS_LIKE_DATA) return null;
  const feelsLike = FEELS_LIKE_DATA.feelsLike;
  const updatedAt = FEELS_LIKE_DATA.updatedAt;
  if (typeof feelsLike !== "number" || !updatedAt) return null;
  const updatedTime = new Date(String(updatedAt).replace(" ", "T")).getTime();
  if (isNaN(updatedTime) || Date.now() - updatedTime > SENSOR_FRESH_LIMIT_MS) return null;
  return feelsLike;
}

// ─── 스마트 체감온도계(feelsLikeData.js) 자동 재조회 ───────────────────────
// index.html에서는 최초 로드 시 한 번만 <script>로 feelsLikeData.js를 불러오기 때문에,
// 그 이후 GitHub에 새 값이 올라와도(5분마다) 새로고침 전에는 화면에 반영되지 않았습니다.
// 아래는 그 파일을 주기적으로 fetch()로 다시 받아와 FEELS_LIKE_DATA를 갱신하고,
// 화면(체감온도/위험도 배지)을 다시 그리는 로직입니다.
const FEELS_LIKE_REFRESH_MS = 5 * 60 * 1000; // 5분 - GitHub 갱신 주기와 동일

async function fetchFeelsLikeSensorData() {
  try {
    // 캐시된 오래된 버전을 받아오지 않도록 매번 다른 쿼리스트링을 붙입니다.
    const res = await fetch(`feelsLikeData.js?v=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();

    // feelsLikeData.js는 `let FEELS_LIKE_DATA = { ... };` 형태의 일반 스크립트 파일이라,
    // 실행하지 않고도 안전하게 값만 뽑아내기 위해 중괄호 안 JSON 부분만 정규식으로 추출합니다.
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("FEELS_LIKE_DATA 객체를 찾지 못했습니다.");
    const parsed = JSON.parse(match[0]);

    FEELS_LIKE_DATA = parsed; // 전역 변수 갱신 (getFreshSensorFeelsLike()가 참조)

    // 기상청 기온/습도/풍속은 이미 받아둔 최신 값을 그대로 사용해 위험도 UI만 다시 계산합니다.
    if (lastKmaTa !== null && lastKmaReh !== null) {
      updateWorkRiskUI(lastKmaTa, lastKmaReh, lastKmaWsd);
    }
  } catch (e) {
    console.warn("[스마트 체감온도계] 자동 재조회 실패:", e);
  }
}

function initFeelsLikeAutoRefresh() {
  setInterval(fetchFeelsLikeSensorData, FEELS_LIKE_REFRESH_MS);
}

function updateWorkRiskUI(ta, rh, wsMs) {
  if (isNaN(ta) || isNaN(rh)) return;

  // 스마트 체감온도계는 WBGT(폭염) 기반 값이라 여름철(5~9월)에만 사용합니다.
  const month = new Date().getMonth() + 1;
  const isSummerSeason = month >= 5 && month <= 9;
  const sensorFeelsLike = isSummerSeason ? getFreshSensorFeelsLike() : null;

  let feelsLike, season, sourceLabel;
  if (sensorFeelsLike !== null) {
    feelsLike = sensorFeelsLike;
    season = "summer";
    sourceLabel = "스마트 체감온도 기반";
  } else {
    const computed = computeFeelsLike(ta, rh, wsMs);
    feelsLike = computed.value;
    season = computed.season;
    sourceLabel = "계산값(기상청 관측 기반)";
  }

  const risk = season === "summer" ? getHeatRiskLevel(feelsLike) : getColdRiskLevel(feelsLike);
  lastRiskInfo = { feelsLike, season, risk };

  const feelsEl = document.getElementById("w-feels-like");
  if (feelsEl) {
    feelsEl.textContent = `${feelsLike.toFixed(1)}℃`;
    feelsEl.className = "w-value " +
      (risk.level === "safe" ? "normal" : risk.level === "caution" ? "caution" : risk.level === "warning" ? "warning" : "danger");
  }
  const sourceEl = document.getElementById("w-feels-source");
  if (sourceEl) {
    sourceEl.textContent = sourceLabel;
  }
  const badgeEl = document.getElementById("w-risk-badge");
  if (badgeEl) {
    badgeEl.textContent = risk.label;
    badgeEl.className = "risk-badge level-" + risk.level;
  }
  const guideEl = document.getElementById("w-risk-guide");
  if (guideEl) {
    guideEl.textContent = risk.guide;
    guideEl.className = "risk-guide-text level-" + risk.level;
  }
  updateWorkerHeatBanner();
}

// 인원 현황 카드에 조건부 경고 배너를 띄웁니다. (level이 safe면 숨김)
function updateWorkerHeatBanner() {
  const el = document.getElementById("worker-heat-banner");
  if (!el || !lastRiskInfo) return;
  const { risk, season } = lastRiskInfo;
  if (risk.level === "safe") {
    el.classList.remove("show");
    el.className = "worker-alert-banner";
    return;
  }
  const icon = season === "summer" ? "fa-solid fa-sun" : "fa-solid fa-snowflake";
  el.innerHTML = `<i class="${icon}"></i> ${risk.label} - ${risk.guide}`;
  el.className = `worker-alert-banner show level-${risk.level}`;
}

// =========================================================================
// 5. 인원/장비 현황 – 작업일보(dailyData.js: DAILY_REPORTS) 실데이터 바인딩
// =========================================================================
// dailyData.js는 매달 새 작업일보 엑셀이 처리될 때마다 데이터가 계속 누적되며 여러 달에
// 걸치므로(예: 2026-07-01, 2026-08-01, ...), 키는 "일자(01~31)"가 아니라 전체 날짜 문자열
// ("YYYY-MM-DD")입니다. 실제로 수치가 채워진(=그날 작업이 진행된) 날짜만 선택 가능하도록
// 필터링합니다. (미래 날짜 시트는 다음날 작업 예정 텍스트만 미리 채워져 있고 투입 인원/장비는
// 0으로 비어있음)
// ※ 추가 제약: 오늘 이후(미래) 날짜는 설령 수치가 채워져 있어도(작업자가 미리 입력해둔 예정
//   내용일 뿐 실제 실적이 아니므로) 대시보드에서 선택할 수 없도록 막습니다.
function reportHasData(rep) {
  if (!rep) return false;
  const p = rep.personnel_total ? rep.personnel_total.today : 0;
  const e = rep.equipment_total ? rep.equipment_total.today : 0;
  const t = rep.work_today ? rep.work_today.length : 0;
  if (!(p > 0 || e > 0 || t > 0)) return false;

  if (rep.date) {
    const now = new Date();
    const todayKey = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
    if (rep.date > todayKey) return false; // 미래 날짜(예정 내용)는 제외
  }
  return true;
}

let REPORT_DATE_KEYS = [];
function rebuildReportDateKeys() {
  REPORT_DATE_KEYS = Object.keys(DAILY_REPORTS)
    .sort()
    .filter(k => reportHasData(DAILY_REPORTS[k]));
}
rebuildReportDateKeys();

let currentReportDate = pickDefaultReportDate();
let reportCalCursor = new Date(); // 캘린더 팝업에서 현재 보여주는 달의 기준일 (월 이동 가능)

function pickDefaultReportDate() {
  if (!REPORT_DATE_KEYS.length) return null;
  const now = new Date();
  const todayKey = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
  if (REPORT_DATE_KEYS.includes(todayKey)) return todayKey;
  // 오늘 날짜 데이터가 없으면(예: 이번 달이 아니거나 아직 미작성) 가장 최근 실데이터를 사용합니다.
  return REPORT_DATE_KEYS[REPORT_DATE_KEYS.length - 1];
}

function dateOptionLabel(key) {
  const rep = DAILY_REPORTS[key];
  if (!rep) return key || "날짜 없음";
  const md = rep.date ? rep.date.slice(5).replace("-", "/") : key;
  return `${md} (${rep.weather || "-"})`;
}

// 날짜 선택 버튼 4개(공정율/인원/장비/토공사 카드)를 채우고 서로 동기화합니다.
// 실제 선택 UI는 캘린더 팝업(#date-calendar-popup)이 담당하며, 이 버튼들은 트리거 역할만 합니다.
const DATE_PICKER_BTN_IDS = ["progress-date-select", "worker-date-select", "equip-date-select", "earth-date-select"];

function initReportDateSelects() {
  DATE_PICKER_BTN_IDS.forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleDatePicker(btn);
    });
  });
  refreshDatePickerButtons();
  initDatePickerGlobalHandlers();
}

function refreshDatePickerButtons() {
  DATE_PICKER_BTN_IDS.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.textContent = currentReportDate ? dateOptionLabel(currentReportDate) : "날짜 없음";
  });
}

function setReportDate(key) {
  if (!DAILY_REPORTS[key]) return;
  currentReportDate = key;
  refreshDatePickerButtons();
  renderWorkers(key);
  renderEquip(key);
  renderWorkStatusModal(key);
  renderProgressCard(key);
  renderEarth(key);
  if (isSchedulePaneVisible()) renderSchedulePane();
}

// ── 날짜 선택 캘린더 팝업 (월 이동 가능) ──
let datePickerOpenTrigger = null;

function toggleDatePicker(triggerEl) {
  const popup = document.getElementById("date-calendar-popup");
  if (!popup) return;
  if (popup.classList.contains("show") && datePickerOpenTrigger === triggerEl) {
    closeDatePicker();
    return;
  }
  openDatePicker(triggerEl);
}

function openDatePicker(triggerEl) {
  const popup = document.getElementById("date-calendar-popup");
  if (!popup) return;

  // 팝업을 열 때마다 현재 선택된 날짜가 속한 달을 기준으로 캘린더를 보여줍니다.
  if (currentReportDate) {
    const [y, m] = currentReportDate.split("-").map(Number);
    if (y && m) reportCalCursor = new Date(y, m - 1, 1);
  }
  renderDatePickerGrid();

  datePickerOpenTrigger = triggerEl;
  triggerEl.classList.add("active");

  const rect = triggerEl.getBoundingClientRect();
  const popupWidth = popup.offsetWidth || 216;
  let left = rect.right - popupWidth; // 기본은 트리거 오른쪽 끝에 맞춰 왼쪽으로 펼침
  if (left < 8) left = Math.min(rect.left, window.innerWidth - popupWidth - 8);
  let top = rect.bottom + 6;

  popup.style.left = `${Math.max(8, left)}px`;
  popup.style.top = `${top}px`;
  popup.classList.add("show");

  // 화면 아래로 넘치면 트리거 위쪽에 띄우기
  const popupRect = popup.getBoundingClientRect();
  if (popupRect.bottom > window.innerHeight - 8) {
    popup.style.top = `${rect.top - popupRect.height - 6}px`;
  }
}

function closeDatePicker() {
  const popup = document.getElementById("date-calendar-popup");
  if (popup) popup.classList.remove("show");
  if (datePickerOpenTrigger) datePickerOpenTrigger.classList.remove("active");
  datePickerOpenTrigger = null;
}

function initDatePickerGlobalHandlers() {
  const popup = document.getElementById("date-calendar-popup");
  if (!popup) return;

  const prevBtn = document.getElementById("dcp-prev");
  const nextBtn = document.getElementById("dcp-next");
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      reportCalCursor.setMonth(reportCalCursor.getMonth() - 1);
      renderDatePickerGrid();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      reportCalCursor.setMonth(reportCalCursor.getMonth() + 1);
      renderDatePickerGrid();
    });
  }

  document.addEventListener("click", (e) => {
    if (!popup.classList.contains("show")) return;
    if (popup.contains(e.target)) return;
    if (datePickerOpenTrigger && datePickerOpenTrigger.contains(e.target)) return;
    closeDatePicker();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDatePicker();
  });
  window.addEventListener("resize", closeDatePicker);
}

function renderDatePickerGrid() {
  const labelEl = document.getElementById("dcp-month-label");
  const grid = document.getElementById("dcp-grid");
  if (!labelEl || !grid) return;

  const year = reportCalCursor.getFullYear();
  const month = reportCalCursor.getMonth(); // 0-based
  labelEl.textContent = `${year}년 ${pad2(month + 1)}월`;

  const firstWeekday = new Date(year, month, 1).getDay(); // 0=일
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const now = new Date();
  const todayKey = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;

  grid.innerHTML = "";
  for (let i = 0; i < firstWeekday; i++) {
    grid.insertAdjacentHTML("beforeend", `<span class="dcp-day empty"></span>`);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const key = `${year}-${pad2(month + 1)}-${pad2(d)}`;
    const hasData = REPORT_DATE_KEYS.includes(key);
    const cls = ["dcp-day"];
    if (hasData) cls.push("has-data");
    if (key === currentReportDate) cls.push("selected");
    if (key === todayKey) cls.push("today");
    grid.insertAdjacentHTML("beforeend",
      `<span class="${cls.join(" ")}"${hasData ? ` data-key="${key}"` : ""} title="${hasData ? dateOptionLabel(key) : ""}">${d}</span>`);
  }

  grid.querySelectorAll(".dcp-day.has-data").forEach(el => {
    el.addEventListener("click", () => {
      setReportDate(el.dataset.key);
      closeDatePicker();
    });
  });
}

// ── 인원 현황 ──
// "직원" 항목의 금일 투입 인원 = 시공사 소속, 나머지 전 직종의 합 = 협력사(외주) 소속으로 구분합니다.
function renderWorkers(key) {
  const rep = DAILY_REPORTS[key];
  if (!rep) return;
  const totalToday = rep.personnel_total.today || 0;
  const staffRow = rep.personnel.find(r => r.role.replace(/\s/g, "") === "직원");
  const staffToday = staffRow ? staffRow.today : 0;
  const subToday = Math.max(totalToday - staffToday, 0);
  const equipToday = rep.equipment_total ? (rep.equipment_total.today || 0) : 0;

  document.getElementById("worker-staff").textContent = fmt(staffToday);
  document.getElementById("worker-sub").textContent = fmt(subToday);
  document.getElementById("worker-equip-personnel").textContent = fmt(equipToday);
  document.getElementById("worker-total-count").textContent = fmt(staffToday + subToday + equipToday) + "명";

  const tbody = document.querySelector("#worker-role-table tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  const activeRoles = rep.personnel.filter(r => r.today > 0).sort((a, b) => b.today - a.today);
  if (activeRoles.length === 0) {
    tbody.innerHTML = `<tr><td colspan="2" class="mini-role-empty">금일 투입 인원 없음</td></tr>`;
    return;
  }
  activeRoles.forEach(r => {
    tbody.insertAdjacentHTML("beforeend", `
      <tr>
        <td>${r.role.replace(/\s/g, "")}</td>
        <td>${fmt(r.today)}명</td>
      </tr>
    `);
  });
  updateWorkerHeatBanner(); // 날짜 탭 전환 후에도 현재 체감온도 경고 배너를 유지
}

// ── 장비 현황 ──
function renderEquip(key) {
  const rep = DAILY_REPORTS[key];
  if (!rep) return;

  const list = rep.equipment.map(item => ({ name: item.type, count: item.today }));
  list.push({ name: "합계", count: rep.equipment_total.today || 0 });

  const tbody = document.querySelector("#equip-table tbody");
  tbody.innerHTML = "";
  list.forEach((item, i) => {
    const isTotal = i === list.length - 1;
    const countClass = item.count === 0 ? "equip-qty-0" : "equip-qty-pos";
    tbody.insertAdjacentHTML("beforeend", `
      <tr${isTotal ? ' class="total-row"' : ' class="equip-row-clickable" title="규격별 상세 보기"'}>
        <td>${item.name}</td>
        <td class="${countClass}">${item.count}대</td>
      </tr>
    `);
    if (!isTotal) {
      const tr = tbody.lastElementChild;
      tr.addEventListener("click", () => openEquipDetailModal(item.name, key));
    }
  });
}

// ── 장비 세부 규격 모달 ──
// 장비 현황 표에서 특정 장비(대분류)를 클릭하면, 해당 날짜 기준 규격별 보유/투입 대수를
// 다른 상세 카드들과 동일한 방식(페이지 내 모달)으로 크게 띄웁니다.
function openEquipDetailModal(type, key) {
  const rep = DAILY_REPORTS[key];
  if (!rep) return;

  const modal = document.getElementById("equip-detail-modal");
  const titleEl = document.getElementById("equip-modal-title");
  const dateEl = document.getElementById("equip-modal-date");
  const bodyEl = document.getElementById("equip-modal-body");
  if (!modal || !bodyEl) return;

  const details = (rep.equipment_detail || []).filter(d => d.type === type);
  const dateLabel = rep.date || key;

  if (titleEl) titleEl.textContent = `${type} · 규격별 상세`;
  if (dateEl) dateEl.textContent = `${dateLabel} 기준`;

  const rowsHtml = details.length
    ? details.map(d => {
        const specLabel = d.spec ? escapeHtml(d.spec) : "-";
        const countClass = d.today === 0 ? "equip-qty-0" : "equip-qty-pos";
        return `
          <tr>
            <td>${specLabel}</td>
            <td>${fmt(d.prev)}대</td>
            <td class="${countClass}">${fmt(d.today)}대</td>
            <td>${fmt(d.cum)}대</td>
          </tr>
        `;
      }).join("")
    : "";

  if (!details.length) {
    bodyEl.innerHTML = `<div class="equip-modal-empty">규격별 세부 데이터가 없습니다.</div>`;
    modal.classList.add("show");
    return;
  }

  const totalToday = details.reduce((sum, d) => sum + (d.today || 0), 0);
  const totalPrev = details.reduce((sum, d) => sum + (d.prev || 0), 0);
  const totalCum = details.reduce((sum, d) => sum + (d.cum || 0), 0);

  bodyEl.innerHTML = `
    <table class="equip-modal-table">
      <thead>
        <tr>
          <th>규격</th>
          <th>전일누계</th>
          <th>금일투입</th>
          <th>누계</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
        <tr class="total-row">
          <td>합계</td>
          <td>${fmt(totalPrev)}대</td>
          <td>${fmt(totalToday)}대</td>
          <td>${fmt(totalCum)}대</td>
        </tr>
      </tbody>
    </table>
  `;
  modal.classList.add("show");
}

function closeEquipDetailModal() {
  const modal = document.getElementById("equip-detail-modal");
  if (modal) modal.classList.remove("show");
}

function initEquipModal() {
  const closeBtn = document.getElementById("equip-modal-close-btn");
  const overlay = document.getElementById("equip-detail-modal");
  if (closeBtn) closeBtn.addEventListener("click", closeEquipDetailModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeEquipDetailModal();
    });
  }
}

// ── 작업현황 모달(금일 작업현황 / 명일 작업사항) ──
function renderWorkStatusModal(key) {
  const rep = DAILY_REPORTS[key];
  if (!rep) return;
  const dateLabel = document.getElementById("modal-date-label");
  const weatherLabel = document.getElementById("modal-weather");
  const progressLabel = document.getElementById("modal-progress");
  const todayEl = document.getElementById("modal-work-today");
  const tomorrowEl = document.getElementById("modal-work-tomorrow");
  if (dateLabel) dateLabel.textContent = rep.date || key;
  if (weatherLabel) weatherLabel.textContent = rep.weather ? `날씨: ${rep.weather}` : "";
  if (progressLabel) {
    const diff = rep.progress.diff;
    const diffClass = Number(diff) < 0 ? "ps-diff-neg" : "ps-diff-pos";
    progressLabel.innerHTML =
      `공정율(%) &nbsp;` +
      `<span class="ps-plan">계획 ${rep.progress.plan}%</span> · ` +
      `<span class="ps-actual">실시 ${rep.progress.actual}%</span> · ` +
      `<span class="${diffClass}">대비 ${diff}%</span>`;
  }
  if (todayEl) {
    todayEl.innerHTML = rep.work_today.length
      ? rep.work_today.map(escapeHtml).join("<br>")
      : "<span class=\"modal-empty\">내용 없음</span>";
  }
  if (tomorrowEl) {
    tomorrowEl.innerHTML = rep.work_tomorrow.length
      ? rep.work_tomorrow.map(escapeHtml).join("<br>")
      : "<span class=\"modal-empty\">내용 없음</span>";
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function openWorkStatusModal() {
  const modal = document.getElementById("work-status-modal");
  if (!modal) return;
  renderWorkStatusModal(currentReportDate);
  modal.classList.add("show");
}

function closeWorkStatusModal() {
  const modal = document.getElementById("work-status-modal");
  if (modal) modal.classList.remove("show");
}

function initWorkStatusModal() {
  const openBtn = document.getElementById("work-status-btn");
  const closeBtn = document.getElementById("modal-close-btn");
  const overlay = document.getElementById("work-status-modal");
  const todayCol = document.getElementById("progress-report-col-today");
  const tomorrowCol = document.getElementById("progress-report-col-tomorrow");
  if (openBtn) openBtn.addEventListener("click", openWorkStatusModal);
  if (todayCol) todayCol.addEventListener("click", openWorkStatusModal);
  if (tomorrowCol) tomorrowCol.addEventListener("click", openWorkStatusModal);
  if (closeBtn) closeBtn.addEventListener("click", closeWorkStatusModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeWorkStatusModal();
    });
  }
}

// =========================================================================
// 7. 공정율 및 작업일보 카드 렌더링
// =========================================================================
const WEEKDAY_KR = ["일", "월", "화", "수", "목", "금", "토"];

function formatDateWithWeekday(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return `${dateStr} (${WEEKDAY_KR[d.getDay()]})`;
}

function renderProgressCard(key) {
  const rep = DAILY_REPORTS[key];
  const summaryEl = document.getElementById("progress-summary");
  const todayEl = document.getElementById("progress-work-today");
  const tomorrowEl = document.getElementById("progress-work-tomorrow");
  if (!rep) return;

  if (summaryEl) {
    const diff = rep.progress.diff;
    const diffClass = Number(diff) < 0 ? "ps-diff-neg" : "ps-diff-pos";
    summaryEl.innerHTML =
      `공정율(%) &nbsp;` +
      `<span class="ps-plan">계획 ${rep.progress.plan}%</span> · ` +
      `<span class="ps-actual">실시 ${rep.progress.actual}%</span> · ` +
      `<span class="${diffClass}">대비 ${diff}%</span>`;
  }
  if (todayEl) {
    todayEl.innerHTML = rep.work_today.length
      ? rep.work_today.map(escapeHtml).join("<br>")
      : "<span class=\"pr-empty\">내용 없음</span>";
  }
  if (tomorrowEl) {
    tomorrowEl.innerHTML = rep.work_tomorrow.length
      ? rep.work_tomorrow.map(escapeHtml).join("<br>")
      : "<span class=\"pr-empty\">내용 없음</span>";
  }
}

// =========================================================================
// 9. 토공사 도넛 3개 + 테이블 바인딩
// =========================================================================
function makeEarthDonut(id, pct, color) {
  const ctx = document.getElementById(id).getContext("2d");
  if (ChartInstances[id]) ChartInstances[id].destroy();
  ChartInstances[id] = new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [{
        data: [pct, 100 - pct],
        backgroundColor: [color, "#2a3347"],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: "78%",
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    }
  });
}

// 선택된 작업일보 날짜(key, 예: "20")의 earth 누계 수치로 절토/성토/전체 비율과 테이블을 계산합니다.
// dailyData.js(DAILY_REPORTS[key].earth) 또는 엑셀 "불러오기"로 갱신된 값을 그대로 반영하므로,
// 날짜를 바꾸면 그 날짜 시트의 "누계(H열)" 기준으로 수치가 다시 계산됩니다.
function renderEarth(key) {
  const rep = DAILY_REPORTS[key];
  if (!rep || !rep.earth) return;

  const round1 = n => Math.round(n * 10) / 10;
  const sumBy = (items, field) => items.reduce((s, t) => s + (rep.earth[t] ? rep.earth[t][field] : 0), 0);

  const cutDesign = sumBy(EARTH_CUT_ITEMS, "design");
  const cutActual = sumBy(EARTH_CUT_ITEMS, "cum");
  const fillDesign = sumBy(EARTH_FILL_ITEMS, "design");
  const fillActual = sumBy(EARTH_FILL_ITEMS, "cum");
  const totalDesign = cutDesign + fillDesign;
  const totalActual = cutActual + fillActual;

  const cutPct = cutDesign > 0 ? round1((cutActual / cutDesign) * 100) : 0;
  const fillPct = fillDesign > 0 ? round1((fillActual / fillDesign) * 100) : 0;
  const totalPct = totalDesign > 0 ? round1((totalActual / totalDesign) * 100) : 0;

  // 퍼센트 텍스트 업데이트
  document.getElementById("pct-total").textContent = totalPct + "%";
  document.getElementById("pct-cut").textContent   = cutPct + "%";
  document.getElementById("pct-fill").textContent  = fillPct + "%";

  // 도넛 차트 재생성 – 주황/파랑/초록 3가지 색상으로 구분
  makeEarthDonut("donut-total", totalPct, "#ff6d00");
  makeEarthDonut("donut-cut",   cutPct,   "#2979ff");
  makeEarthDonut("donut-fill",  fillPct,  "#00c46a");

  // 테이블 행 주입 – 항목별 설계/누계(시공)/잔여/공정률 (절토/성토 구분 없이 하나의 표)
  const tbody = document.getElementById("earth-tbody");
  tbody.innerHTML = "";
  EARTH_ITEM_ORDER.forEach(type => {
    const item = rep.earth[type];
    if (!item) return;
    const remain = item.design - item.cum;
    const pct = item.design > 0 ? round1((item.cum / item.design) * 100) : 0;
    tbody.insertAdjacentHTML("beforeend", `
      <tr>
        <td>${type}</td>
        <td>${fmt(item.design)}</td>
        <td>${fmt(item.cum)}</td>
        <td>${fmt(remain)}</td>
        <td class="pct-cell">${pct.toFixed(1)}%</td>
      </tr>
    `);
  });
}

// =========================================================================
// 10-1. 품질관리 현황 (다짐전함수비 / 평판재하시험) – QUALITY_DATA(qualityData.js) 연동
// =========================================================================
// 판정 문자열은 시험 종류마다 다릅니다 (함수비: 적합/부적합, 평판재하: 합격/불합격).
// 통일해서 다루기 위해 "적합/합격"만 통과로 보고 나머지는 모두 불합격으로 취급합니다.
function isQualityPass(judge) {
  return judge === "적합" || judge === "합격";
}

let currentQualityType = "moisture";

function renderQuality(type) {
  if (typeof QUALITY_DATA === "undefined") return;
  currentQualityType = type;

  const list = (type === "plate" ? QUALITY_DATA.plate : QUALITY_DATA.moisture) || [];
  const total = list.length;
  const passCount = list.filter(r => isQualityPass(r.judge)).length;
  const failCount = total - passCount;
  const passRate = total > 0 ? Math.round((passCount / total) * 1000) / 10 : 0;

  const summaryEl = document.getElementById("quality-summary");
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="quality-stat">
        <div class="quality-stat-value">${fmt(total)}</div>
        <div class="quality-stat-label">전체 시험</div>
      </div>
      <div class="quality-stat">
        <div class="quality-stat-value pass">${fmt(passCount)}</div>
        <div class="quality-stat-label">적합</div>
      </div>
      <div class="quality-stat">
        <div class="quality-stat-value fail">${fmt(failCount)}</div>
        <div class="quality-stat-label">부적합</div>
      </div>
      <div class="quality-stat">
        <div class="quality-stat-value">${passRate}%</div>
        <div class="quality-stat-label">적합률</div>
      </div>
    `;
  }

  const tbody = document.getElementById("quality-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (total === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="quality-table-empty">시험 데이터가 없습니다.</td></tr>`;
    return;
  }

  // 최근 시험이 위로 오도록 정렬 (날짜 내림차순, 날짜 같으면 시험번호 내림차순)
  const sorted = [...list].sort((a, b) => {
    if (a.date !== b.date) return (b.date || "").localeCompare(a.date || "");
    return String(b.no).localeCompare(String(a.no), undefined, { numeric: true });
  });

  sorted.forEach(rec => {
    const pass = isQualityPass(rec.judge);
    const badgeClass = pass ? "pass" : "fail";
    tbody.insertAdjacentHTML("beforeend", `
      <tr>
        <td>${escapeHtml(String(rec.no))}</td>
        <td>${escapeHtml(rec.date || "-")}</td>
        <td>${escapeHtml(rec.location || "-")}</td>
        <td><span class="quality-judge-badge ${badgeClass}">${escapeHtml(rec.judge || "-")}</span></td>
      </tr>
    `);
    tbody.lastElementChild.addEventListener("click", () => openQualityDetailModal(type, rec));
  });
}

// ── 품질시험 상세 모달 ──
function openQualityDetailModal(type, rec) {
  const modal = document.getElementById("quality-detail-modal");
  const titleEl = document.getElementById("quality-modal-title");
  const judgeEl = document.getElementById("quality-modal-judge");
  const bodyEl = document.getElementById("quality-modal-body");
  if (!modal || !bodyEl) return;

  const pass = isQualityPass(rec.judge);
  const typeLabel = type === "plate" ? "평판재하시험" : "다짐전 함수비 시험";

  if (titleEl) titleEl.textContent = `${typeLabel} · 시험번호 ${rec.no}`;
  if (judgeEl) {
    judgeEl.textContent = rec.judge || "-";
    judgeEl.className = `quality-modal-judge-badge ${pass ? "pass" : "fail"}`;
  }

  let html = `
    <div class="quality-detail-grid">
      <div class="quality-detail-item"><span class="label">시험 일자</span><span class="value">${escapeHtml(rec.date || "-")}</span></div>
      <div class="quality-detail-item"><span class="label">위치 및 부위</span><span class="value">${escapeHtml(rec.location || "-")}</span></div>
  `;

  if (type === "plate") {
    html += `
      <div class="quality-detail-item"><span class="label">지반반력계수(K30)</span><span class="value">${fmt(rec.k30)} MN/㎥</span></div>
      <div class="quality-detail-item"><span class="label">기준치</span><span class="value">${fmt(rec.standard)} MN/㎥ 이상</span></div>
      <div class="quality-detail-item"><span class="label">재하판 지름</span><span class="value">${fmt(rec.plate_diameter)} mm</span></div>
      <div class="quality-detail-item"><span class="label">평판 면적</span><span class="value">${fmt(rec.plate_area)} ㎠</span></div>
      <div class="quality-detail-item"><span class="label">초기 하중</span><span class="value">${escapeHtml(rec.initial_load || "-")}</span></div>
    `;
    html += `</div>`;
    if (rec.conclusion) {
      html += `<div class="quality-conclusion-box">${escapeHtml(rec.conclusion)}</div>`;
    }
  } else {
    html += `
      <div class="quality-detail-item"><span class="label">함수비 평균</span><span class="value">${fmt(rec.avg)}%</span></div>
      <div class="quality-detail-item"><span class="label">관리 범위</span><span class="value">${rec.range_min != null ? `${fmt(rec.range_min)} ~ ${fmt(rec.range_max)}%` : "-"}</span></div>
    `;
    html += `</div>`;

    if (rec.samples && rec.samples.length) {
      html += `
        <div class="quality-detail-subtitle">측정 상세 (용기별)</div>
        <table class="quality-samples-table">
          <thead>
            <tr><th>측정 위치</th><th>용기 번호</th><th>젖은 흙(g)</th><th>마른 흙(g)</th><th>물 무게(g)</th><th>함수비(%)</th></tr>
          </thead>
          <tbody>
            ${rec.samples.map(s => `
              <tr>
                <td>${escapeHtml(s.label)}</td>
                <td>${escapeHtml(s.container)}</td>
                <td>${fmt(s.wet)}</td>
                <td>${fmt(s.dry)}</td>
                <td>${fmt(s.water)}</td>
                <td>${fmt(s.moisture)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
    }
  }

  if (rec.testers && (rec.testers.tester || rec.testers.checker || rec.testers.manager)) {
    html += `
      <div class="quality-detail-subtitle">시험 담당</div>
      <div class="quality-detail-grid">
        <div class="quality-detail-item"><span class="label">시험자</span><span class="value">${escapeHtml(rec.testers.tester || "-")}</span></div>
        <div class="quality-detail-item"><span class="label">확인자</span><span class="value">${escapeHtml(rec.testers.checker || "-")}</span></div>
        <div class="quality-detail-item"><span class="label">건설사업관리기술인</span><span class="value">${escapeHtml(rec.testers.manager || "-")}</span></div>
      </div>
    `;
  }

  bodyEl.innerHTML = html;
  modal.classList.add("show");
}

function closeQualityDetailModal() {
  const modal = document.getElementById("quality-detail-modal");
  if (modal) modal.classList.remove("show");
}

function initQualityModal() {
  const closeBtn = document.getElementById("quality-modal-close-btn");
  const overlay = document.getElementById("quality-detail-modal");
  if (closeBtn) closeBtn.addEventListener("click", closeQualityDetailModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeQualityDetailModal();
    });
  }
}


// =========================================================================
// 10. Leaflet 위성 지도 초기화 및 마커 배치
// =========================================================================
function initMap() {
  // 진천메가폴리스 산업단지 조성사업 현장 좌표 (충북 진천군 문백면 은탄리 778-1, 구글맵 확인 좌표)
  const center = [36.7766922, 127.4580195];

  const map = L.map("leaflet-map", {
    center, zoom: 14,
    zoomControl: false
  });

  // 위성 타일 레이어 (ESRI World Imagery)
  const satLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    { attribution: "Esri" }
  );

  // 일반 지도 타일 레이어 (OpenStreetMap)
  const normLayer = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    { attribution: "© OpenStreetMap contributors" }
  );

  // ── 항공사진(이미지) 오버레이 레이어 ─────────────────────────────────
  // 1) IMAGE_URL   : 실제 항공사진 이미지 파일 경로로 교체하세요.
  //                  (예: "assets/site-aerial.jpg" 처럼 프로젝트 폴더에 이미지를 넣고 경로 지정)
  // 2) IMAGE_BOUNDS: 이미지의 남서(SW)/북동(NE) 모서리 실제 좌표 [lat, lng]를 지정하세요.
  //                  이 좌표에 맞춰 이미지가 지도 위 정확한 위치·크기로 겹쳐집니다.
  //                  (구글맵/카카오맵 등에서 이미지 촬영 범위의 좌상단·우하단 좌표를 확인해 입력)
  const IMAGE_URL = "assets/site-aerial.jpg";
  const IMAGE_BOUNDS = [
    [36.7633826, 127.4420], // 남서(SW) 모서리 (좌표 보정: 기존 위치에서 남쪽으로 124m 이동)
    [36.7873826, 127.4695]  // 북동(NE) 모서리 (좌표 보정: 기존 위치에서 남쪽으로 124m 이동)
  ];
  const imageLayer = L.imageOverlay(IMAGE_URL, IMAGE_BOUNDS, {
    attribution: "현장 항공사진"
  });
  // 이미지 파일을 아직 못 찾으면 콘솔에 안내만 남기고 위성 모드로 자동 유지
  imageLayer.on("error", function() {
    console.warn(`[Site Map] 항공사진 이미지를 불러오지 못했습니다: ${IMAGE_URL}\n→ app.js의 IMAGE_URL 경로를 실제 이미지 파일 위치로 수정해주세요.`);
  });

  satLayer.addTo(map); // 기본: 위성 모드

  // 지도 타입 버튼 3종 전환 로직 (지도 / 위성 / 항공사진)
  const mapLayers = { normal: normLayer, satellite: satLayer, image: imageLayer };
  const mapBtns = {
    normal: document.getElementById("map-normal-btn"),
    satellite: document.getElementById("map-satellite-btn"),
    image: document.getElementById("map-image-btn")
  };

  function switchMapLayer(target) {
    Object.keys(mapLayers).forEach(key => {
      if (map.hasLayer(mapLayers[key])) map.removeLayer(mapLayers[key]);
      mapBtns[key].classList.toggle("active", key === target);
    });
    mapLayers[target].addTo(map);
    // 항공사진 모드일 때는 이미지 범위에 맞춰 지도 시야를 맞춘 뒤,
    // 스크롤 2단계 정도 더 확대된 비율로 보여줌
    if (target === "image") {
      map.fitBounds(IMAGE_BOUNDS);
      map.setZoom(map.getZoom() + 2);
    }
  }

  mapBtns.satellite.addEventListener("click", () => switchMapLayer("satellite"));
  mapBtns.normal.addEventListener("click", () => switchMapLayer("normal"));
  mapBtns.image.addEventListener("click", () => switchMapLayer("image"));

  // 지도 확대 보기(전체화면) 토글 — 헤더의 확대 아이콘을 실제로 동작하게 연결
  const mapCard = document.getElementById("map-card");
  const expandBtn = document.getElementById("map-expand-btn");
  function setMapFullscreen(on) {
    if (!mapCard) return;
    mapCard.classList.toggle("map-fullscreen", on);
    if (expandBtn) {
      expandBtn.classList.toggle("fa-expand", !on);
      expandBtn.classList.toggle("fa-compress", on);
      expandBtn.classList.toggle("active", on);
      expandBtn.title = on ? "지도 원래 크기로 보기" : "지도 크게 보기";
    }
    // 크기가 바뀐 직후 타일이 밀리지 않도록 레이아웃 반영 후 재계산
    setTimeout(() => map.invalidateSize(), 50);
  }
  if (expandBtn) {
    expandBtn.addEventListener("click", () => {
      setMapFullscreen(!mapCard.classList.contains("map-fullscreen"));
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mapCard && mapCard.classList.contains("map-fullscreen")) {
      setMapFullscreen(false);
    }
  });

  // 반응형 레이아웃에서 화면 폭/방향이 바뀌면(모바일 회전 등) 지도 컨테이너 크기도
  // 다시 계산해줘야 타일이 밀리거나 빈 영역이 생기지 않습니다.
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => map.invalidateSize(), 200);
  });

  // ── 초기 로딩 시 지도 우측이 회색으로 잘려 보이는 문제 해결 ──────────────────
  // 원인: L.map()이 생성되는 시점에 Leaflet이 컨테이너 크기를 한 번 측정해서 캐시하는데,
  //       그 시점엔 폰트 로딩/그리드 레이아웃이 아직 완전히 자리잡기 전이라 실제보다
  //       좁은 크기로 측정되는 경우가 있습니다. 이후 레이아웃이 최종 크기로 확정돼도
  //       Leaflet은 그 사실을 모르기 때문에, 처음 측정한 좁은 영역만큼만 타일을 채우고
  //       나머지는 빈 회색 영역으로 남습니다.
  // 해결: 지도 컨테이너 크기를 계속 감시하다가 변하면(폰트 로딩 완료, 레이아웃 재계산 등)
  //       자동으로 map.invalidateSize()를 호출해 다시 계산하게 합니다.
  const mapContainerEl = document.getElementById("leaflet-map");
  if (mapContainerEl && window.ResizeObserver) {
    const mapResizeObserver = new ResizeObserver(() => map.invalidateSize());
    mapResizeObserver.observe(mapContainerEl);
  } else {
    // 구형 브라우저 등 ResizeObserver 미지원 환경 대비: 페이지 로드 완료 직후 한 번 더 재계산
    window.addEventListener("load", () => map.invalidateSize());
  }
  // 그 사이에도 곧바로 한 번 재계산해 첫 화면부터 최대한 정확한 크기로 그려지게 합니다.
  setTimeout(() => map.invalidateSize(), 0);

  // 핀 마커 배치 – 마커 타입별 색상 적용
  const colorMap = { orange: "#ff6d00", blue: "#2979ff", green: "#00c46a" };
  DATA.markers.forEach(m => {
    const icon = L.divIcon({
      html: `<div class="site-marker ${m.color}"></div>`,
      className: "map-marker-wrapper",
      iconSize: [12, 12]
    });
    L.marker([m.lat, m.lng], { icon })
      .bindPopup(`
        <div style="font-family:'Noto Sans KR';font-size:11px;min-width:130px;">
          <b style="color:#ff6d00;">${m.name}</b>
        </div>
      `)
      .addTo(map);
  });
}

// =========================================================================
// 12. 탭 이벤트 리스너 통합 등록
// =========================================================================
// ──────────────────────── 카드 공통 확대(전체화면) 보기 ────────────────────────
// Site Map의 "지도 크게 보기" 버튼과 동일한 방식으로, 나머지 카드들(기상현황/공정율/
// 인원현황/장비현황/팀별공유공간/토공사현황)의 헤더 확대 아이콘도 실제로 동작하게 만듭니다.
const CARD_EXPAND_CONFIG = [
  { cardId: "weather-card", btnId: "weather-expand-btn", label: "기상 현황" },
  { cardId: "progress-card", btnId: "progress-expand-btn", label: "공정율 및 작업일보" },
  { cardId: "worker-card", btnId: "worker-expand-btn", label: "인원 현황" },
  { cardId: "equip-card", btnId: "equip-expand-btn", label: "장비 현황" },
  { cardId: "team-card", btnId: "team-expand-btn", label: "팀별 공유공간" },
  { cardId: "earth-card", btnId: "earth-expand-btn", label: "토공사 현황" },
  { cardId: "events-card", btnId: "events-expand-btn", label: "주요 일정" },
];

function initCardExpandButtons() {
  const controllers = [];

  CARD_EXPAND_CONFIG.forEach(({ cardId, btnId, label }) => {
    const card = document.getElementById(cardId);
    const btn = document.getElementById(btnId);
    if (!card || !btn) return;

    function setFullscreen(on) {
      card.classList.toggle("card-fullscreen", on);
      btn.classList.toggle("fa-expand", !on);
      btn.classList.toggle("fa-compress", on);
      btn.classList.toggle("active", on);
      btn.title = on ? `${label} 원래 크기로 보기` : `${label} 크게 보기`;
      // 카드 크기가 바뀐 뒤 내부 차트(Chart.js)가 새 크기에 맞춰 다시 그려지도록
      // 레이아웃 반영 후 resize 이벤트를 한 번 발생시켜 줍니다.
      setTimeout(() => window.dispatchEvent(new Event("resize")), 50);
    }

    btn.title = `${label} 크게 보기`;
    btn.addEventListener("click", () => {
      setFullscreen(!card.classList.contains("card-fullscreen"));
    });

    controllers.push({ card, setFullscreen });
  });

  // ESC 키로 확대된 카드를 원래 크기로 되돌립니다.
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    controllers.forEach(({ card, setFullscreen }) => {
      if (card.classList.contains("card-fullscreen")) setFullscreen(false);
    });
  });
}

function initTabs() {
  document.addEventListener("click", function(e) {
    const btn = e.target.closest(".wtab");
    if (!btn) return;

    const tab = btn.dataset.tab;
    const val = btn.dataset.val;

    // 같은 탭 그룹 내 active 클래스 이동
    const siblings = document.querySelectorAll(`.wtab[data-tab="${tab}"]`);
    siblings.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // 탭 종류에 따라 렌더 함수 호출 (인원/장비/토공사는 날짜 <select>로 갱신되며, 이 "전체" 탭은
    // 현재 선택된 작업일보 날짜 기준으로 다시 렌더링만 담당합니다. val은 향후 1/2/3공구 구분용으로 남겨둡니다)
    if (tab === "earth" && currentReportDate) renderEarth(currentReportDate);
    if (tab === "quality") renderQuality(val);
  });
}

// =========================================================================
// 12-1. 네이버 날씨 – 새 창(새 탭)에서 열기
// =========================================================================
const NAVER_WEATHER_URL = "https://weather.naver.com/";

function initNaverWeatherModal() {
  const openBtn = document.getElementById("naver-weather-btn");
  if (!openBtn) return;

  openBtn.addEventListener("click", () => {
    window.open(NAVER_WEATHER_URL, "_blank", "noopener,noreferrer");
  });
}

// =========================================================================
// 12-2. 접근 잠금 화면 (클라이언트단 비밀번호)
// =========================================================================
// ※ 이 방식은 완전한 보안이 아닙니다. 개발자도구에서 아래 해시값과 로직을 보면 우회할 수
//    있는 수준의 "1차 방어"이며, 목적은 URL을 우연히 알게 된 외부인의 접근을 막는 것입니다.
//    (검색엔진 크롤링, 링크 오공유 등으로 인한 의도치 않은 노출 방지)
//    진짜 보안이 필요하다면 Cloudflare Access 등 서버/엣지단 인증을 추가로 적용해야 합니다.
// ※ 평문 비밀번호 대신 SHA-256 해시만 코드에 남겨, 소스를 봐도 원문이 바로 보이지 않게 처리했습니다.
//    비밀번호를 바꾸려면 브라우저 콘솔에서 아래처럼 새 해시를 만들어 LOCK_PASSWORD_HASH에 넣어주세요.
//    crypto.subtle.digest("SHA-256", new TextEncoder().encode("새비밀번호"))
//      .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2,"0")).join("")));
const LOCK_PASSWORD_HASH = "13fe2e8ab61465cb3bb02f2779eb3ce841c2d1f80387318aa78229bed3da15e7";
const LOCK_STORAGE_KEY = "jmp_site_unlocked_v1";

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

// 비밀번호 확인 후 통과하면 onUnlocked()를 호출해 나머지 앱 초기화를 진행합니다.
// (잠금 화면에 막혀있는 동안에는 기상 API 호출/지도 로딩 등 불필요한 작업을 하지 않기 위해
//  전체 초기화를 잠금 해제 시점까지 미룹니다.)
function initLockScreen(onUnlocked) {
  const screen = document.getElementById("lock-screen");
  const form = document.getElementById("lock-form");
  const input = document.getElementById("lock-password-input");
  const error = document.getElementById("lock-error");

  function unlock() {
    screen.classList.add("hidden");
    onUnlocked();
  }

  // 같은 브라우저에서 이전에 통과한 적이 있으면 바로 통과 (매번 재입력 방지)
  if (localStorage.getItem(LOCK_STORAGE_KEY) === "1") {
    unlock();
    return;
  }

  input.focus();

  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const val = input.value;
    if (!val) return;
    const hash = await sha256Hex(val);
    if (hash === LOCK_PASSWORD_HASH) {
      localStorage.setItem(LOCK_STORAGE_KEY, "1");
      unlock();
    } else {
      error.classList.add("show");
      input.classList.remove("shake");
      void input.offsetWidth; // 리플로우 강제 – 연속 오답 시에도 흔들림 애니메이션 재생되게 함
      input.classList.add("shake");
      input.value = "";
      input.focus();
    }
  });
}

// =========================================================================
// 13. 초기화 진입점
// =========================================================================
// =========================================================================
// 12-3. 공지사항 팝업 (notices.js의 SITE_NOTICES 연동)
// =========================================================================
const NOTICE_DISMISS_KEY = "jmp_notice_dismissed_date";

function getTodayDateStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// startDate/endDate가 지정된 공지만 오늘 날짜 기준으로 필터링하고, pinned 공지를 앞으로 정렬합니다.
function getActiveNotices() {
  if (typeof SITE_NOTICES === "undefined" || !Array.isArray(SITE_NOTICES)) return [];
  const today = getTodayDateStr();
  return SITE_NOTICES
    .filter(n => {
      if (n.startDate && today < n.startDate) return false;
      if (n.endDate && today > n.endDate) return false;
      return true;
    })
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
}

function renderNoticeList(list) {
  const container = document.getElementById("notice-list");
  if (!container) return;
  container.innerHTML = list.map(n => `
    <div class="notice-card level-${escapeHtml(n.level || "info")}">
      <div class="notice-card-top">
        <span class="notice-team-tag">${escapeHtml(n.team || "공지")}</span>
        ${n.endDate ? `<span class="notice-date-range">~${escapeHtml(n.endDate.slice(5).replace("-", "/"))}</span>` : ""}
      </div>
      <div class="notice-title">${escapeHtml(n.title || "")}</div>
      ${n.image ? `<img class="notice-image" src="${escapeHtml(n.image)}" alt="${escapeHtml(n.title || "공지 이미지")}">` : ""}
      <div class="notice-body">${String(n.body || "").replace(/\n/g, "<br>")}</div>
    </div>
  `).join("");
}

function closeNoticePopup() {
  const overlay = document.getElementById("notice-overlay");
  const checkbox = document.getElementById("notice-hide-today-checkbox");
  // "오늘 하루 보지 않기"를 체크한 채로 닫은 경우에만 오늘 날짜를 저장해서 재접속 시 다시 안 뜨게 합니다.
  // 체크 안 하고 닫으면(x버튼/바깥클릭/닫기버튼 전부 동일) 다음 접속·새로고침 때 다시 뜹니다.
  if (checkbox && checkbox.checked) {
    localStorage.setItem(NOTICE_DISMISS_KEY, getTodayDateStr());
  }
  if (overlay) overlay.classList.remove("show");
}

function initNoticePopup() {
  const overlay = document.getElementById("notice-overlay");
  if (!overlay) return;

  const active = getActiveNotices();
  if (!active.length) return; // 노출할 공지가 없으면 팝업 자체를 띄우지 않음

  if (localStorage.getItem(NOTICE_DISMISS_KEY) === getTodayDateStr()) return; // 오늘 "보지 않기" 선택함

  renderNoticeList(active);
  overlay.classList.add("show");

  const closeX = document.getElementById("notice-close-x");
  const closeBtn = document.getElementById("notice-close-btn");
  if (closeX) closeX.addEventListener("click", closeNoticePopup);
  if (closeBtn) closeBtn.addEventListener("click", closeNoticePopup);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeNoticePopup();
  });
}

// -------------------------------------------------------------------------
// 12-4. 게시판 배너 (무재해 배지 옆, 남은 폭을 채워 우→좌로 흐름)
//   - 데이터관리/알림게시판/board.xlsx → extract_board.py → board.js 의 BOARD_ITEMS를 표시
//   - 텍스트를 두 번 이어붙여 0% → -50% 로 이동시키면 우→좌로 끊김 없이 순환
//   - 텍스트 길이에 비례해 애니메이션 속도(지속시간)를 자동 조정
// -------------------------------------------------------------------------
const BOARD_TICKER_PX_PER_SEC = 60; // 흐르는 속도 (초당 픽셀). 값을 키우면 더 빨리 흐름

// startDate/endDate가 지정된 항목만 오늘 날짜 기준으로 필터링하고, pinned 항목을 앞으로 정렬합니다.
// (알림창의 getActiveNotices()와 동일한 규칙을 board.js의 BOARD_ITEMS에 적용)
function getActiveBoardItems() {
  if (typeof BOARD_ITEMS === "undefined" || !Array.isArray(BOARD_ITEMS)) return [];
  const today = getTodayDateStr();
  return BOARD_ITEMS
    .filter(n => {
      if (n.startDate && today < n.startDate) return false;
      if (n.endDate && today > n.endDate) return false;
      return true;
    })
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
}

// 오늘 날짜(주요 일정 카드와 동일한 SCHEDULE_EVENTS_ONEOFF)에 해당하는 일정만 뽑아
// 게시판 배너에 "주요일정" 태그로 함께 흘려보내기 위한 헬퍼입니다.
// 오늘 일정이 없으면 빈 배열을 반환하고, 그 경우 배너에는 기존 게시글만 표시됩니다.
function getTodayScheduleEventsForBoard() {
  if (typeof SCHEDULE_EVENTS_ONEOFF === "undefined" || !Array.isArray(SCHEDULE_EVENTS_ONEOFF)) return [];
  const today = getTodayDateStr();
  return SCHEDULE_EVENTS_ONEOFF
    .filter(ev => ev.date === today)
    .sort((a, b) => (a.time || "").localeCompare(b.time || ""));
}

// 게시글(BOARD_ITEMS)과 오늘의 주요일정(SCHEDULE_EVENTS_ONEOFF)을 하나의 목록으로 합쳐
// 배너에 표시할 태그(중요/주요일정)+텍스트 형태로 변환합니다.
function buildBoardTickerItems() {
  // tagType: "schedule"(오늘의 주요일정, 파란색) / "notice"(게시판 중요, 노란색)
  const todayEvents = getTodayScheduleEventsForBoard().map(ev => ({
    tag: "오늘의 주요일정",
    tagType: "schedule",
    text: `${ev.time ? ev.time + " " : ""}${ev.title || ""}${ev.note ? " - " + ev.note : ""}`
  }));
  const boardItems = getActiveBoardItems().map(n => ({
    tag: n.pinned ? "중요 알림" : "알림",
    tagType: "notice",
    text: n.text || ""
  }));
  // 오늘 일정이 있으면 게시글보다 항상 먼저(더 눈에 띄게) 보여줍니다.
  return [...todayEvents, ...boardItems];
}

function buildBoardTickerHtml(items) {
  return items
    .map(it => `${it.tag ? `<b class="tag-${it.tagType}">${escapeHtml(it.tag)}</b>` : ""}${escapeHtml(it.text)}`)
    .join("&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;");
}

function initBoardTicker() {
  const banner = document.getElementById("board-banner");
  const content = document.getElementById("board-banner-content");
  if (!banner || !content) return;

  const items = buildBoardTickerItems();

  if (!items.length) {
    // 흐를 게시글/일정이 없으면 애니메이션 없이 안내 문구만 정적으로 표시
    content.style.animation = "none";
    content.innerHTML = `<span class="board-banner-item board-banner-empty">등록된 게시글이 없습니다.</span>`;
  } else {
    const text = buildBoardTickerHtml(items);
    // 동일 텍스트 2벌을 이어붙여 0%→-50% 루프 시 이음매가 보이지 않도록 함
    content.innerHTML = `
      <span class="board-banner-item">${text}</span>
      <span class="board-banner-item" aria-hidden="true">${text}</span>
    `;

    // 실제 렌더링된 한 벌 너비를 측정해 속도를 일정하게 유지 (텍스트가 길어도 짧아도 초당 픽셀 동일)
    requestAnimationFrame(() => {
      const oneSetWidth = content.scrollWidth / 2;
      const duration = Math.max(10, oneSetWidth / BOARD_TICKER_PX_PER_SEC);
      content.style.animationDuration = `${duration}s`;
    });
  }
}

// =========================================================================
// 10-2. 팀별 공유공간 (5개 팀 탭 전환 + 공무/공사/안전보건/관리팀 표 데이터 표시)
// 품질팀 탭은 기존 품질관리 위젯(renderQuality)을 그대로 재사용합니다.
// =========================================================================
// =========================================================================
// 4-3-1. 공무팀 - 예정공정표(계획 대비 실적 S-curve) + 공종별 비중표
// scheduleData.js(SCHEDULE_START_DATE/SCHEDULE_CUMUL/SCHEDULE_MONTHLY/SCHEDULE_MAJOR_ITEMS)
// scheduleActuals.js(SCHEDULE_ACTUALS - 매달 손으로 기록하는 월말 실적)
// 위 두 파일이 로딩되지 않은 환경(옛 배포본 등)에서도 에러 없이 조용히 건너뜁니다.
// =========================================================================

// 날짜(YYYY-MM-DD) → 착공일 기준 몇 개월차/그 달 며칠째인지 (1개월=30일 기준, 원본 공정표 앱과 동일 방식)
function scheduleMonthIndexFromDate(dateStr) {
  if (!dateStr || typeof SCHEDULE_START_DATE === "undefined" || !SCHEDULE_START_DATE) return null;
  const start = new Date(SCHEDULE_START_DATE); start.setHours(0, 0, 0, 0);
  const target = new Date(dateStr); target.setHours(0, 0, 0, 0);
  if (isNaN(start.getTime()) || isNaN(target.getTime())) return null;
  const diffDays = Math.round((target - start) / 86400000);
  if (diffDays < 0) return { month: 0, dayInMonth: 0, diffDays };
  const month = Math.floor(diffDays / 30) + 1;
  const dayInMonth = (diffDays % 30) + 1;
  return { month, dayInMonth, diffDays };
}

// 월차 정보(월차 + 그 달 며칠째)로 계획 누적 진행률(0~1) 일할 계산
function scheduleCumulAt(monthInfo) {
  if (!monthInfo || monthInfo.month <= 0) return 0;
  const m = monthInfo.month;
  if (m > 36) return 1;
  const prevCumul = m > 1 ? (SCHEDULE_CUMUL[m - 1] || 0) : 0;
  const monthlyR = SCHEDULE_MONTHLY[m] || 0;
  const frac = Math.min(1, monthInfo.dayInMonth / 30);
  return prevCumul + monthlyR * frac;
}

// 오늘 시점의 계획치 + (선택된 작업일보가 있다면) 실적 스냅샷을 계산합니다.
function getScheduleTodaySnapshot() {
  const now = new Date();
  const todayStr = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
  const monthInfo = scheduleMonthIndexFromDate(todayStr);
  const planPct = monthInfo ? scheduleCumulAt(monthInfo) * 100 : 0;

  let actualPct = null, actualDate = null, actualMonthInfo = null;
  if (typeof DAILY_REPORTS !== "undefined" && currentReportDate && DAILY_REPORTS[currentReportDate]) {
    const rep = DAILY_REPORTS[currentReportDate];
    if (rep.date && rep.progress && typeof rep.progress.actual === "number") {
      actualDate = rep.date;
      actualMonthInfo = scheduleMonthIndexFromDate(rep.date);
      actualPct = rep.progress.actual;
    }
  }
  return { todayStr, monthInfo, planPct, actualPct, actualDate, actualMonthInfo };
}

function isSchedulePaneVisible() {
  const pane = document.getElementById("team-pane-공무팀");
  return !!pane && pane.style.display !== "none";
}

// 프로젝트 전체 기간(착공일 ~ 착공일+36개월, 1개월=30일)의 마지막 날짜(YYYY-MM-DD)
function scheduleProjectEndDateStr() {
  if (typeof SCHEDULE_START_DATE === "undefined" || !SCHEDULE_START_DATE) return "";
  const start = new Date(SCHEDULE_START_DATE); start.setHours(0, 0, 0, 0);
  const end = new Date(start.getTime() + (36 * 30 - 1) * 86400000);
  return end.getFullYear() + "-" + String(end.getMonth() + 1).padStart(2, "0") + "-" + String(end.getDate()).padStart(2, "0");
}

function scheduleTodayStr() {
  const now = new Date();
  return now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
}

// 프로젝트 범위 안으로 날짜를 clamp
function scheduleClampToProjectRange(dateStr) {
  if (typeof SCHEDULE_START_DATE === "undefined" || !SCHEDULE_START_DATE) return dateStr;
  const min = SCHEDULE_START_DATE, max = scheduleProjectEndDateStr();
  if (dateStr < min) return min;
  if (dateStr > max) return max;
  return dateStr;
}

// 특정 공종(item)의 "그 공종 자체 대비" 누적 진행률(0~1)을 조회일 기준으로 계산합니다.
// item.m 값의 합이 item.ratio(전체 계약금액 대비 비중)와 정확히 일치하지 않는 경우가 있어
// (원본 공정표 앱 데이터 자체의 특성), item 자신의 m 합계를 100%로 정규화해서 계산합니다.
function scheduleItemCumulFractionAt(item, monthInfo) {
  if (!item.m) return 0;
  const totalM = Object.values(item.m).reduce((a, b) => a + b, 0);
  if (totalM <= 0 || !monthInfo || monthInfo.month <= 0) return 0;
  const m = Math.min(monthInfo.month, 36);
  let sum = 0;
  for (let mm = 1; mm < m; mm++) sum += (item.m[mm] || 0);
  if (monthInfo.month <= 36) {
    const frac = Math.min(1, monthInfo.dayInMonth / 30);
    sum += (item.m[m] || 0) * frac;
  } else {
    sum = totalM; // 프로젝트 기간을 넘어선 날짜는 100%로 처리
  }
  return Math.min(sum / totalM, 1);
}

// 조회 날짜 하나를 기준으로 계획/실적의 %와 금액(원)을 계산합니다.
function getScheduleDateInfo(dateStr) {
  const monthInfo = scheduleMonthIndexFromDate(dateStr);
  const planFrac = monthInfo ? scheduleCumulAt(monthInfo) : 0;
  const planPct = planFrac * 100;
  const planAmt = (typeof SCHEDULE_TOTAL_AMT !== "undefined") ? planFrac * SCHEDULE_TOTAL_AMT : 0;

  // 1) 작업일보(DAILY_REPORTS)에 조회일과 정확히 같은 날짜가 있으면 그 실적을 그대로 사용
  let actualPct = null, actualSource = null;
  if (typeof DAILY_REPORTS !== "undefined") {
    const matchKey = Object.keys(DAILY_REPORTS).find(k => DAILY_REPORTS[k].date === dateStr);
    if (matchKey && DAILY_REPORTS[matchKey].progress) {
      actualPct = DAILY_REPORTS[matchKey].progress.actual;
      actualSource = "작업일보";
    }
  }
  // 2) 없으면, 조회일이 속한 달의 "월말 실적 기록"(scheduleActuals.js)이 있으면 참고용으로 사용
  if (actualPct === null && monthInfo && monthInfo.month > 0 && typeof SCHEDULE_ACTUALS !== "undefined") {
    const rec = SCHEDULE_ACTUALS[String(monthInfo.month)];
    if (typeof rec === "number") {
      actualPct = rec;
      actualSource = `${monthInfo.month}개월차 말 기록`;
    }
  }
  const actualAmt = (actualPct !== null && typeof SCHEDULE_TOTAL_AMT !== "undefined") ? (actualPct / 100) * SCHEDULE_TOTAL_AMT : null;

  return { dateStr, monthInfo, planPct, planAmt, actualPct, actualAmt, actualSource };
}

function won(n) {
  return Math.round(n).toLocaleString("ko-KR") + "천원";
}

function getScheduleSelectedDateStr() {
  const input = document.getElementById("schedule-date-select");
  if (input && input.value) return input.value;
  return scheduleClampToProjectRange(scheduleTodayStr());
}

function initScheduleDatePicker() {
  const input = document.getElementById("schedule-date-select");
  const todayBtn = document.getElementById("schedule-date-today-btn");
  if (!input || typeof SCHEDULE_START_DATE === "undefined" || input.dataset.inited) return;
  input.dataset.inited = "1";
  input.min = SCHEDULE_START_DATE;
  input.max = scheduleProjectEndDateStr();
  input.value = scheduleClampToProjectRange(scheduleTodayStr());
  input.addEventListener("change", () => {
    if (!input.value) return;
    input.value = scheduleClampToProjectRange(input.value);
    renderScheduleSummary();
    renderScheduleItemsTable();
  });
  if (todayBtn) {
    todayBtn.addEventListener("click", () => {
      input.value = scheduleClampToProjectRange(scheduleTodayStr());
      renderScheduleSummary();
      renderScheduleItemsTable();
    });
  }
}

function renderScheduleSummary() {
  const el = document.getElementById("schedule-summary");
  if (!el || typeof SCHEDULE_CUMUL === "undefined") return;
  const dateStr = getScheduleSelectedDateStr();
  const info = getScheduleDateInfo(dateStr);
  const monthLabel = (info.monthInfo && info.monthInfo.month > 0)
    ? `${Math.min(info.monthInfo.month, 36)}개월차`
    : "착공 전";

  let html = "";
  html += `<div class="schedule-stat"><div class="schedule-stat-value">${monthLabel}</div><div class="schedule-stat-label">조회일 공정 시점</div></div>`;
  html += `<div class="schedule-stat"><div class="schedule-stat-value plan">${info.planPct.toFixed(2)}%</div><div class="schedule-stat-label">계획 누계</div></div>`;
  html += `<div class="schedule-stat"><div class="schedule-stat-value plan">${won(info.planAmt)}</div><div class="schedule-stat-label">계획 누계금액</div></div>`;

  if (info.actualPct !== null) {
    const diff = info.actualPct - info.planPct;
    const diffClass = diff >= 0 ? "diff-pos" : "diff-neg";
    html += `<div class="schedule-stat"><div class="schedule-stat-value actual">${info.actualPct.toFixed(2)}%</div><div class="schedule-stat-label">실적 누계 (${escapeHtml(info.actualSource || "")})</div></div>`;
    html += `<div class="schedule-stat"><div class="schedule-stat-value actual">${won(info.actualAmt)}</div><div class="schedule-stat-label">실적 누계금액</div></div>`;
    html += `<div class="schedule-stat"><div class="schedule-stat-value ${diffClass}">${diff >= 0 ? "+" : ""}${diff.toFixed(2)}%</div><div class="schedule-stat-label">계획 대비</div></div>`;
  } else {
    html += `<div class="schedule-stat"><div class="schedule-stat-value" style="color:var(--text-dim)">-</div><div class="schedule-stat-label">실적 (해당일 작업일보 없음)</div></div>`;
  }
  el.innerHTML = html;
}

function renderScheduleChart() {
  const canvas = document.getElementById("scheduleChart");
  if (!canvas || typeof SCHEDULE_CUMUL === "undefined" || typeof Chart === "undefined") return;

  const months = Array.from({ length: 36 }, (_, i) => i + 1);
  const planData = months.map(m => (SCHEDULE_CUMUL[m] || 0) * 100);

  // 기록된 월별 실적(scheduleActuals.js)
  const actualPoints = months.map(m => {
    const v = (typeof SCHEDULE_ACTUALS !== "undefined") ? SCHEDULE_ACTUALS[String(m)] : undefined;
    return (typeof v === "number") ? v : null;
  });

  // 아직 기록 안 된 이번 달은 작업일보의 실시간 실적으로 채워서 보여줌 (오늘 날짜 기준, 조회일 선택과는 무관)
  const snap = getScheduleTodaySnapshot();
  if (snap.actualPct !== null && snap.actualMonthInfo && snap.actualMonthInfo.month >= 1 && snap.actualMonthInfo.month <= 36) {
    const idx = snap.actualMonthInfo.month;
    if (actualPoints[idx - 1] === null) actualPoints[idx - 1] = snap.actualPct;
  }

  const id = "scheduleChart";
  if (ChartInstances[id]) ChartInstances[id].destroy();
  const ctx = canvas.getContext("2d");
  ChartInstances[id] = new Chart(ctx, {
    type: "line",
    data: {
      labels: months.map(m => m + "개월"),
      datasets: [
        {
          label: "계획(누계%)",
          data: planData,
          borderColor: "#2979ff",
          backgroundColor: "rgba(41,121,255,0.08)",
          borderWidth: 2,
          pointRadius: 0,
          tension: 0.25,
          fill: true
        },
        {
          label: "실적(누계%)",
          data: actualPoints,
          borderColor: "#00c46a",
          backgroundColor: "#00c46a",
          borderWidth: 2,
          pointRadius: 3,
          spanGaps: true,
          tension: 0.25
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      scales: {
        x: { ticks: { color: "#8899bb", font: { size: 9 }, maxRotation: 0, autoSkip: true, maxTicksLimit: 9 }, grid: { color: "#2a3347" } },
        y: { ticks: { color: "#8899bb", font: { size: 9 }, callback: v => v + "%" }, grid: { color: "#2a3347" }, min: 0, max: 100 }
      },
      plugins: {
        legend: { labels: { color: "#8899bb", font: { size: 9 }, boxWidth: 10 } },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y === null || ctx.parsed.y === undefined ? "-" : ctx.parsed.y.toFixed(2) + "%"}`
          }
        }
      }
    }
  });
}

function scheduleItemStatus(item, currentMonth) {
  if (!item.m) return "future";
  const monthsWithWork = Object.keys(item.m).map(Number).filter(m => item.m[m] > 0);
  if (!monthsWithWork.length) return "future";
  const start = Math.min(...monthsWithWork), end = Math.max(...monthsWithWork);
  if (currentMonth < start) return "future";
  if (currentMonth > end) return "done";
  return "active";
}

function renderScheduleItemsTable() {
  const tbody = document.getElementById("schedule-items-tbody");
  if (!tbody || typeof SCHEDULE_MAJOR_ITEMS === "undefined") return;
  const dateStr = getScheduleSelectedDateStr();
  const monthInfo = scheduleMonthIndexFromDate(dateStr);
  const currentMonth = monthInfo ? monthInfo.month : 0;
  const badgeLabel = { active: "진행중", done: "완료", future: "예정" };
  const sorted = [...SCHEDULE_MAJOR_ITEMS].sort((a, b) => b.ratio - a.ratio);

  tbody.innerHTML = sorted.map(item => {
    const status = scheduleItemStatus(item, currentMonth);
    const fraction = scheduleItemCumulFractionAt(item, monthInfo);
    const itemPlanAmt = fraction * item.amt;
    return `<tr>
      <td>${escapeHtml(item.name)}</td>
      <td>${(item.ratio * 100).toFixed(2)}%</td>
      <td style="text-align:right">${Math.round(item.amt).toLocaleString("ko-KR")}</td>
      <td style="text-align:right">${Math.round(itemPlanAmt).toLocaleString("ko-KR")}</td>
      <td><span class="schedule-badge ${status}">${badgeLabel[status]}</span></td>
    </tr>`;
  }).join("");
}

function renderSchedulePane() {
  if (typeof SCHEDULE_CUMUL === "undefined") return; // scheduleData.js 미로딩 시 조용히 skip
  initScheduleDatePicker();
  renderScheduleSummary();
  renderScheduleChart();
  renderScheduleItemsTable();
}

// =========================================================================
// 10-2. 안전/보건팀 - 유해위험작업 현황 (SAFETY_DATA: safetyData.js) 연동
// extract_safety.py가 '유해위험작업_YYYYMMDD.xlsx' 파일들을 읽어 날짜별로 쌓아둔 데이터를 표시합니다.
// 매일 데이터가 추가되며 여러 달에 걸치므로, 인원/장비 카드와 달리 월 이동이 가능한
// 전용 캘린더 팝업(#safety-date-calendar-popup)으로 날짜를 선택합니다.
// =========================================================================
let currentSafetyDate = null;         // 선택된 날짜 "YYYY-MM-DD"
let safetyCalCursor = new Date();     // 캘린더 팝업에서 현재 보여주는 달의 기준일

function getSafetyDateKeys() {
  if (typeof SAFETY_DATA === "undefined") return [];
  return Object.keys(SAFETY_DATA).sort(); // 오름차순
}

// "2026-07-31" -> "2026.07.31"
function safetyDateLabel(key) {
  return key ? key.replace(/-/g, ".") : "날짜 없음";
}

// 상태 문자열 중 "승인"을 포함하되 "미승인"은 제외한 경우만 승인으로 봅니다.
function isSafetyApproved(status) {
  const s = status || "";
  return s.includes("승인") && !s.includes("미승인");
}

// 오늘 날짜 데이터가 있으면 오늘, 없으면 가장 최근 날짜를 기본 선택합니다.
function pickDefaultSafetyDate() {
  const keys = getSafetyDateKeys();
  if (!keys.length) return null;
  const now = new Date();
  const todayKey = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
  return keys.includes(todayKey) ? todayKey : keys[keys.length - 1];
}

function refreshSafetyDateButton() {
  const btn = document.getElementById("safety-date-select");
  if (btn) btn.textContent = safetyDateLabel(currentSafetyDate);
}

function setSafetyDate(key) {
  if (typeof SAFETY_DATA === "undefined" || !SAFETY_DATA[key]) return;
  currentSafetyDate = key;
  refreshSafetyDateButton();
  renderSafetyTable(currentSafetyDate);
}

// ── 안전/보건팀 날짜 선택 캘린더 팝업 (월 이동 가능) ──
function toggleSafetyDatePicker(triggerEl) {
  const popup = document.getElementById("safety-date-calendar-popup");
  if (!popup) return;
  if (popup.classList.contains("show")) {
    closeSafetyDatePicker();
    return;
  }
  openSafetyDatePicker(triggerEl);
}

function openSafetyDatePicker(triggerEl) {
  const popup = document.getElementById("safety-date-calendar-popup");
  if (!popup) return;

  if (currentSafetyDate) {
    const [y, m] = currentSafetyDate.split("-").map(Number);
    safetyCalCursor = new Date(y, m - 1, 1);
  }
  renderSafetyDatePickerGrid();

  triggerEl.classList.add("active");
  const rect = triggerEl.getBoundingClientRect();
  const popupWidth = popup.offsetWidth || 216;
  let left = rect.right - popupWidth;
  if (left < 8) left = Math.min(rect.left, window.innerWidth - popupWidth - 8);
  popup.style.left = `${Math.max(8, left)}px`;
  popup.style.top = `${rect.bottom + 6}px`;
  popup.classList.add("show");

  const popupRect = popup.getBoundingClientRect();
  if (popupRect.bottom > window.innerHeight - 8) {
    popup.style.top = `${rect.top - popupRect.height - 6}px`;
  }
}

function closeSafetyDatePicker() {
  const popup = document.getElementById("safety-date-calendar-popup");
  if (popup) popup.classList.remove("show");
  const btn = document.getElementById("safety-date-select");
  if (btn) btn.classList.remove("active");
}

function renderSafetyDatePickerGrid() {
  const labelEl = document.getElementById("safety-dcp-month-label");
  const grid = document.getElementById("safety-dcp-grid");
  if (!labelEl || !grid) return;

  const year = safetyCalCursor.getFullYear();
  const month = safetyCalCursor.getMonth(); // 0-based
  labelEl.textContent = `${year}년 ${pad2(month + 1)}월`;

  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const now = new Date();
  const todayKey = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;

  grid.innerHTML = "";
  for (let i = 0; i < firstWeekday; i++) {
    grid.insertAdjacentHTML("beforeend", `<span class="dcp-day empty"></span>`);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const key = `${year}-${pad2(month + 1)}-${pad2(d)}`;
    const hasData = typeof SAFETY_DATA !== "undefined" && !!SAFETY_DATA[key];
    const cls = ["dcp-day"];
    if (hasData) cls.push("has-data");
    if (key === currentSafetyDate) cls.push("selected");
    if (key === todayKey) cls.push("today");
    grid.insertAdjacentHTML("beforeend",
      `<span class="${cls.join(" ")}"${hasData ? ` data-key="${key}"` : ""} title="${hasData ? safetyDateLabel(key) : ""}">${d}</span>`);
  }

  grid.querySelectorAll(".dcp-day.has-data").forEach(el => {
    el.addEventListener("click", () => {
      setSafetyDate(el.dataset.key);
      closeSafetyDatePicker();
    });
  });
}

function initSafetyDatePicker() {
  const btn = document.getElementById("safety-date-select");
  const popup = document.getElementById("safety-date-calendar-popup");
  const prevBtn = document.getElementById("safety-dcp-prev");
  const nextBtn = document.getElementById("safety-dcp-next");
  if (!btn || !popup) return;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSafetyDatePicker(btn);
  });
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      safetyCalCursor.setMonth(safetyCalCursor.getMonth() - 1);
      renderSafetyDatePickerGrid();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      safetyCalCursor.setMonth(safetyCalCursor.getMonth() + 1);
      renderSafetyDatePickerGrid();
    });
  }

  document.addEventListener("click", (e) => {
    if (!popup.classList.contains("show")) return;
    if (popup.contains(e.target) || btn.contains(e.target)) return;
    closeSafetyDatePicker();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSafetyDatePicker();
  });
  window.addEventListener("resize", closeSafetyDatePicker);
}

function renderSafetyTable(dateKey) {
  const summaryEl = document.getElementById("safety-summary");
  const tbody = document.getElementById("safety-tbody");
  if (!tbody) return;

  const list = (typeof SAFETY_DATA !== "undefined" && SAFETY_DATA[dateKey]) || [];
  const total = list.length;
  const approvedCount = list.filter(r => isSafetyApproved(r.status)).length;
  const otherCount = total - approvedCount;

  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="safety-stat">
        <div class="safety-stat-value">${fmt(total)}</div>
        <div class="safety-stat-label">전체 작업</div>
      </div>
      <div class="safety-stat">
        <div class="safety-stat-value pass">${fmt(approvedCount)}</div>
        <div class="safety-stat-label">작업승인</div>
      </div>
      <div class="safety-stat">
        <div class="safety-stat-value fail">${fmt(otherCount)}</div>
        <div class="safety-stat-label">그 외</div>
      </div>
    `;
  }

  if (!total) {
    tbody.innerHTML = `<tr><td colspan="6" class="quality-table-empty">등록된 유해위험작업이 없습니다.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(rec => {
    const badgeClass = isSafetyApproved(rec.status) ? "approved" : "pending";
    return `
      <tr>
        <td>${escapeHtml(rec.date || "-")}</td>
        <td>${escapeHtml(rec.company || "-")}</td>
        <td>${escapeHtml(rec.grade || "-")}</td>
        <td>${escapeHtml(rec.work_name || "-")}</td>
        <td>${escapeHtml(rec.location || "-")}</td>
        <td><span class="safety-status-badge ${badgeClass}">${escapeHtml(rec.status || "-")}</span></td>
      </tr>
    `;
  }).join("");
}

function renderSafetyPane() {
  const btn = document.getElementById("safety-date-select");
  const summaryEl = document.getElementById("safety-summary");
  const tbody = document.getElementById("safety-tbody");

  if (typeof SAFETY_DATA === "undefined" || !Object.keys(SAFETY_DATA).length) {
    if (btn) btn.textContent = "날짜 없음";
    if (summaryEl) summaryEl.innerHTML = "";
    if (tbody) tbody.innerHTML = `<tr><td colspan="6" class="quality-table-empty">등록된 안전 데이터가 없습니다.</td></tr>`;
    return;
  }

  currentSafetyDate = pickDefaultSafetyDate();
  const [y, m] = currentSafetyDate.split("-").map(Number);
  safetyCalCursor = new Date(y, m - 1, 1);
  refreshSafetyDateButton();
  initSafetyDatePicker();
  renderSafetyTable(currentSafetyDate);
}

const TEAM_KEYS = ["공무팀", "공사팀", "안전보건팀", "품질팀", "관리팀"];

function renderTeamGenericPane(teamKey) {
  const data = (typeof TEAM_DATA !== "undefined" && TEAM_DATA[teamKey]) || null;
  const updatedEl = document.getElementById(`team-updated-${teamKey}`);
  const bodyEl = document.getElementById(`team-body-${teamKey}`);
  if (!bodyEl) return;

  const hasRows = data && Array.isArray(data.rows) && data.rows.length > 0;
  const hasImage = data && data.image;

  if (!hasRows && !hasImage) {
    if (updatedEl) updatedEl.textContent = "";
    bodyEl.innerHTML = "";
    return;
  }

  if (updatedEl) updatedEl.textContent = data.updated ? `업데이트: ${escapeHtml(data.updated)}` : "";

  let html = "";
  if (hasImage) {
    html += `<img class="team-pane-image" src="${escapeHtml(data.image)}" alt="${escapeHtml(teamKey)} 자료 이미지">`;
  }
  if (hasRows && Array.isArray(data.columns) && data.columns.length) {
    html += `
      <div class="team-table-scroll">
        <table class="team-table">
          <thead><tr>${data.columns.map(c => `<th>${escapeHtml(c)}</th>`).join("")}</tr></thead>
          <tbody>
            ${data.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(String(cell ?? ""))}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  bodyEl.innerHTML = html;
}

// ── 주요 일정 ──
let eventsViewMode = "calendar"; // "list" | "calendar" — 기본은 월간뷰
let eventsCalCursor = new Date(); // 월간뷰에서 현재 보고 있는 달의 기준일

function eventsYmd(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// startDate~endDate(둘 다 Date, 00:00 기준, inclusive) 범위의 일정을 반환
// ※ 예전엔 "매주 반복" 규칙으로 자동 생성했지만, 실제로는 주간회의 요일/시간이 달마다 바뀌기도 해서
//   지금은 매달 올려주는 일정표 이미지에 실제로 적힌 항목만 SCHEDULE_EVENTS_ONEOFF에 그대로 반영합니다.
function getEventsInRange(startDate, endDate) {
  const results = [];

  if (typeof SCHEDULE_EVENTS_ONEOFF !== "undefined") {
    SCHEDULE_EVENTS_ONEOFF.forEach(ev => {
      const d = new Date(ev.date + "T00:00:00");
      if (d >= startDate && d <= endDate) results.push(ev);
    });
  }

  results.sort((a, b) => (a.date + " " + a.time).localeCompare(b.date + " " + b.time));
  return results;
}

function renderEventsCard() {
  if (eventsViewMode === "calendar") renderEventsCalendar();
  else renderEventsList();
}

function renderEventsList() {
  const el = document.getElementById("events-list");
  const label = document.getElementById("events-cal-label");
  if (!el) return;

  const year = eventsCalCursor.getFullYear();
  const month = eventsCalCursor.getMonth(); // 0-based
  if (label) label.textContent = `${year}년 ${month + 1}월`;

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 월 전체(1일~말일) 일정을 모두 가져옴 - 캘린더 뷰와 동일한 달의 일정을 빠짐없이 스크롤로 확인 가능
  const events = getEventsInRange(firstDay, lastDay);
  if (!events.length) {
    el.innerHTML = `<div class="events-empty">등록된 일정이 없습니다.</div>`;
    return;
  }

  const groups = {};
  events.forEach(ev => {
    (groups[ev.date] = groups[ev.date] || []).push(ev);
  });

  const todayKey = eventsYmd(today);
  const weekdayNames = ["일", "월", "화", "수", "목", "금", "토"];
  let html = "";
  Object.keys(groups).sort().forEach(dateKey => {
    const d = new Date(dateKey + "T00:00:00");
    const isToday = dateKey === todayKey;
    html += `<div class="events-day-group${isToday ? " is-today" : ""}">`;
    html += `<div class="events-day-hdr">${d.getMonth() + 1}/${d.getDate()} (${weekdayNames[d.getDay()]})${isToday ? `<span class="events-today-badge">오늘</span>` : ""}</div>`;
    groups[dateKey].forEach(ev => {
      html += `<div class="events-item">
        <span class="events-item-time">${escapeHtml(ev.time)}</span>
        <span class="events-item-title">${escapeHtml(ev.title)}</span>
        ${ev.note ? `<span class="events-item-note">${escapeHtml(ev.note)}</span>` : ""}
      </div>`;
    });
    html += `</div>`;
  });
  el.innerHTML = html;
}

function renderEventsCalendar() {
  const grid = document.getElementById("events-cal-grid");
  const label = document.getElementById("events-cal-label");
  if (!grid || !label) return;

  const year = eventsCalCursor.getFullYear();
  const month = eventsCalCursor.getMonth(); // 0-based
  label.textContent = `${year}년 ${month + 1}월`;

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstWeekday = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  const events = getEventsInRange(firstDay, lastDay);
  const byDate = {};
  events.forEach(ev => (byDate[ev.date] = byDate[ev.date] || []).push(ev));

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayKey = eventsYmd(today);

  let html = "";
  for (let i = 0; i < firstWeekday; i++) {
    html += `<div class="events-cal-cell empty"></div>`;
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(year, month, d);
    const key = eventsYmd(dateObj);
    const dayEvents = byDate[key] || [];
    const cls = ["events-cal-cell"];
    if (dateObj.getDay() === 0) cls.push("sunday");
    if (key === todayKey) cls.push("today");
    if (dayEvents.length) cls.push("has-events");
    html += `<div class="${cls.join(" ")}"${dayEvents.length ? ` data-date="${key}"` : ""}>
      <div class="events-cal-daynum">${d}</div>
      ${dayEvents.map(ev => `<div class="events-cal-chip" title="${escapeHtml(ev.time + " " + ev.title + (ev.note ? " - " + ev.note : ""))}">${escapeHtml(ev.time)} ${escapeHtml(ev.title)}</div>`).join("")}
    </div>`;
  }
  grid.innerHTML = html;

  grid.querySelectorAll(".events-cal-cell.has-events").forEach(cell => {
    cell.addEventListener("click", () => openEventsDayModal(cell.dataset.date));
  });
}

function renderEventsDayModal(dateKey) {
  const titleEl = document.getElementById("events-day-modal-title");
  const bodyEl = document.getElementById("events-day-modal-body");
  if (!titleEl || !bodyEl) return;

  const d = new Date(dateKey + "T00:00:00");
  const weekdayNames = ["일", "월", "화", "수", "목", "금", "토"];
  titleEl.textContent = `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${weekdayNames[d.getDay()]}) 일정`;

  const events = getEventsInRange(d, d);
  if (!events.length) {
    bodyEl.innerHTML = `<div class="events-day-modal-empty">등록된 일정이 없습니다.</div>`;
    return;
  }

  bodyEl.innerHTML = events.map(ev => `
    <div class="events-day-modal-item">
      <div class="events-day-modal-time">${escapeHtml(ev.time)}</div>
      <div class="events-day-modal-text">
        <div class="events-day-modal-item-title">${escapeHtml(ev.title)}</div>
        ${ev.note ? `<div class="events-day-modal-item-note">${escapeHtml(ev.note)}</div>` : ""}
      </div>
    </div>
  `).join("");
}

function openEventsDayModal(dateKey) {
  const modal = document.getElementById("events-day-modal");
  if (!modal || !dateKey) return;
  renderEventsDayModal(dateKey);
  modal.classList.add("show");
}

function closeEventsDayModal() {
  const modal = document.getElementById("events-day-modal");
  if (modal) modal.classList.remove("show");
}

function initEventsDayModal() {
  const closeBtn = document.getElementById("events-day-modal-close-btn");
  const overlay = document.getElementById("events-day-modal");
  if (closeBtn) closeBtn.addEventListener("click", closeEventsDayModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeEventsDayModal();
    });
  }
}

function initEventsCard() {
  const tabBar = document.getElementById("events-view-tabs");
  const listWrap = document.getElementById("events-list-wrap");
  const calWrap = document.getElementById("events-cal-wrap");

  if (tabBar) {
    tabBar.querySelectorAll(".wtab").forEach(btn => {
      btn.addEventListener("click", () => {
        tabBar.querySelectorAll(".wtab").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        eventsViewMode = btn.dataset.view;
        if (listWrap) listWrap.style.display = (eventsViewMode === "list") ? "" : "none";
        if (calWrap) calWrap.style.display = (eventsViewMode === "calendar") ? "" : "none";
        renderEventsCard();
      });
    });
  }

  const prevBtn = document.getElementById("events-cal-prev");
  const nextBtn = document.getElementById("events-cal-next");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      eventsCalCursor.setMonth(eventsCalCursor.getMonth() - 1);
      renderEventsCard();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      eventsCalCursor.setMonth(eventsCalCursor.getMonth() + 1);
      renderEventsCard();
    });
  }

  renderEventsCard();
}

function initTeamMainTabs() {
  const tabBar = document.getElementById("team-main-tabs");
  if (!tabBar) return;

  tabBar.querySelectorAll(".wtab").forEach(btn => {
    btn.addEventListener("click", () => {
      const team = btn.dataset.team;
      tabBar.querySelectorAll(".wtab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      TEAM_KEYS.forEach(k => {
        const pane = document.getElementById(`team-pane-${k}`);
        if (pane) pane.style.display = (k === team) ? "" : "none";
      });
      // 공무팀 탭은 캔버스가 보이는 상태에서 그려야 크기가 제대로 잡히므로,
      // 탭이 눈에 보이게 된 시점에 (다시) 렌더링합니다.
      if (team === "공무팀") renderSchedulePane();
    });
  });

  // 초기 렌더 - 품질팀(QUALITY_DATA)과 안전보건팀(SAFETY_DATA)은 전용 렌더러를 쓰고,
  // 나머지 3팀은 TEAM_DATA(teamData.js)로 채웁니다
  TEAM_KEYS.filter(k => k !== "품질팀" && k !== "안전보건팀").forEach(renderTeamGenericPane);
}

function init() {
  // 1) 실시간 시계 가동
  updateClock();
  setInterval(updateClock, 1000);

  // 2) 기상 시뮬레이션 시작
  initWeatherLive();

  // 2-1) 스마트 체감온도계(feelsLikeData.js) 자동 재조회 시작 (5분마다 GitHub 최신값 반영)
  initFeelsLikeAutoRefresh();

  // 3) 탭 이벤트 등록 (이벤트 위임 방식 – 메모리 효율적)
  initTabs();

  // 4) 인원/장비/토공사 현황 – 작업일보 날짜 선택 초기화 및 초기 렌더링(오늘 날짜 자동 매칭)
  initReportDateSelects();
  if (currentReportDate) {
    renderWorkers(currentReportDate);
    renderEquip(currentReportDate);
    renderWorkStatusModal(currentReportDate);
    renderProgressCard(currentReportDate);
    renderEarth(currentReportDate);
  }
  initWorkStatusModal();

  // 4-2) 품질관리 현황(함수비/평판재하시험) 초기 렌더링 및 상세 모달 초기화
  renderQuality(currentQualityType);
  initQualityModal();
  initEquipModal();

  // 4-2-1) 안전/보건팀 유해위험작업 현황(safetyData.js) 초기 렌더링 및 날짜 선택 캘린더 초기화
  renderSafetyPane();

  // 4-3) 팀별 공유공간 탭 초기화 (공무/공사/안전보건/관리팀)
  initTeamMainTabs();

  // 4-4) 주요 일정 카드 초기화 (목록/월간 뷰 전환 포함)
  initEventsCard();
  initEventsDayModal();

  // 9) Leaflet 위성 지도 초기화 (지도는 DOM이 완전히 그려진 후 마운트해야 레이아웃 깨지지 않음)
  initMap();

  // 10) 네이버 날씨 모달 버튼 이벤트 등록
  initNaverWeatherModal();

  // 11) 공지사항 팝업 (notices.js에 등록된 공지가 있을 때만 노출)
  initNoticePopup();

  // 11-1) 헤더 게시판 흐르는 텍스트 티커 (무재해 배지 옆, 좌→우로 순환, board.js 기반)
  initBoardTicker();

  // 12) Site Map 외 나머지 카드들의 확대(전체화면) 아이콘 활성화
  initCardExpandButtons();
}

document.addEventListener("DOMContentLoaded", function() {
  initLockScreen(init);
});
