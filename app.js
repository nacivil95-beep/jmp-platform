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

function updateWorkRiskUI(ta, rh, wsMs) {
  if (isNaN(ta) || isNaN(rh)) return;
  const { value: feelsLike, season } = computeFeelsLike(ta, rh, wsMs);
  const risk = season === "summer" ? getHeatRiskLevel(feelsLike) : getColdRiskLevel(feelsLike);
  lastRiskInfo = { feelsLike, season, risk };

  const feelsEl = document.getElementById("w-feels-like");
  if (feelsEl) {
    feelsEl.textContent = `${feelsLike.toFixed(1)}℃`;
    feelsEl.className = "w-value " +
      (risk.level === "safe" ? "normal" : risk.level === "caution" ? "caution" : risk.level === "warning" ? "warning" : "danger");
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
// 시트(01~31) 중 실제로 수치가 채워진(=그날 작업이 진행된) 날짜만 선택 가능하도록 필터링합니다.
// (미래 날짜 시트는 다음날 작업 예정 텍스트만 미리 채워져 있고 투입 인원/장비는 0으로 비어있음)
function reportHasData(rep) {
  if (!rep) return false;
  const p = rep.personnel_total ? rep.personnel_total.today : 0;
  const e = rep.equipment_total ? rep.equipment_total.today : 0;
  const t = rep.work_today ? rep.work_today.length : 0;
  return p > 0 || e > 0 || t > 0;
}

let REPORT_DATE_KEYS = [];
function rebuildReportDateKeys() {
  REPORT_DATE_KEYS = Object.keys(DAILY_REPORTS)
    .sort()
    .filter(k => reportHasData(DAILY_REPORTS[k]));
}
rebuildReportDateKeys();

let currentReportDate = pickDefaultReportDate();

function pickDefaultReportDate() {
  const now = new Date();
  const todayKey = String(now.getDate()).padStart(2, "0");
  if (REPORT_DATE_KEYS.includes(todayKey)) return todayKey;
  // 오늘 날짜 시트가 없으면(예: 이번 달이 아니거나 아직 미작성) 가장 최근 실데이터 시트를 사용합니다.
  return REPORT_DATE_KEYS.length ? REPORT_DATE_KEYS[REPORT_DATE_KEYS.length - 1] : null;
}

function dateOptionLabel(key) {
  const rep = DAILY_REPORTS[key];
  const md = rep.date ? rep.date.slice(5).replace("-", "/") : key;
  return `${md} (${rep.weather || "-"})`;
}

// 날짜 선택 <select> 2개(인원/장비 카드)를 채우고 서로 동기화합니다.
function initReportDateSelects() {
  const selects = [
    document.getElementById("worker-date-select"),
    document.getElementById("equip-date-select"),
    document.getElementById("earth-date-select")
  ];
  selects.forEach(sel => {
    if (!sel) return;
    sel.innerHTML = REPORT_DATE_KEYS.map(k =>
      `<option value="${k}"${k === currentReportDate ? " selected" : ""}>${dateOptionLabel(k)}</option>`
    ).join("");
    sel.addEventListener("change", (e) => {
      setReportDate(e.target.value);
    });
  });
}

function setReportDate(key) {
  if (!DAILY_REPORTS[key]) return;
  currentReportDate = key;
  ["worker-date-select", "equip-date-select", "earth-date-select"].forEach(id => {
    const sel = document.getElementById(id);
    if (sel && sel.value !== key) sel.value = key;
  });
  renderWorkers(key);
  renderEquip(key);
  renderWorkStatusModal(key);
  renderProgressCard(key);
  renderEarth(key);
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

  document.getElementById("worker-staff").textContent = fmt(staffToday);
  document.getElementById("worker-sub").textContent = fmt(subToday);

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

  const weatherEl = document.getElementById("equip-date-weather");
  if (weatherEl) weatherEl.textContent = rep.weather ? `날씨: ${rep.weather}` : "";

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
      tr.addEventListener("click", () => openEquipDetailPopup(item.name, key));
    }
  });
}

// ── 장비 세부 규격 팝업(새창) ──
// 장비 현황 표에서 특정 장비(대분류)를 클릭하면, 해당 날짜 기준 규격별 보유/투입 대수를 새 창으로 띄웁니다.
function openEquipDetailPopup(type, key) {
  const rep = DAILY_REPORTS[key];
  if (!rep) return;

  const details = (rep.equipment_detail || []).filter(d => d.type === type);
  const dateLabel = rep.date || key;

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
    : `<tr><td colspan="4" class="equip-popup-empty">규격별 세부 데이터가 없습니다.</td></tr>`;

  const totalToday = details.reduce((sum, d) => sum + (d.today || 0), 0);
  const totalPrev = details.reduce((sum, d) => sum + (d.prev || 0), 0);
  const totalCum = details.reduce((sum, d) => sum + (d.cum || 0), 0);

  const html = `
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>${escapeHtml(type)} 규격별 상세 - ${escapeHtml(dateLabel)}</title>
<style>
  :root {
    --bg-root: #0d111a;
    --bg-card: #1a2133;
    --bg-inner: #111827;
    --border: #2a3347;
    --text-white: #f0f4ff;
    --text-muted: #8899bb;
    --text-dim: #4a5a7a;
    --orange-light: #fdba74;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 20px;
    background: var(--bg-root);
    color: var(--text-white);
    font-family: "Pretendard", "Malgun Gothic", -apple-system, sans-serif;
  }
  .popup-hdr {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
    padding-bottom: 10px;
    margin-bottom: 14px;
  }
  .popup-title { font-size: 16px; font-weight: 700; }
  .popup-date { font-size: 12px; color: var(--text-muted); }
  table {
    width: 100%;
    border-collapse: collapse;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  th, td {
    padding: 8px 10px;
    text-align: left;
    font-size: 13px;
  }
  th {
    background: var(--bg-inner);
    color: var(--text-muted);
    font-weight: 600;
    font-size: 12px;
    border-bottom: 1px solid var(--border);
  }
  td { border-bottom: 1px solid var(--border); color: var(--text-white); }
  tr:last-child td { border-bottom: none; }
  th:not(:first-child), td:not(:first-child) { text-align: right; }
  .equip-qty-0 { color: var(--text-dim); }
  .equip-qty-pos { color: var(--orange-light); font-weight: 600; }
  .total-row td { background: var(--bg-inner); font-weight: 700; }
  .equip-popup-empty { text-align: center; color: var(--text-dim); padding: 20px; }
</style>
</head>
<body>
  <div class="popup-hdr">
    <div class="popup-title">${escapeHtml(type)} · 규격별 상세</div>
    <div class="popup-date">${escapeHtml(dateLabel)} 기준</div>
  </div>
  <table>
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
</body>
</html>
  `;

  const popup = window.open("", "_blank", "width=480,height=560,resizable=yes,scrollbars=yes");
  if (!popup) {
    alert("팝업이 차단되었습니다. 브라우저 팝업 차단을 해제해주세요.");
    return;
  }
  popup.document.open();
  popup.document.write(html);
  popup.document.close();
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
    progressLabel.textContent =
      `공정율(%)  계획 ${rep.progress.plan}%  ·  실시 ${rep.progress.actual}%  ·  대비 ${rep.progress.diff}%`;
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
  if (openBtn) openBtn.addEventListener("click", openWorkStatusModal);
  if (closeBtn) closeBtn.addEventListener("click", closeWorkStatusModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeWorkStatusModal();
    });
  }
}

// =========================================================================
// 5-1. 작업일보 엑셀 "직접 불러오기" (SheetJS) – 서버 없이 로컬 파일 선택만으로 갱신
// =========================================================================
// 매일 현장에서 작업일보 엑셀에 그날 시트를 채워 저장하면, 이 버튼으로 그 파일을 선택해
// 브라우저에서 바로 파싱합니다(별도 변환 작업/재배포 불필요). dailyData.js는 최초 진입 시
// 보여줄 기본값(폴백)일 뿐이며, 여기서 불러온 내용이 우선합니다.

function xlsxCellStr(ws, addr) {
  const c = ws[addr];
  if (!c || c.v === undefined || c.v === null) return null;
  return String(c.v);
}
function xlsxCellNum(ws, addr) {
  const c = ws[addr];
  if (!c || c.v === undefined || c.v === null) return 0;
  const n = Number(c.v);
  return isNaN(n) ? 0 : n;
}
function xlsxDateStr(ws, addr) {
  const c = ws[addr];
  if (!c || c.v === undefined || c.v === null) return "";
  // ⚠️ 파싱오류 수정 (18일 시트 → 17일로 표시되던 문제):
  // 예전에는 워크북을 cellDates:true로 읽어 c.v가 JS Date 객체로 들어왔고,
  // 여기서 getFullYear()/getMonth()/getDate() 같은 "로컬 타임존" 기준 메서드로
  // 날짜를 뽑아냈습니다. 그런데 SheetJS가 이 Date 객체를 만드는 과정 자체가
  // 로컬 타임존을 태우기 때문에(+ 엑셀 시리얼 값의 부동소수점 오차까지 겹치면),
  // 대시보드를 여는 PC/브라우저의 타임존에 따라 자정 대신 "전날 23:59:xx"에
  // 가까운 시각이 만들어져 날짜가 하루 밀리는 문제가 있었습니다.
  // → 해결: Date 객체를 거치지 않고, 엑셀 원본 시리얼 숫자를 SheetJS의 순수
  //   계산 유틸(XLSX.SSF.parse_date_code)로 직접 캘린더 날짜로 변환합니다.
  //   타임존 개념이 전혀 없는 계산이라 어떤 환경에서 열어도 항상 정확합니다.
  //   (워크북을 읽을 때도 cellDates 옵션을 빼서 항상 원본 숫자로 받습니다.)
  if (typeof XLSX !== "undefined" && XLSX.SSF && (c.t === "n" || typeof c.v === "number")) {
    const info = XLSX.SSF.parse_date_code(c.v);
    if (info) {
      return `${info.y}-${String(info.m).padStart(2, "0")}-${String(info.d).padStart(2, "0")}`;
    }
  }
  // 만약을 대비한 폴백 (숫자/시리얼이 아닌 경우)
  if (c.v instanceof Date) {
    const d = c.v;
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  return String(c.v);
}

function xlsxCollectText(ws, col, rStart, rEnd) {
  const lines = [];
  for (let r = rStart; r <= rEnd; r++) {
    const v = xlsxCellStr(ws, col + r);
    if (v !== null && v.trim() !== "") lines.push(v.replace(/\s+$/, ""));
  }
  return lines;
}

function xlsxCollectPersonnel(ws) {
  const rows = [];
  for (let r = 202; r <= 228; r++) {
    const role = xlsxCellStr(ws, "H" + r);
    if (role === null || role.trim() === "") continue;
    rows.push({
      role: role.trim(),
      prev: xlsxCellNum(ws, "J" + r),
      today: xlsxCellNum(ws, "K" + r),
      cum: xlsxCellNum(ws, "L" + r)
    });
  }
  const total = { prev: xlsxCellNum(ws, "J229"), today: xlsxCellNum(ws, "K229"), cum: xlsxCellNum(ws, "L229") };
  return { rows, total };
}

function xlsxCollectEquipment(ws) {
  const rows = [];
  let curType = null;
  for (let r = 202; r <= 228; r++) {
    const typ = xlsxCellStr(ws, "M" + r);
    const spec = xlsxCellStr(ws, "N" + r);
    if (typ !== null && typ.trim() !== "") curType = typ.trim();
    if (spec === null && typ === null) continue;
    if (curType === null) continue;
    rows.push({
      type: curType,
      spec: spec !== null ? spec.trim() : "",
      prev: xlsxCellNum(ws, "O" + r),
      today: xlsxCellNum(ws, "P" + r),
      cum: xlsxCellNum(ws, "Q" + r)
    });
  }
  const total = { prev: xlsxCellNum(ws, "O229"), today: xlsxCellNum(ws, "P229"), cum: xlsxCellNum(ws, "Q229") };

  const aggMap = {};
  const order = [];
  rows.forEach(row => {
    if (!aggMap[row.type]) {
      aggMap[row.type] = { type: row.type, prev: 0, today: 0, cum: 0 };
      order.push(row.type);
    }
    aggMap[row.type].prev += row.prev;
    aggMap[row.type].today += row.today;
    aggMap[row.type].cum += row.cum;
  });
  const agg = order.map(t => aggMap[t]);
  return { rows, agg, total };
}

function xlsxCollectEarth(ws) {
  const earth = {};
  Object.keys(EARTH_ROWS).forEach(rowStr => {
    const row = Number(rowStr);
    const { label, start } = EARTH_ROWS[row];
    earth[label] = {
      design: xlsxCellNum(ws, "E" + row),
      prev: xlsxCellNum(ws, "F" + row),
      today: xlsxCellNum(ws, "G" + row),
      cum: xlsxCellNum(ws, "H" + row),
      start
    };
  });
  return earth;
}

// 워크북(01~31 시트)을 DAILY_REPORTS와 동일한 구조의 객체로 변환합니다.
function parseWorkbookToReports(workbook) {
  const result = {};
  for (let i = 1; i <= 31; i++) {
    const name = String(i).padStart(2, "0");
    const ws = workbook.Sheets[name];
    if (!ws) continue;

    const plan = xlsxCellNum(ws, "N4");
    const actual = xlsxCellNum(ws, "O4");
    const diff = xlsxCellNum(ws, "P4");
    const personnel = xlsxCollectPersonnel(ws);
    const equipment = xlsxCollectEquipment(ws);

    result[name] = {
      date: xlsxDateStr(ws, "M5"),
      weather: xlsxCellStr(ws, "Q5"),
      progress: {
        plan: Math.round(plan * 10000) / 100,
        actual: Math.round(actual * 10000) / 100,
        diff: Math.round(diff * 10000) / 100
      },
      earth: xlsxCollectEarth(ws),
      work_today: xlsxCollectText(ws, "B", 7, 49),
      work_tomorrow: xlsxCollectText(ws, "J", 7, 49),
      personnel: personnel.rows,
      personnel_total: personnel.total,
      equipment_detail: equipment.rows,
      equipment: equipment.agg,
      equipment_total: equipment.total
    };
  }
  return result;
}

function setExcelLoadStatus(text, isError) {
  const el = document.getElementById("excel-load-status");
  if (!el) return;
  el.textContent = text;
  el.classList.toggle("error", !!isError);
}

// 엑셀 원본(ArrayBuffer)을 파싱해 대시보드에 실제로 반영하는 공통 로직.
// - 수동 파일 선택(<input type=file>)
// - 자동 재읽기(File System Access API로 저장해둔 파일 핸들)
// 두 경로 모두 이 함수를 거치도록 통일했습니다.
function applyWorkbookArrayBuffer(arrayBuffer, labelForStatus) {
  const data = new Uint8Array(arrayBuffer);
  // cellDates 옵션을 사용하지 않습니다: 날짜 셀을 JS Date로 자동 변환하면
  // SheetJS 내부적으로 로컬 타임존을 거치면서 날짜가 하루 밀리는 파싱오류가
  // 발생할 수 있습니다(xlsxDateStr 함수 주석 참고). 원본 시리얼 숫자를 그대로
  // 받아 타임존 영향이 없는 XLSX.SSF.parse_date_code로 직접 변환합니다.
  const workbook = XLSX.read(data, { type: "array" });
  const parsed = parseWorkbookToReports(workbook);
  if (Object.keys(parsed).length === 0) {
    throw new Error("일자별 시트(01~31 형식)를 찾지 못했습니다.");
  }

  DAILY_REPORTS = parsed;
  rebuildReportDateKeys();
  currentReportDate = pickDefaultReportDate();
  initReportDateSelects();
  if (currentReportDate) {
    renderWorkers(currentReportDate);
    renderEquip(currentReportDate);
    renderWorkStatusModal(currentReportDate);
    renderProgressCard(currentReportDate);
    renderEarth(currentReportDate);
  }
  const now = new Date().toLocaleTimeString("ko-KR", { hour12: false });
  setExcelLoadStatus(`불러오기 완료: ${labelForStatus} (${now})`, false);
}

// =========================================================================
// 5-1a. 저장된 파일 핸들 보관 (IndexedDB) – File System Access API용
// =========================================================================
// FileSystemFileHandle은 구조화 복제(structured clone)가 가능해 IndexedDB에
// 그대로 저장할 수 있습니다. 여기 저장해두면, 다음에 앱을 열었을 때 사용자가
// 파일을 다시 선택하지 않아도 같은 파일을 다시 찾아 읽을 수 있습니다.
const EXCEL_HANDLE_DB = "xitecore-excel-handle-db";
const EXCEL_HANDLE_STORE = "handles";
const EXCEL_HANDLE_KEY = "workReportFile";

function openHandleDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(EXCEL_HANDLE_DB, 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(EXCEL_HANDLE_STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveExcelHandle(handle) {
  const db = await openHandleDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(EXCEL_HANDLE_STORE, "readwrite");
    tx.objectStore(EXCEL_HANDLE_STORE).put(handle, EXCEL_HANDLE_KEY);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function loadExcelHandle() {
  const db = await openHandleDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(EXCEL_HANDLE_STORE, "readonly");
    const req = tx.objectStore(EXCEL_HANDLE_STORE).get(EXCEL_HANDLE_KEY);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

// =========================================================================
// 5-1b. 작업일보 엑셀 "자동" 불러오기 – File System Access API (Chrome/Edge)
// =========================================================================
// 최초 1회 파일을 선택해두면, 그 이후로는 index.html을 열 때마다 사용자 클릭 없이
// 자동으로 같은 파일의 "현재" 내용을 다시 읽어옵니다. 현장에서는 매일 같은 파일에
// 그날 시트만 채워 덮어써주면, 앱을 열 때마다 항상 최신 상태가 반영됩니다.
// ※ Firefox/Safari는 File System Access API를 지원하지 않아 이 기능이 자동으로
//   빠지고, 기존처럼 매번 수동으로 파일을 선택하는 방식으로 동작합니다.
const FS_ACCESS_SUPPORTED = typeof window.showOpenFilePicker === "function";

// 권한 재확인이 필요한 상태(이미 파일은 알고 있지만 이번 세션에서 아직 재허용 안 됨)일 때,
// 버튼을 눌렀을 때 "파일 선택창을 다시 띄우지 않고" 곧바로 권한만 재요청할 수 있도록
// 해당 핸들을 기억해둡니다.
let pendingReconfirmHandle = null;

async function trySilentAutoLoad() {
  if (!FS_ACCESS_SUPPORTED) return false;
  let handle;
  try {
    handle = await loadExcelHandle();
  } catch (e) {
    console.warn("[자동 불러오기] 저장된 파일 핸들 조회 실패", e);
    return false;
  }
  if (!handle) return false; // 아직 한 번도 자동 불러오기를 설정한 적 없음

  try {
    // queryPermission은 사용자 클릭(gesture) 없이도 호출 가능합니다.
    // 이미 "허용"된 상태라면 아무 팝업 없이 바로 파일을 읽습니다.
    const perm = await handle.queryPermission({ mode: "read" });
    if (perm !== "granted") {
      // Chrome은 브라우저를 새로 켤 때마다 이 권한을 "prompt" 상태로 되돌립니다
      // (파일을 계속 기억해뒀다가 몰래 읽는 걸 막기 위한 보안 정책). 파일을 다시
      // 고를 필요는 없고, 버튼을 한 번만 눌러 권한만 재확인하면 됩니다.
      pendingReconfirmHandle = handle;
      const fname = handle.name ? ` (${handle.name})` : "";
      setExcelLoadStatus(`자동 불러오기 권한 재확인 필요${fname} - 버튼을 눌러주세요`, true);
      return false;
    }
    const file = await handle.getFile();
    const buf = await file.arrayBuffer();
    applyWorkbookArrayBuffer(buf, `${file.name} (자동)`);
    return true;
  } catch (e) {
    console.error("[자동 불러오기 실패]", e);
    setExcelLoadStatus("자동 불러오기 실패 - 버튼을 눌러 파일을 다시 선택해주세요", true);
    return false;
  }
}

// 이미 저장된 핸들의 권한만 재요청(파일 선택창 없이, 클릭 한 번으로 즉시 처리).
async function reconfirmPendingHandle() {
  const handle = pendingReconfirmHandle;
  if (!handle) return false;
  try {
    const perm = await handle.requestPermission({ mode: "read" }); // 클릭 직후 호출이라 사용자 제스처 인정됨
    if (perm !== "granted") {
      setExcelLoadStatus("파일 접근 권한이 거부되었습니다", true);
      return false;
    }
    pendingReconfirmHandle = null;
    const file = await handle.getFile();
    const buf = await file.arrayBuffer();
    applyWorkbookArrayBuffer(buf, `${file.name} (자동)`);
    return true;
  } catch (e) {
    console.error("[권한 재확인 실패]", e);
    setExcelLoadStatus("권한 재확인 실패 - 파일을 다시 선택해주세요", true);
    return false;
  }
}

// 사용자가 버튼을 눌렀을 때: File System Access API 지원 브라우저면 파일 선택 +
// 앞으로 자동 불러오기용으로 핸들을 저장. 미지원 브라우저면 기존 방식(input click)으로 폴백.
async function pickExcelWithFsAccess() {
  try {
    const [handle] = await window.showOpenFilePicker({
      types: [{ description: "작업일보 엑셀", accept: { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"] } }],
      excludeAcceptAllOption: false,
      multiple: false
    });
    const perm = await handle.requestPermission({ mode: "read" }); // 최초 1회는 사용자 클릭이 있어야 허용됨
    if (perm !== "granted") {
      setExcelLoadStatus("파일 접근 권한이 거부되었습니다", true);
      return;
    }
    await saveExcelHandle(handle);
    pendingReconfirmHandle = null;
    const file = await handle.getFile();
    const buf = await file.arrayBuffer();
    applyWorkbookArrayBuffer(buf, `${file.name} (자동 불러오기 설정 완료)`);
  } catch (e) {
    if (e && e.name === "AbortError") return; // 사용자가 선택 취소
    console.error("[작업일보 불러오기 실패]", e);
    setExcelLoadStatus("불러오기 실패 - 파일 형식을 확인하세요", true);
  }
}

function initExcelLoader() {
  const btn = document.getElementById("excel-load-btn");
  const input = document.getElementById("excel-file-input");
  if (!btn || !input || typeof XLSX === "undefined") return;

  if (FS_ACCESS_SUPPORTED) {
    // 자동 불러오기 지원 브라우저: 버튼을 누르면 "다음부터 자동으로 불러올 파일"을 (재)설정
    btn.title = "엑셀 파일을 한 번 선택해두면, 다음부터는 앱을 열 때 자동으로 최신 내용을 불러옵니다";
    btn.addEventListener("click", async () => {
      // 이미 알고 있는 파일인데 이번 세션에서 권한만 재확인하면 되는 경우,
      // 파일 선택창을 다시 띄우지 않고 권한 재요청만으로 끝냅니다.
      if (pendingReconfirmHandle) {
        const ok = await reconfirmPendingHandle();
        if (ok) return;
        // 재확인도 실패했으면(예: 사용자가 거부) 완전히 새로 선택하도록 이어서 진행
      }
      pickExcelWithFsAccess();
    });
    // 앱을 여는 즉시(클릭 없이) 이전에 설정해둔 파일을 자동으로 다시 읽어봅니다.
    trySilentAutoLoad();
  } else {
    // 미지원 브라우저(Firefox/Safari 등): 기존 수동 방식 그대로 유지
    setExcelLoadStatus("이 브라우저는 자동 불러오기를 지원하지 않아 매번 수동으로 선택해야 합니다", false);
    btn.addEventListener("click", () => input.click());
    input.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      setExcelLoadStatus("불러오는 중...", false);
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          applyWorkbookArrayBuffer(ev.target.result, file.name);
        } catch (err) {
          console.error("[작업일보 불러오기 실패]", err);
          setExcelLoadStatus("불러오기 실패 - 파일 형식을 확인하세요", true);
        } finally {
          input.value = "";
        }
      };
      reader.onerror = () => setExcelLoadStatus("파일 읽기 오류", true);
      reader.readAsArrayBuffer(file);
    });
  }
}

// =========================================================================
// 7. 공정율 및 작업일보 카드 렌더링
// =========================================================================
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

  // 반응형 레이아웃에서 화면 폭/방향이 바뀌면(모바일 회전 등) 지도 컨테이너 크기도
  // 다시 계산해줘야 타일이 밀리거나 빈 영역이 생기지 않습니다.
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => map.invalidateSize(), 200);
  });

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
function init() {
  // 1) 실시간 시계 가동
  updateClock();
  setInterval(updateClock, 1000);

  // 2) 기상 시뮬레이션 시작
  initWeatherLive();

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

  // 4-1) 작업일보 엑셀 "불러오기" 버튼 초기화 (서버 없이 로컬 파일 선택 → 즉시 갱신)
  initExcelLoader();

  // 9) Leaflet 위성 지도 초기화 (지도는 DOM이 완전히 그려진 후 마운트해야 레이아웃 깨지지 않음)
  initMap();

  // 10) 네이버 날씨 모달 버튼 이벤트 등록
  initNaverWeatherModal();
}

document.addEventListener("DOMContentLoaded", function() {
  initLockScreen(init);
});
