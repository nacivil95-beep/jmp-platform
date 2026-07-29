/**
 * 사이트 접속 시 뜨는 공지사항 팝업 데이터
 * ------------------------------------------------------------------------
 * 이 배열에 공지를 추가/수정/삭제하면 팝업 내용이 바뀝니다. 팀마다 아래 형식대로
 * 항목만 하나씩 추가해서 쓰면 되고, 서로 다른 팀 공지가 같이 나열되어도 문제없습니다.
 *
 * 각 항목의 필드 설명:
 *   id         : 고유 값 (다른 공지와 안 겹치면 아무 문자열이나 숫자 OK)
 *   team       : 작성 팀/구분 이름 (예: "안전관리팀", "품질관리팀", "현장사무소") - 카드에 태그로 표시됨
 *   level      : 공지 성격에 따른 색상 -  "info"(파랑, 일반안내) | "warning"(주황, 주의) | "danger"(빨강, 긴급/중요)
 *   title      : 공지 제목
 *   body       : 공지 내용. 줄바꿈은 \n 으로, 굵게 강조하고 싶으면 <b>이렇게</b> 감싸면 됩니다.
 *   image      : (선택) 공지에 넣을 이미지 경로. 예: "assets/notice/heat_index.png"
 *                이미지 파일을 assets 폴더 같은 곳에 넣어두고, 그 경로를 적어주면 제목 아래에 표시됩니다.
 *   startDate  : "YYYY-MM-DD" (선택) - 이 날짜부터 노출. 생략하면 등록 즉시부터 노출
 *   endDate    : "YYYY-MM-DD" (선택) - 이 날짜까지 노출(포함). 생략하면 계속 노출
 *   pinned     : true로 하면 다른 공지보다 항상 위쪽에 표시
 *
 * 예시 공지는 아래 하나 넣어뒀습니다. 실제로 쓰실 땐 이 예시를 지우거나 날짜를 맞춰서 쓰세요.
 * (배열이 비어있으면[ ] 팝업 자체가 뜨지 않습니다)
 */
let SITE_NOTICES = [
   {
    id: "notice-003",
    team: "관리자",
    level: "info",
    title: "자료업데이트관련",
    body: "매일 10시에 자료가 업데이트 됩니다.",
    startDate: "",
    endDate: "",
    pinned: true
   },
   {
    id: "sample-001",
    team: "안전팀",
    level: "warning",
    title: "체감온도 33.6도",
    body: "현장에서는 매시간 15분씩 휴식을 취해주시기 바랍니다.",
    startDate: "",
    endDate: "2026-07-28",
    pinned: false
   },
   {
    id: "sample-002",
    team: "공무팀",
    level: "info",
    title: "기성신청(2회)",
    body: "2회 기성신청은 8월 중순에 신청할 예정입니다.",
    startDate: "",
    endDate: "2026-08-31",
    pinned: false
   },
   {
    id: "notice-002",
    team: "관리팀",
    level: "info",
    title: "Family Day 알림",
    image: "assets/notice/family_day.png",
    body: "자세한 내용은 위 이미지를 참고해주세요.",
    startDate: "",
    endDate: "2026-09-30",
    pinned: false
  }
];
