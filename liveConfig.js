/* liveConfig.js — 실시간 위치 설정 (livePositions.js, worker.html 공통)
 *
 * firebase.databaseURL 을 비워두면 "데모 모드"(가짜 데이터)로 동작합니다.
 * Firebase 프로젝트를 만든 뒤 값을 채우면 "실시간 모드"로 바뀝니다.
 */
window.LIVE_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "jmp-live-pos.firebaseapp.com",
    databaseURL: "https://jmp-live-pos-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jmp-live-pos",
    appId: ""
  },

  path: "positions",      // Realtime Database 안의 저장 위치
  staleSec: 240,          // 이 시간(초) 동안 갱신이 없으면 '신호없음'(회색). Traccar 정지중 60~120초 전송 기준
  hideMin: 30,            // 이 시간(분) 넘게 갱신이 없으면 지도에서 숨김

  // 구역(선택). 좌표는 [위도, 경도] 순서. danger:true 면 위험구역(인력 진입 시 경고)
  // 비워두면 구역 기능 없이 마커만 표시됩니다. (데모 모드에서는 샘플 구역이 자동 표시)
  zones: [
    // { name: "A공구 성토구간", danger: false,
    //   coords: [[36.0000,127.0000],[36.0000,127.0010],[36.0010,127.0010],[36.0010,127.0000]] },
    // { name: "크레인 작업반경", danger: true,
    //   coords: [[36.0010,127.0000],[36.0010,127.0010],[36.0020,127.0010],[36.0020,127.0000]] }
  ],

  // 작업자 폰 화면(worker.html) 선택지
  equipTypes: ["굴착기", "덤프트럭", "크레인", "롤러", "살수차", "기타"],
  companies: [],          // 업체명 목록을 넣으면 자동완성됩니다. 비워도 직접 입력 가능

  // (선택) 지도 컨테이너 id 를 알면 지정. 비우면 가장 큰 지도를 자동 선택
  mapContainerId: "leaflet-map"
};
