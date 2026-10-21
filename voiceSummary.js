/**
 * 현황 요약 듣기 (voiceSummary.js)
 * ---------------------------------------------------------------------------
 * 헤더의 "현황 요약 듣기" 버튼 하나로
 *   1) 대시보드에 올라와 있는 현황(날씨/공정율/작업/인원·장비/안전/일정·알림)을 요약해 팝업으로 보여주고
 *   2) 브라우저 내장 음성(Web Speech API, speechSynthesis)으로 읽어줍니다.
 *
 * - 서버·API 키가 필요 없음 (요약은 규칙 기반 문장 조립, 음성은 기기/브라우저 내장 음성)
 * - app.js, style.css 는 수정하지 않음 (index.html 에서 app.js 다음에 이 파일만 불러오면 됨)
 * - 요약 문장은 "버튼을 누른 시점"의 화면/데이터 값으로 매번 새로 만듦
 *
 * 읽어오는 값
 *   DAILY_REPORTS / currentReportDate (작업일보), SAFETY_DATA (안전),
 *   SCHEDULE_EVENTS_ONEOFF (오늘 일정), BOARD_ITEMS (게시판),
 *   기상 카드(#w-*) 화면 값, 토공사 도넛(#pct-*) 화면 값
 *
 * 요약 항목/순서를 바꾸려면 아래 buildSections() 안의 "섹션" 블록을 수정하세요.
 */
(function () {
  "use strict";

  var synth = window.speechSynthesis || null;
  var RATE_KEY = "jmp_voice_rate_v1";
  var WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

  var detailMode = false;   // false: 간단히 / true: 자세히
  var units = [];           // 읽을 문장 목록 [{text, el}]
  var token = 0;            // 재생 세션 번호 (정지/재시작 시 이전 재생 콜백 무효화)
  var playing = false;
  var cachedVoice = null;

  // ───────────────────────── 공용 유틸 ─────────────────────────
  function pad(n) { return String(n).padStart(2, "0"); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function todayKey() {
    var d = new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function txt(id) {
    var e = document.getElementById(id);
    return e ? e.textContent.trim() : "";
  }
  function num(v) {
    var n = Number(v);
    return isNaN(n) ? null : n;
  }
  function r2(n) { return String(Math.round(n * 100) / 100); }
  function mdLabel(dateStr) {
    var p = String(dateStr || "").split("-");
    return p.length === 3 ? (Number(p[1]) + "월 " + Number(p[2]) + "일") : String(dateStr || "");
  }
  // 작업내용 줄 앞의 불릿/기호 제거
  function cleanLine(s) {
    return String(s).replace(/^[\s\-–·•○●▶ㅇ*]+/, "").replace(/\s+/g, " ").trim();
  }

  // 화면에 보이는 글자 → 음성으로 읽기 좋은 글자로 변환 (화면 표시는 원문 그대로 유지)
  function speechify(t) {
    return String(t)
      .replace(/(\d{1,2}):(\d{2})/g, function (m, h, mi) {
        return mi === "00" ? (Number(h) + "시") : (Number(h) + "시 " + Number(mi) + "분");
      })
      .replace(/℃/g, "도")
      .replace(/(\d)\s*m\/s/g, "$1 미터")
      .replace(/(\d)\s*mm\b/g, "$1 밀리미터")
      .replace(/㎥|m³|\bm3\b/g, "세제곱미터")
      .replace(/㎡|m²|\bm2\b/g, "제곱미터")
      .replace(/%/g, "퍼센트")
      .replace(/~/g, " 에서 ")
      .replace(/[()]/g, " ")
      .replace(/\//g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // 긴 문장은 잘라서 읽음 (일부 브라우저는 긴 발화가 중간에 끊기는 문제가 있음)
  function splitLong(text, max) {
    if (text.length <= max) return [text];
    var parts = text.split(/(?<=[,，;])\s*|\s+/);
    var out = [], cur = "";
    parts.forEach(function (p) {
      if ((cur + " " + p).trim().length > max && cur) { out.push(cur); cur = p; }
      else { cur = (cur + " " + p).trim(); }
    });
    if (cur) out.push(cur);
    return out;
  }

  // ───────────────────────── 요약 생성 ─────────────────────────
  // 섹션: { id, title, icon, lines: [{ text, kind: "lead" | "item" }] }
  function buildSections(detail) {
    var sections = [];
    var now = new Date();
    var tKey = todayKey();

    function add(id, title, icon, builder) {
      try {
        var lines = [];
        builder(lines);
        if (lines.length) sections.push({ id: id, title: title, icon: icon, lines: lines });
      } catch (e) {
        console.warn("[현황 요약] '" + title + "' 항목 생성 실패:", e);
      }
    }
    function L(lines, text) { lines.push({ text: text, kind: "lead" }); }
    function I(lines, text) { lines.push({ text: text, kind: "item" }); }

    // 대표 작업일보 (대시보드 날짜 선택 값 기준 — 기본은 오늘, 없으면 가장 최근)
    var rep = null;
    try {
      if (typeof DAILY_REPORTS !== "undefined" && typeof currentReportDate !== "undefined" &&
          currentReportDate && DAILY_REPORTS[currentReportDate]) {
        rep = DAILY_REPORTS[currentReportDate];
      }
    } catch (e) { rep = null; }
    var repIsToday = !!(rep && rep.date === tKey);

    // ── 섹션 1: 인사/날짜 ──
    add("intro", "오늘", "fa-calendar-day", function (lines) {
      L(lines, "오늘은 " + (now.getMonth() + 1) + "월 " + now.getDate() + "일 " +
        WEEKDAY[now.getDay()] + "요일, 진천메가폴리스 현장 현황 요약입니다.");
      var nm = txt("no-accident-day-count");
      if (/\d/.test(nm)) L(lines, nm.replace("달성", "달성 중") + "입니다.");
    });

    // ── 섹션 2: 날씨 ── (기상 카드에 표시된 값을 그대로 사용)
    add("weather", "기상", "fa-cloud-sun", function (lines) {
      var note = txt("w-updated-note");
      // 기상청 조회에 성공해야 "최근 갱신 ..." 문구가 찍힘. 아니면 HTML 기본 예시값일 수 있으므로 읽지 않음
      if (note.indexOf("최근 갱신") !== 0) {
        L(lines, "기상 정보를 아직 불러오지 못했습니다.");
        return;
      }
      var status = txt("w-status"), temp = txt("w-temp"), tmax = txt("w-temp-max");
      var wind = txt("w-wind"), rain = txt("w-rain-acc");
      var feels = txt("w-feels-like"), badge = txt("w-risk-badge"), guide = txt("w-risk-guide");
      L(lines, "현재 날씨는 " + status + ", 기온은 " + temp + "이고 오늘 최고기온은 " + tmax + "입니다.");
      L(lines, "풍속은 " + wind + ", 오늘 누적 강수량은 " + rain + "입니다.");
      if (feels && feels !== "-") {
        L(lines, "체감온도는 " + feels + (badge && badge !== "-" ? "이며, 작업 위험도는 " + badge + "입니다." : "입니다."));
        if (badge && badge !== "-" && badge !== "안전" && guide) I(lines, guide);
      }
    });

    // ── 섹션 3: 공정율 ──
    add("progress", "공정율", "fa-diagram-project", function (lines) {
      if (!rep) { L(lines, "작업일보 데이터가 없습니다."); return; }
      if (!repIsToday) {
        L(lines, "오늘 작업일보가 아직 없어, 가장 최근인 " + mdLabel(rep.date) + " 작업일보 기준으로 안내합니다.");
      }
      var p = rep.progress || {};
      var plan = num(p.plan), actual = num(p.actual);
      if (plan === null || actual === null) return;
      var diff = num(p.diff);
      if (diff === null) diff = actual - plan;
      var tail = diff === 0 ? "계획과 같습니다."
        : (diff > 0 ? "계획보다 " + r2(Math.abs(diff)) + "퍼센트 앞서 있습니다."
                    : "계획보다 " + r2(Math.abs(diff)) + "퍼센트 뒤처져 있습니다.");
      L(lines, "공정율은 계획 " + r2(plan) + "%, 실시 " + r2(actual) + "%로, " + tail);
    });

    // ── 섹션 4: 금일/명일 작업 ──
    add("work", "작업 현황", "fa-list-check", function (lines) {
      if (!rep) return;
      function listWork(label, arr, capShort, capDetail) {
        var items = (arr || []).map(cleanLine).filter(Boolean);
        if (!items.length) { L(lines, label + " 내용이 등록되지 않았습니다."); return; }
        var cap = detail ? capDetail : capShort;
        L(lines, label + "은 총 " + items.length + "건입니다.");
        items.slice(0, cap).forEach(function (t) { I(lines, t); });
        if (items.length > cap) L(lines, "그 외 " + (items.length - cap) + "건이 더 있습니다.");
      }
      listWork("금일 작업", rep.work_today, 3, 12);
      if (detail) listWork("명일 작업 예정", rep.work_tomorrow, 3, 10);
    });

    // ── 섹션 5: 인원·장비 ──
    add("people", "인원·장비", "fa-users", function (lines) {
      if (!rep || !rep.personnel_total) return;
      var total = rep.personnel_total.today || 0;
      var staffRow = (rep.personnel || []).filter(function (r) { return String(r.role).replace(/\s/g, "") === "직원"; })[0];
      var staff = staffRow ? staffRow.today : 0;
      var sub = Math.max(total - staff, 0);
      var equipP = rep.equipment_total ? (rep.equipment_total.today || 0) : 0;
      var all = staff + sub + equipP;
      L(lines, "현장 총인원은 " + all + "명으로, 시공사 직원 " + staff + "명, 협력사 " + sub + "명, 장비 인원 " + equipP + "명입니다.");
      var equipTotal = rep.equipment_total ? (rep.equipment_total.today || 0) : 0;
      L(lines, "투입 장비는 총 " + equipTotal + "대입니다.");
      if (detail) {
        var eq = (rep.equipment || []).filter(function (e) { return e.today > 0; })
          .sort(function (a, b) { return b.today - a.today; });
        eq.forEach(function (e) { I(lines, e.type + " " + e.today + "대"); });
      }
    });

    // ── 섹션 6: 안전 (유해위험작업) ── 오늘 날짜 데이터만 사용
    add("safety", "안전·유해위험작업", "fa-triangle-exclamation", function (lines) {
      if (typeof SAFETY_DATA === "undefined") return;
      var list = SAFETY_DATA[tKey] || [];
      if (!list.length) { L(lines, "오늘 등록된 유해위험작업은 없습니다."); return; }
      var approved = list.filter(function (r) {
        var s = r.status || "";
        return s.indexOf("승인") !== -1 && s.indexOf("미승인") === -1;
      }).length;
      L(lines, "오늘 유해위험작업은 총 " + list.length + "건이며, 작업승인은 " + approved + "건입니다.");
      var cap = detail ? 10 : 3;
      list.slice(0, cap).forEach(function (r) {
        var parts = [r.company, r.work_name, r.location].filter(Boolean);
        var grade = r.grade ? " (" + r.grade + ")" : "";
        I(lines, parts.join(", ") + grade);
      });
      if (list.length > cap) L(lines, "그 외 " + (list.length - cap) + "건이 더 있습니다.");
    });

    // ── 섹션 7: 오늘 일정 + 게시판 알림 ──
    add("notice", "일정·알림", "fa-bullhorn", function (lines) {
      if (typeof SCHEDULE_EVENTS_ONEOFF !== "undefined" && Array.isArray(SCHEDULE_EVENTS_ONEOFF)) {
        var ev = SCHEDULE_EVENTS_ONEOFF.filter(function (e) { return e.date === tKey; })
          .sort(function (a, b) { return (a.time || "").localeCompare(b.time || ""); });
        if (ev.length) {
          L(lines, "오늘 주요 일정은 " + ev.length + "건입니다.");
          ev.forEach(function (e) {
            I(lines, (e.time ? e.time + " " : "") + (e.title || "") + (e.note ? " - " + e.note : ""));
          });
        } else {
          L(lines, "오늘 등록된 주요 일정은 없습니다.");
        }
      }
      if (typeof BOARD_ITEMS !== "undefined" && Array.isArray(BOARD_ITEMS)) {
        var board = BOARD_ITEMS.filter(function (n) {
          if (n.startDate && tKey < n.startDate) return false;
          if (n.endDate && tKey > n.endDate) return false;
          return !!n.text;
        }).sort(function (a, b) { return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0); });
        // 간단히: 중요(pinned) 알림만 최대 2건 / 자세히: 전체
        var shown = detail ? board : board.filter(function (n) { return n.pinned; }).slice(0, 2);
        if (shown.length) {
          L(lines, "게시판 알림입니다.");
          shown.forEach(function (n) { I(lines, n.text); });
        }
      }
    });

    // ── 섹션 8 (자세히 전용): 토공사 현황 ── 토공사 카드에 표시된 값 사용
    if (detail) {
      add("earth", "토공사", "fa-mountain", function (lines) {
        var t = txt("pct-total"), c = txt("pct-cut"), f = txt("pct-fill");
        if (!t) return;
        L(lines, "토공사 전체 진행률은 " + t + ", 절토량은 " + c + ", 성토량은 " + f + "입니다.");
      });
    }

    sections.push({
      id: "end", title: "", icon: "",
      lines: [{ text: "이상으로 현장 현황 요약을 마칩니다.", kind: "lead" }]
    });
    return sections;
  }

  // ───────────────────────── 음성 재생 ─────────────────────────
  function pickVoice() {
    if (!synth) return null;
    var all = synth.getVoices() || [];
    var ko = all.filter(function (v) { return /^ko/i.test(String(v.lang).replace("_", "-")); });
    if (!ko.length) return null;
    return ko.filter(function (v) { return /natural|online/i.test(v.name); })[0] ||
           ko.filter(function (v) { return /google/i.test(v.name); })[0] ||
           ko[0];
  }

  function getRate() {
    try {
      var v = parseFloat(localStorage.getItem(RATE_KEY));
      if (v >= 0.7 && v <= 1.6) return v;
    } catch (e) { /* 저장소 접근 불가 시 기본값 */ }
    return 1.0;
  }
  function saveRate(v) {
    try { localStorage.setItem(RATE_KEY, String(v)); } catch (e) { /* 무시 */ }
  }

  function setPlayingUI(on) {
    playing = on;
    var btn = document.getElementById("vs-play-btn");
    if (!btn) return;
    btn.innerHTML = on
      ? '<i class="fa-solid fa-stop"></i> 정지'
      : '<i class="fa-solid fa-play"></i> 다시 듣기';
    btn.classList.toggle("is-playing", on);
  }
  function setStatus(msg) {
    var el = document.getElementById("vs-status");
    if (el) el.textContent = msg || "";
  }
  function clearHighlight() {
    var els = document.querySelectorAll("#vs-modal .vs-line.vs-active");
    for (var i = 0; i < els.length; i++) els[i].classList.remove("vs-active");
  }
  function highlight(el) {
    clearHighlight();
    if (!el) return;
    el.classList.add("vs-active");
    if (el.scrollIntoView) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function stopSpeaking() {
    token++;
    if (synth) synth.cancel();
    clearHighlight();
    setPlayingUI(false);
  }

  function speakFrom(startIndex) {
    if (!synth) return;
    stopSpeaking();
    var myToken = token;
    if (!cachedVoice) cachedVoice = pickVoice();
    var rate = getRate();
    setPlayingUI(true);
    setStatus("");

    function next(i) {
      if (myToken !== token) return;               // 정지/재시작되면 이전 재생은 중단
      if (i >= units.length) { clearHighlight(); setPlayingUI(false); return; }
      var unit = units[i];
      highlight(unit.el);
      var chunks = splitLong(speechify(unit.text), 110);
      (function speakChunk(ci) {
        if (myToken !== token) return;
        if (ci >= chunks.length) { next(i + 1); return; }
        var u = new SpeechSynthesisUtterance(chunks[ci]);
        u.lang = "ko-KR";
        u.rate = rate;
        if (cachedVoice) u.voice = cachedVoice;
        u.onend = function () { speakChunk(ci + 1); };
        u.onerror = function (ev) {
          if (ev.error === "interrupted" || ev.error === "canceled") return;
          setStatus("음성 재생 중 오류가 발생했습니다 (" + ev.error + ")");
          speakChunk(ci + 1);
        };
        synth.speak(u);
      })(0);
    }
    // cancel() 직후 바로 speak() 하면 일부 브라우저에서 무시되므로 아주 짧게 띄움
    setTimeout(function () { next(startIndex || 0); }, 60);
  }

  // ───────────────────────── 팝업 UI ─────────────────────────
  function injectStyle() {
    if (document.getElementById("vs-style")) return;
    var st = document.createElement("style");
    st.id = "vs-style";
    st.textContent =
      ".vs-hdr-btn{background:var(--orange-dim);border:1px solid var(--orange);border-radius:var(--radius);" +
        "color:var(--orange-light);padding:4px 10px;font-weight:700;}" +
      ".vs-hdr-btn:hover{background:var(--orange);color:#fff;}" +
      ".vs-box{width:min(560px,94vw);max-height:86vh;background:var(--bg-card);border:1px solid var(--border);" +
        "border-radius:var(--radius);display:flex;flex-direction:column;overflow:hidden;" +
        "box-shadow:0 20px 60px rgba(0,0,0,0.5);}" +
      ".vs-ctrl{display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1px solid var(--border);flex-wrap:wrap;}" +
      ".vs-play{background:var(--orange);color:#1a1400;border:none;border-radius:var(--radius-sm);padding:7px 14px;" +
        "font-family:'Noto Sans KR',sans-serif;font-size:12px;font-weight:700;cursor:pointer;}" +
      ".vs-play.is-playing{background:var(--red);color:#fff;}" +
      ".vs-seg{display:flex;border:1px solid var(--border);border-radius:var(--radius-sm);overflow:hidden;}" +
      ".vs-seg button{background:none;border:none;color:var(--text-muted);font-size:11px;padding:5px 10px;" +
        "cursor:pointer;font-family:'Noto Sans KR',sans-serif;}" +
      ".vs-seg button.active{background:var(--bg-inner);color:var(--orange-light);font-weight:700;}" +
      ".vs-rate{background:var(--bg-inner);color:var(--text-white);border:1px solid var(--border);" +
        "border-radius:var(--radius-sm);padding:5px 6px;font-size:11px;font-family:'Noto Sans KR',sans-serif;}" +
      ".vs-status{font-size:10px;color:var(--yellow);margin-left:auto;}" +
      ".vs-body{padding:12px 14px;overflow-y:auto;flex:1;min-height:0;}" +
      ".vs-sec{margin-bottom:12px;}" +
      ".vs-sec-title{font-size:11px;font-weight:700;color:var(--orange-light);margin-bottom:5px;" +
        "display:flex;align-items:center;gap:6px;}" +
      ".vs-line{font-size:13px;line-height:1.55;color:var(--text-muted);padding:3px 8px;border-left:3px solid transparent;" +
        "border-radius:3px;cursor:pointer;}" +
      ".vs-line.vs-lead{color:var(--text-white);}" +
      ".vs-line.vs-item{padding-left:20px;font-size:12.5px;position:relative;}" +
      ".vs-line.vs-item::before{content:'•';position:absolute;left:9px;color:var(--text-dim);}" +
      ".vs-line:hover{background:rgba(255,255,255,0.03);}" +
      ".vs-line.vs-active{background:var(--orange-dim);border-left-color:var(--orange);color:#fff;}" +
      ".vs-foot{padding:8px 14px;border-top:1px solid var(--border);font-size:10px;color:var(--text-dim);}";
    document.head.appendChild(st);
  }

  function ensureModal() {
    var modal = document.getElementById("vs-modal");
    if (modal) return modal;
    modal = document.createElement("div");
    modal.id = "vs-modal";
    modal.className = "modal-overlay";
    modal.innerHTML =
      '<div class="vs-box">' +
        '<div class="modal-hdr">' +
          '<div class="modal-title"><i class="fa-solid fa-volume-high"></i> 현장 현황 요약</div>' +
          '<div class="modal-hdr-right"><button type="button" class="modal-close" id="vs-close-btn">' +
            '<i class="fa-solid fa-xmark"></i></button></div>' +
        '</div>' +
        '<div class="vs-ctrl">' +
          '<button type="button" class="vs-play" id="vs-play-btn"></button>' +
          '<div class="vs-seg" id="vs-mode">' +
            '<button type="button" data-mode="short" class="active">간단히</button>' +
            '<button type="button" data-mode="detail">자세히</button>' +
          '</div>' +
          '<select class="vs-rate" id="vs-rate" title="읽는 속도">' +
            '<option value="0.85">느리게</option>' +
            '<option value="1">보통</option>' +
            '<option value="1.2">빠르게</option>' +
          '</select>' +
          '<span class="vs-status" id="vs-status"></span>' +
        '</div>' +
        '<div class="vs-body" id="vs-body"></div>' +
        '<div class="vs-foot">문장을 누르면 그 부분부터 다시 읽습니다. 음성은 기기·브라우저 내장 음성으로 재생됩니다.</div>' +
      '</div>';
    document.body.appendChild(modal);

    document.getElementById("vs-close-btn").addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("show")) closeModal();
    });

    document.getElementById("vs-play-btn").addEventListener("click", function () {
      if (playing) stopSpeaking(); else speakFrom(0);
    });
    document.getElementById("vs-mode").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-mode]");
      if (!b) return;
      detailMode = b.dataset.mode === "detail";
      renderSummary();
      speakFrom(0);
    });
    var rateSel = document.getElementById("vs-rate");
    rateSel.value = String(getRate());
    if (rateSel.value !== String(getRate())) rateSel.value = "1";
    rateSel.addEventListener("change", function () {
      saveRate(parseFloat(rateSel.value));
      if (playing) speakFrom(0);
    });
    return modal;
  }

  function renderSummary() {
    var body = document.getElementById("vs-body");
    if (!body) return;
    var segs = document.querySelectorAll("#vs-mode button");
    for (var s = 0; s < segs.length; s++) {
      segs[s].classList.toggle("active", (segs[s].dataset.mode === "detail") === detailMode);
    }

    var sections = buildSections(detailMode);
    body.innerHTML = "";
    units = [];
    sections.forEach(function (sec) {
      var wrap = document.createElement("div");
      wrap.className = "vs-sec";
      if (sec.title) {
        var t = document.createElement("div");
        t.className = "vs-sec-title";
        t.innerHTML = '<i class="fa-solid ' + esc(sec.icon) + '"></i> ' + esc(sec.title);
        wrap.appendChild(t);
      }
      sec.lines.forEach(function (line) {
        var el = document.createElement("div");
        el.className = "vs-line " + (line.kind === "item" ? "vs-item" : "vs-lead");
        el.textContent = line.text;
        var idx = units.length;
        el.addEventListener("click", function () { speakFrom(idx); });
        wrap.appendChild(el);
        units.push({ text: line.text, el: el });
      });
      body.appendChild(wrap);
    });
    body.scrollTop = 0;
  }

  function openModal() {
    var modal = ensureModal();
    modal.classList.add("show");
    renderSummary();
    if (!synth || typeof SpeechSynthesisUtterance === "undefined") {
      setPlayingUI(false);
      var b = document.getElementById("vs-play-btn");
      if (b) { b.disabled = true; b.textContent = "음성 미지원"; }
      setStatus("이 브라우저는 음성 읽기를 지원하지 않아 글로만 보여드립니다.");
      return;
    }
    // 버튼 클릭 직후(사용자 동작 안)에서 바로 재생해야 모바일 브라우저 자동재생 제한에 걸리지 않음
    speakFrom(0);
  }

  function closeModal() {
    stopSpeaking();
    var modal = document.getElementById("vs-modal");
    if (modal) modal.classList.remove("show");
  }

  // ───────────────────────── 초기화 ─────────────────────────
  function init() {
    injectStyle();
    var right = document.querySelector("#header .header-right");
    if (!right || document.getElementById("voice-summary-btn")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = "voice-summary-btn";
    btn.className = "hdr-btn vs-hdr-btn";
    btn.title = "현장 현황을 요약해서 보여주고 음성으로 읽어줍니다";
    btn.innerHTML = '<i class="fa-solid fa-volume-high"></i> 현황 요약 듣기';
    btn.addEventListener("click", openModal);
    right.insertBefore(btn, right.firstChild);

    // 음성 목록은 브라우저에 따라 늦게 로딩됨 → 로딩되면 다시 고름
    if (synth) {
      synth.addEventListener && synth.addEventListener("voiceschanged", function () { cachedVoice = pickVoice(); });
      window.addEventListener("beforeunload", function () { synth.cancel(); });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
