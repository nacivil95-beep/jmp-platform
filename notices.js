/**
 * 사이트 접속 시 뜨는 공지사항 팝업 데이터
 * ------------------------------------------------------------------------
 * 이 파일은 공지사항.xlsx 에서 extract_notices.py 스크립트로 자동 생성됩니다.
 * 직접 이 파일을 수정하지 말고, 엑셀에서 수정한 뒤 auto_update 를 실행하세요.
 *
 *   id         : 고유 값
 *   team       : 작성 팀/구분 이름 - 카드에 태그로 표시됨
 *   level      : "info"(파랑) | "warning"(주황) | "danger"(빨강)
 *   title      : 공지 제목
 *   body       : 공지 내용 (줄바꿈 \n, 굵게 <b>...</b>)
 *   image      : (선택) 이미지 경로
 *   startDate  : (선택) "YYYY-MM-DD"
 *   endDate    : (선택) "YYYY-MM-DD"
 *   pinned     : true 면 항상 상단 고정
 *
 * 원본: C:\Users\jinhong\Desktop\jmp-platform\데이터관리\알림창\공지사항.xlsx
 * 생성 시각: 2026-08-10 08:43:41
 */
let SITE_NOTICES = [
   {
    id: "1",
    team: "관리자",
    level: "danger",
    title: "자료업데이트관련",
    body: "매일 10시에 자료가 업데이트 됩니다.",
    startDate: "",
    endDate: "",
    pinned: true
   },
   {
    id: "2",
    team: "관리팀",
    level: "info",
    title: "Family Day 알림",
    image: "assets/notice/family_day.png",
    body: "자세한 내용은 이미지를 참고해주세요.",
    startDate: "",
    endDate: "2026-09-30",
    pinned: false
   }
];
