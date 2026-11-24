/* livePositions.js — 실시간 인력·장비 위치 레이어 (jmp-platform 추가 모듈)
 *
 * 설치: index.html 에서 <script src="app.js"> 바로 "앞"에 두 줄 추가
 *   <script src="liveConfig.js"></script>
 *   <script src="livePositions.js"></script>
 * (app.js 의 initMap() 이 지도를 만들 때 이 파일이 지도 객체를 붙잡아야 하므로 app.js 앞이어야 함)
 * app.js / style.css 는 수정하지 않음. 스타일은 이 파일이 직접 삽입(사이트 CSS 변수 사용).
 */
(function () {
  'use strict';
  if (!window.L) { console.warn('[live] Leaflet이 먼저 로드되어야 합니다.'); return; }

  var C = window.LIVE_CONFIG || {};
  var FB = C.firebase || {};
  var PATH = C.path || 'positions';
  var STALE = (C.staleSec || 60) * 1000;
  var HIDE = (C.hideMin || 30) * 60000;
  var DEMO = !FB.databaseURL;

  /* ---------- 지도 객체 붙잡기 ---------- */
  window.__siteMaps = window.__siteMaps || [];
  L.Map.addInitHook(function () { window.__siteMaps.push(this); });

  function findMap() {
    if (window.LIVE_MAP) return window.LIVE_MAP;
    var best = null, area = -1;
    window.__siteMaps.forEach(function (m) {
      var el = m.getContainer();
      if (!el || !document.body.contains(el)) return;
      if (C.mapContainerId && el.id === C.mapContainerId) { best = m; area = Infinity; return; }
      var a = el.offsetWidth * el.offsetHeight;
      if (a > area) { area = a; best = m; }
    });
    return best;
  }

  var tries = 0;
  var iv = setInterval(function () {
    var m = findMap();
    if (m) { clearInterval(iv); init(m); }
    else if (++tries === 20) console.warn('[live] 지도를 아직 못 찾았습니다. livePositions.js 가 app.js 보다 앞에 있는지 확인하세요.');
    else if (tries > 300) clearInterval(iv);
  }, 500);

  /* ---------- 유틸 ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function ago(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    if (s < 60) return s + '초 전';
    if (s < 3600) return Math.floor(s / 60) + '분 전';
    return Math.floor(s / 3600) + '시간 전';
  }
  function inPoly(lat, lng, poly) {
    var inside = false;
    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      var yi = poly[i][0], xi = poly[i][1], yj = poly[j][0], xj = poly[j][1];
      if (((yi > lat) !== (yj > lat)) && (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi)) inside = !inside;
    }
    return inside;
  }
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = function () { rej(new Error('로드 실패: ' + src)); };
      document.head.appendChild(s);
    });
  }

  /* ---------- 스타일 (사이트 다크 관제 UI 변수 사용, 없으면 기본값) ---------- */
  var css = [
    '.lv-panel{background:rgba(26,33,51,.96);color:var(--text-white,#f0f4ff);border:1px solid var(--border,#2a3347);border-radius:var(--radius,6px);width:236px;font-family:"Noto Sans KR",sans-serif;font-size:11px;line-height:1.4;box-shadow:0 4px 14px rgba(0,0,0,.5)}',
    '.lv-hd{display:flex;align-items:center;gap:6px;padding:7px 9px;cursor:pointer;user-select:none}',
    '.lv-hd b{flex:1;font-size:11px;font-weight:700}',
    '.lv-badge{font-size:9px;padding:1px 7px;border-radius:9px;background:#475569;color:#fff;font-weight:700}',
    '.lv-badge.demo{background:var(--orange,#ff6d00)}.lv-badge.on{background:var(--green,#00c46a)}.lv-badge.err{background:var(--red,#ff3d44)}',
    '.lv-bd{padding:0 9px 9px;display:block;overflow-y:auto;overflow-x:hidden}',
    '.lv-panel.close .lv-bd{display:none}',
    '.lv-row{display:flex;gap:6px;margin:5px 0;align-items:center;flex-wrap:wrap}',
    '.lv-row label{display:flex;align-items:center;gap:5px;cursor:pointer;color:var(--text-muted,#8899bb)}',
    '.lv-chip{background:var(--bg-inner,#111827);border-radius:4px;padding:2px 8px;font-weight:600}',
    '.lv-panel select,.lv-panel input[type=text]{background:var(--bg-inner,#111827);color:var(--text-white,#f0f4ff);border:1px solid var(--border,#2a3347);border-radius:4px;padding:3px 6px;font-size:11px;font-family:inherit;min-width:0}',
    '.lv-panel input[type=text]{flex:1;width:70px}',
    '.lv-alert{background:rgba(255,61,68,.18);color:var(--red,#ff3d44);border-radius:4px;padding:5px 8px;margin:5px 0;display:none;font-weight:700}',
    '.lv-zones div{display:flex;justify-content:space-between;padding:1px 0;color:var(--text-muted,#8899bb)}',
    '.lv-zones .dg{color:var(--red,#ff3d44)}',
    '.lv-list{border-top:1px solid var(--border,#2a3347);margin-top:6px}',
    '.lv-it{padding:4px 2px;border-bottom:1px solid var(--border,#2a3347);cursor:pointer;display:flex;gap:6px;align-items:baseline}',
    '.lv-it:hover{background:rgba(255,255,255,.04)}.lv-it small{color:var(--text-dim,#4a5a7a);margin-left:auto;white-space:nowrap;font-size:9.5px}',
    '.lv-it.stale{opacity:.5}',
    '.lv-wrap{background:none;border:0}',
    '.lv-mk{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;border:2px solid #fff;box-shadow:0 1px 5px rgba(0,0,0,.6)}',
    '.lv-mk.pp{background:var(--blue,#2979ff)}.lv-mk.eq{background:var(--orange,#ff6d00)}.lv-mk.stale{background:#6b7280;opacity:.7}',
    '.lv-lb{display:none;position:absolute;left:50%;top:31px;transform:translateX(-50%);white-space:nowrap;font-weight:700;font-size:10px;color:#fff;background:rgba(0,0,0,.65);padding:0 4px;border-radius:3px}',
    '.lv-showlb .lv-lb{display:block}',
    '.lv-zl{background:none;border:0;color:#bae6fd;font-weight:700;font-size:11px;text-shadow:0 0 3px #000;white-space:nowrap}',
    '.lv-zl.dg{color:#fecaca}'
  ].join('\n');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------- 본체 ---------- */
  function init(map) {
    var ents = {}, markers = {}, offset = 0;
    var zones = (C.zones || []).slice();
    var zoneLayer = L.layerGroup(), markerLayer = L.layerGroup().addTo(map);
    var f = { type: 'all', q: '' };
    var panelEl;

    /* 구역 그리기 */
    function drawZones() {
      zoneLayer.clearLayers();
      zones.forEach(function (z) {
        L.polygon(z.coords, { color: z.danger ? '#ef4444' : '#38bdf8', weight: 2, dashArray: '6 4', fillOpacity: .08, interactive: false }).addTo(zoneLayer);
        var cy = 0, cx = 0; z.coords.forEach(function (p) { cy += p[0]; cx += p[1]; });
        L.marker([cy / z.coords.length, cx / z.coords.length], {
          interactive: false, keyboard: false,
          icon: L.divIcon({ className: 'lv-zl' + (z.danger ? ' dg' : ''), html: esc(z.name), iconSize: null })
        }).addTo(zoneLayer);
      });
      if (zones.length) zoneLayer.addTo(map);
    }

    /* 패널 (지도 우측 하단, 기본은 접힌 상태) */
    var Ctl = L.Control.extend({
      options: { position: 'bottomright' },
      onAdd: function () {
        var d = L.DomUtil.create('div', 'lv-panel close');
        d.innerHTML =
          '<div class="lv-hd"><span>📡</span><b>실시간 위치</b><span class="lv-badge" id="lv-badge">연결 중</span><span id="lv-arrow">▸</span></div>' +
          '<div class="lv-bd">' +
          '<div class="lv-row"><label><input type="checkbox" id="lv-show" checked> 지도에 표시</label></div>' +
          '<div class="lv-row" id="lv-counts"></div>' +
          '<div class="lv-alert" id="lv-alert"></div>' +
          '<div class="lv-row"><select id="lv-type"><option value="all">전체</option><option value="person">인력</option><option value="equip">장비</option></select>' +
          '<input type="text" id="lv-q" placeholder="이름·업체 검색"></div>' +
          '<div class="lv-zones" id="lv-zones"></div>' +
          '<div class="lv-list" id="lv-list"></div></div>';
        L.DomEvent.disableClickPropagation(d);
        L.DomEvent.disableScrollPropagation(d);
        panelEl = d;
        d.querySelector('.lv-hd').addEventListener('click', function () {
          d.classList.toggle('close');
          d.querySelector('#lv-arrow').textContent = d.classList.contains('close') ? '▸' : '▾';
          fitPanel();
        });
        d.querySelector('#lv-show').addEventListener('change', function (e) {
          if (e.target.checked) { markerLayer.addTo(map); if (zones.length) zoneLayer.addTo(map); }
          else { map.removeLayer(markerLayer); map.removeLayer(zoneLayer); }
        });
        d.querySelector('#lv-type').addEventListener('change', function (e) { f.type = e.target.value; render(); });
        d.querySelector('#lv-q').addEventListener('input', function (e) { f.q = e.target.value.trim(); render(); });
        return d;
      }
    });
    new Ctl().addTo(map);
    function $(id) { return panelEl.querySelector('#' + id); }
    function setBadge(t, cls) { var b = $('lv-badge'); b.textContent = t; b.className = 'lv-badge ' + (cls || ''); }

    /* 지도 높이에 맞춰 패널 최대 높이 조절 (우측 상단 지도/위성 버튼 영역은 피함) */
    function fitPanel() {
      var h = map.getSize().y;
      panelEl.querySelector('.lv-bd').style.maxHeight = Math.max(90, h - 130) + 'px';
    }
    map.on('resize', fitPanel); fitPanel();

    /* 확대했을 때만 마커 이름표 표시 (축소 상태에서 글자 겹침 방지) */
    function syncLabels() { map.getContainer().classList.toggle('lv-showlb', map.getZoom() >= 16); }
    map.on('zoomend', syncLabels); syncLabels();

    function now() { return Date.now() + offset; }
    function zoneOf(e) {
      for (var i = 0; i < zones.length; i++) if (inPoly(e.lat, e.lng, zones[i].coords)) return i;
      return -1;
    }

    function mkIcon(e, s) {
      var eq = e.type === 'equip';
      return L.divIcon({
        className: 'lv-wrap', iconSize: [28, 28], iconAnchor: [14, 14],
        html: '<div class="lv-mk ' + (eq ? 'eq' : 'pp') + (s === 'stale' ? ' stale' : '') + '">' + (eq ? '🚜' : '👷') + '</div><div class="lv-lb">' + esc(eq ? (e.label || e.name) : e.name) + '</div>'
      });
    }
    function popupHtml(e, age) {
      return '<b>' + esc(e.type === 'equip' ? (e.label || '장비') : e.name) + '</b><br>' +
        (e.type === 'equip' && e.name ? '운전원: ' + esc(e.name) + '<br>' : '') +
        (e.company ? esc(e.company) + '<br>' : '') +
        '갱신 ' + ago(age) + (e.acc ? ' · 정확도 ±' + Math.round(e.acc) + 'm' : '');
    }

    /* 렌더 */
    function render() {
      var t = now(), list = [], keep = {};
      var cnt = { person: 0, equip: 0, stale: 0 };
      Object.keys(ents).forEach(function (id) {
        var e = ents[id];
        if (!e || typeof e.lat !== 'number' || typeof e.lng !== 'number') return;
        var age = t - (e.ts || 0);
        if (age > HIDE) return;
        var s = age > STALE ? 'stale' : 'live';
        var e2 = { id: id, e: e, age: age, s: s, z: zoneOf(e) };
        if (s === 'stale') cnt.stale++; else cnt[e.type === 'equip' ? 'equip' : 'person']++;
        var isEq = e.type === 'equip';
        if (f.type === 'person' && isEq) return;
        if (f.type === 'equip' && !isEq) return;
        if (f.q) {
          var hay = (e.name + ' ' + (e.company || '') + ' ' + (e.label || '')).toLowerCase();
          if (hay.indexOf(f.q.toLowerCase()) < 0) return;
        }
        list.push(e2); keep[id] = 1;
      });

      Object.keys(markers).forEach(function (id) {
        if (!keep[id]) { markerLayer.removeLayer(markers[id]); delete markers[id]; }
      });
      list.forEach(function (x) {
        var m = markers[x.id];
        if (!m) { m = markers[x.id] = L.marker([x.e.lat, x.e.lng], { icon: mkIcon(x.e, x.s) }).addTo(markerLayer).bindPopup(''); }
        else { m.setLatLng([x.e.lat, x.e.lng]); m.setIcon(mkIcon(x.e, x.s)); }
        m.getPopup().setContent(popupHtml(x.e, x.age));
      });

      $('lv-counts').innerHTML =
        '<span class="lv-chip">👷 ' + cnt.person + '</span><span class="lv-chip">🚜 ' + cnt.equip + '</span>' +
        (cnt.stale ? '<span class="lv-chip">⚠ 신호없음 ' + cnt.stale + '</span>' : '');

      /* 구역 요약 + 위험구역 경고 */
      var zc = zones.map(function () { return { p: 0, q: 0, names: [] }; });
      list.forEach(function (x) {
        if (x.z < 0 || x.s !== 'live') return;
        if (x.e.type === 'equip') zc[x.z].q++; else { zc[x.z].p++; zc[x.z].names.push(x.e.name); }
      });
      $('lv-zones').innerHTML = zones.map(function (z, i) {
        return '<div class="' + (z.danger ? 'dg' : '') + '"><span>' + (z.danger ? '⚠ ' : '') + esc(z.name) + '</span><span>👷' + zc[i].p + ' 🚜' + zc[i].q + '</span></div>';
      }).join('');
      var al = [];
      zones.forEach(function (z, i) { if (z.danger && zc[i].p) al.push(esc(z.name) + ' 내 인력 ' + zc[i].p + '명: ' + zc[i].names.map(esc).join(', ')); });
      var ael = $('lv-alert');
      ael.style.display = al.length ? 'block' : 'none';
      ael.innerHTML = al.length ? '⚠ ' + al.join('<br>⚠ ') : '';

      list.sort(function (a, b) { return a.age - b.age; });
      var box = $('lv-list');
      box.innerHTML = list.map(function (x) {
        var eq = x.e.type === 'equip';
        return '<div class="lv-it ' + x.s + '" data-id="' + esc(x.id) + '"><span>' + (eq ? '🚜' : '👷') + '</span><span>' +
          esc(eq ? (x.e.label || x.e.name) : x.e.name) + (x.e.company ? ' <small style="margin:0">· ' + esc(x.e.company) + '</small>' : '') +
          '</span><small>' + (x.z >= 0 ? esc(zones[x.z].name) + ' · ' : '') + ago(x.age) + '</small></div>';
      }).join('') || '<div style="padding:8px;color:var(--text-dim,#4a5a7a)">표시할 대상이 없습니다</div>';
      Array.prototype.forEach.call(box.querySelectorAll('.lv-it'), function (el) {
        el.addEventListener('click', function () {
          var m = markers[el.getAttribute('data-id')];
          if (m) { map.flyTo(m.getLatLng(), Math.max(map.getZoom(), 18)); m.openPopup(); }
        });
      });
    }

    /* ---- 데모 ---- */
    function startDemo() {
      setBadge('데모', 'demo');
      var c = map.getCenter(), d = 0.004, dl = 0.005;   // 현장 중심 기준 약 ±450m 범위
      if (!zones.length) {
        zones = [
          { name: '작업구역 A (샘플)', danger: false, coords: [[c.lat - d, c.lng - dl], [c.lat + d, c.lng - dl], [c.lat + d, c.lng], [c.lat - d, c.lng]] },
          { name: '크레인 반경 (샘플)', danger: true, coords: [[c.lat - d, c.lng], [c.lat + d, c.lng], [c.lat + d, c.lng + dl], [c.lat - d, c.lng + dl]] }
        ];
        drawZones();
      }
      var co = ['한성건설', '대한철근', '동양전기', '우진토목'];
      var sim = [];
      function rnd(a, b) { return a + Math.random() * (b - a); }
      for (var i = 1; i <= 9; i++) sim.push({ id: 'dp' + i, type: 'person', name: '작업자 0' + i, company: co[i % 4] });
      [['굴착기 #1', '한성건설'], ['굴착기 #2', '한성건설'], ['덤프 #1', '대한철근'], ['덤프 #2', '우진토목'], ['크레인 #1', '동양전기']]
        .forEach(function (q, k) { sim.push({ id: 'de' + k, type: 'equip', name: '운전원 0' + (k + 1), label: q[0], company: q[1] }); });
      sim.forEach(function (s) {
        s.lat = rnd(c.lat - d, c.lat + d); s.lng = rnd(c.lng - dl, c.lng + dl);
        s.vy = rnd(-1, 1) * 0.00012; s.vx = rnd(-1, 1) * 0.00015; s.acc = rnd(4, 12);
      });
      function tick() {
        sim.forEach(function (s) {
          if (s.id === 'dp9') { ents[s.id] = Object.assign({}, s, { ts: Date.now() - 120000 }); return; } // 신호없음 샘플
          s.lat += s.vy + rnd(-.00003, .00003); s.lng += s.vx + rnd(-.00003, .00003);
          if (s.lat < c.lat - d || s.lat > c.lat + d) s.vy *= -1;
          if (s.lng < c.lng - dl || s.lng > c.lng + dl) s.vx *= -1;
          ents[s.id] = Object.assign({}, s, { ts: Date.now() });
        });
        render();
      }
      tick(); setInterval(tick, 2000);
    }

    /* ---- 실시간(Firebase) ---- */
    function startLive() {
      setBadge('연결 중');
      var base = 'https://www.gstatic.com/firebasejs/10.12.2/';
      loadScript(base + 'firebase-app-compat.js').then(function () { return loadScript(base + 'firebase-database-compat.js'); }).then(function () {
        if (!firebase.apps.length) firebase.initializeApp(FB);
        var db = firebase.database();
        db.ref('.info/serverTimeOffset').on('value', function (s) { offset = s.val() || 0; });
        db.ref('.info/connected').on('value', function (s) { s.val() ? setBadge('실시간', 'on') : setBadge('연결 끊김', 'err'); });
        db.ref(PATH).on('value', function (s) { ents = s.val() || {}; render(); }, function (err) {
          console.warn('[live] 읽기 오류', err); setBadge('권한 오류', 'err');
        });
        setInterval(render, 5000); // 신호없음 판정 갱신
      }).catch(function (err) { console.warn('[live]', err); setBadge('연결 실패', 'err'); });
    }

    drawZones();
    render();
    if (DEMO) startDemo(); else startLive();
  }
})();
