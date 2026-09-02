/**
 * 작업일보 엑셀 자동 추출 결과 데이터
 * 생성 스크립트: extract.py
 * 키는 일자(01~31)가 아니라 전체 날짜(YYYY-MM-DD)이며, daily_reports_archive.json에
 * 누적 저장된 모든 달의 데이터를 포함합니다.
 */
let DAILY_REPORTS = {
  "2026-07-01": {
    "date": "2026-07-01",
    "weather": "비/흐림",
    "progress": {
      "plan": 2.81,
      "actual": 4.42,
      "diff": 156.97
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1466,
        "today": 0,
        "cum": 1466,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 301011,
        "today": 13574,
        "cum": 314585,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 387252.07999999996,
        "today": 17374.72,
        "cum": 404626.79999999993,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깎기 및 쌓기(BL.2)",
      "   - D/ZD1-1, B/H380-1, D/T25-3, 신호수-1",
      " 2. 흙깎기 및 쌓기(BL.5, 6, 11, 13)",
      "   - B/H500-2, B/H0.6-1, D/T15-5, 신호수-1",
      "   - 관리자-2, 작업반장-1, D/Z11T-1",
      " 3. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 4. 발파암 천공 및 작업면 평탄화(BL.2)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 5. 발파(BL.2)                [198공,  4회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      " 6. 작업로 개설(중로(집)3-16)",
      "   - B/H1.0-1",
      " 7. 발파암 소할 및 침사지/가배수로 조성(BL.6)",
      "   - B/H1.0-1",
      " 8. 다이크 설치 및 우죽 정리(BL.6)",
      "   - B/H0.6-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 사면보호, 침사지 설치 준비 작업(톤백, 마대 흙 채우기)",
      "   - 보통인부-6",
      " 2. 소하천 토사유실 방지 작업(톤백설치)",
      "   - B/H0.2-1, 보통인부-2",
      " 3. 주간공정회의"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깎기 및 쌓기(BL.2)",
      "   - D/ZD1-1, B/H380-1, D/T25-3, 신호수-1",
      " 2. 흙깎기 및 쌓기(BL.5, 6, 11, 13)",
      "   - B/H500-2, B/H0.6-1, D/T15-5, 신호수-1",
      "   - 관리자-2, 작업반장-1, D/Z11T-1",
      " 3. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 4. 발파암 천공 및 작업면 평탄화(BL.2)",
      "   - 관리자-1, 천공기-2, B/H1.0-1, 화약주임-1, 장약공-1, 신호수-1",
      " 5. 작업로 개설(중로(집)3-16)",
      "   - B/H1.0-1",
      " 6. 발파암 소할 및 침사지/가배수로 조성(BL.6)",
      "   - B/H1.0-1",
      " 7. 다이크 설치 및 우죽 정리(BL.6)",
      "   - B/H0.6-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      " 2. 침사지 조성(BL.6)",
      "   - B/H0.2-1, 보통인부-2",
      "◆기타",
      " 1. 사면보호 천막 설치(은탄리 485)",
      "   - 보통인부-5"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2348,
        "today": 25,
        "cum": 2373
      },
      {
        "role": "하도급직원",
        "prev": 16,
        "today": 4,
        "cum": 20
      },
      {
        "role": "작업반장",
        "prev": 123,
        "today": 1,
        "cum": 124
      },
      {
        "role": "보통인부",
        "prev": 73,
        "today": 8,
        "cum": 81
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 108,
        "today": 3,
        "cum": 111
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 27,
        "today": 1,
        "cum": 28
      },
      {
        "role": "장약공",
        "prev": 33,
        "today": 1,
        "cum": 34
      }
    ],
    "personnel_total": {
      "prev": 2728,
      "today": 43,
      "cum": 2771
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 39,
        "today": 1,
        "cum": 40
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 29,
        "today": 1,
        "cum": 30
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 34,
        "today": 1,
        "cum": 35
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 64,
        "today": 2,
        "cum": 66
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 91,
        "today": 3,
        "cum": 94
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 28,
        "today": 1,
        "cum": 29
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 67,
        "today": 2,
        "cum": 69
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 148,
        "today": 5,
        "cum": 153
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 152,
        "today": 3,
        "cum": 155
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 66,
        "today": 2,
        "cum": 68
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 45,
        "today": 1,
        "cum": 46
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 29,
        "today": 1,
        "cum": 30
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 94,
        "today": 2,
        "cum": 96
      },
      {
        "type": "B/H",
        "prev": 305,
        "today": 9,
        "cum": 314
      },
      {
        "type": "D/T",
        "prev": 300,
        "today": 8,
        "cum": 308
      },
      {
        "type": "크로라드릴",
        "prev": 66,
        "today": 2,
        "cum": 68
      },
      {
        "type": "살수차",
        "prev": 45,
        "today": 1,
        "cum": 46
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 29,
        "today": 1,
        "cum": 30
      }
    ],
    "equipment_total": {
      "prev": 1455,
      "today": 23,
      "cum": 1478
    }
  },
  "2026-07-02": {
    "date": "2026-07-02",
    "weather": "흐림",
    "progress": {
      "plan": 2.85,
      "actual": 4.51,
      "diff": 158.42
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1466,
        "today": 0,
        "cum": 1466,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 314585,
        "today": 6938,
        "cum": 321523,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 404626.79999999993,
        "today": 8880.64,
        "cum": 413507.43999999994,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깎기 및 쌓기(BL.2)",
      "   - D/ZD1-1, B/H380-1, D/T25-3, 신호수-1",
      " 2. 흙깎기 및 쌓기(BL.5, 6, 11, 13)",
      "   - B/H500-2, B/H0.6-1, D/T15-5, 신호수-1",
      "   - 관리자-2, 작업반장-1, D/Z11T-1",
      " 3. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 4. 발파암 천공 및 작업면 평탄화(BL.2)",
      "   - 관리자-1, 천공기-2, B/H1.0-1, 화약주임-1, 장약공-1, 신호수-1",
      " 5. 작업로 개설(중로(집)3-16)",
      "   - B/H1.0-1",
      " 6. 발파암 소할 및 침사지/가배수로 조성(BL.6)",
      "   - B/H1.0-1",
      " 7. 다이크 설치 및 폐목 정리(BL.6)",
      "   - B/H0.6-1, B/H0.2-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      " 2. 침사지 조성(BL.6)",
      "   - B/H0.2-1, 보통인부-2",
      "◆기타",
      " 1. 사면보호 천막 설치(은탄리 485)",
      "   - 보통인부-5"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깎기 및 쌓기(BL.2)",
      "   - D/ZD1-1, B/H380-1, D/T25-3, 신호수-1",
      " 2. 흙깎기 및 쌓기(BL.5, 6, 11, 13)",
      "   - B/H500-2, B/H0.6-1, D/T15-5, 신호수-1",
      "   - 관리자-2, 작업반장-1, D/Z11T-1",
      " 3. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 4. 발파암 천공 및 작업면 평탄화(BL.2)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 5. 발파(BL.2)                [145공,  6회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      " 6. 작업로 개설(중로(집)3-16)",
      "   - B/H1.0-1",
      " 7. 발파암 소할 및 침사지/가배수로 조성(BL.6)",
      "   - B/H1.0-1, B/H0.6-1",
      " 8. 폐목 및 원목 정리(BL.6)",
      "   - B/H0.6-1, B/H0.2-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      " 2. 침사지 조성(BL.6)",
      "   - B/H0.2-1, 보통인부-2",
      "◆기타",
      " 1. 사면보호 천막 설치(은탄리 485)",
      "   - 보통인부-4"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2373,
        "today": 25,
        "cum": 2398
      },
      {
        "role": "하도급직원",
        "prev": 20,
        "today": 4,
        "cum": 24
      },
      {
        "role": "작업반장",
        "prev": 124,
        "today": 1,
        "cum": 125
      },
      {
        "role": "보통인부",
        "prev": 81,
        "today": 7,
        "cum": 88
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 111,
        "today": 3,
        "cum": 114
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 28,
        "today": 1,
        "cum": 29
      },
      {
        "role": "장약공",
        "prev": 34,
        "today": 1,
        "cum": 35
      }
    ],
    "personnel_total": {
      "prev": 2771,
      "today": 42,
      "cum": 2813
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 40,
        "today": 1,
        "cum": 41
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 30,
        "today": 1,
        "cum": 31
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 35,
        "today": 2,
        "cum": 37
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 66,
        "today": 2,
        "cum": 68
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 94,
        "today": 3,
        "cum": 97
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 29,
        "today": 1,
        "cum": 30
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 69,
        "today": 2,
        "cum": 71
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 153,
        "today": 5,
        "cum": 158
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 155,
        "today": 3,
        "cum": 158
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 68,
        "today": 2,
        "cum": 70
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 46,
        "today": 1,
        "cum": 47
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 30,
        "today": 1,
        "cum": 31
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 96,
        "today": 2,
        "cum": 98
      },
      {
        "type": "B/H",
        "prev": 314,
        "today": 10,
        "cum": 324
      },
      {
        "type": "D/T",
        "prev": 308,
        "today": 8,
        "cum": 316
      },
      {
        "type": "크로라드릴",
        "prev": 68,
        "today": 2,
        "cum": 70
      },
      {
        "type": "살수차",
        "prev": 46,
        "today": 1,
        "cum": 47
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 30,
        "today": 1,
        "cum": 31
      }
    ],
    "equipment_total": {
      "prev": 1478,
      "today": 24,
      "cum": 1502
    }
  },
  "2026-07-03": {
    "date": "2026-07-03",
    "weather": "흐림",
    "progress": {
      "plan": 2.88,
      "actual": 4.7,
      "diff": 162.88
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1466,
        "today": 0,
        "cum": 1466,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 321523,
        "today": 13333,
        "cum": 334856,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 413507.43999999994,
        "today": 17066.24,
        "cum": 430573.67999999993,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깎기 및 쌓기(BL.2)",
      "   - D/ZD1-1, B/H380-1, D/T25-4, 신호수-1",
      " 2. 흙깎기 및 쌓기(BL.5, 6, 11, 13)",
      "   - B/H500-2, B/H0.6-1, D/T15-5, 신호수-1",
      "   - 관리자-2, 작업반장-1, D/Z11T-1",
      " 3. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 4. 발파암 천공 및 작업면 평탄화(BL.2)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 5. 발파(BL.2)                [145공,  6회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      " 6. 작업로 개설(중로(집)3-16)",
      "   - B/H1.0-1",
      " 7. 발파암 소할 및 침사지/가배수로 조성(BL.6)",
      "   - B/H1.0-1, B/H0.6-1",
      " 8. 폐목 및 원목 정리(BL.6)",
      "   - B/H0.6-1, B/H0.2-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      " 2. 침사지 및 가배수로 조성(BL.6)",
      "   - B/H0.2-1, 보통인부-2",
      "◆기타",
      " 1. 사면보호 천막 설치(은탄리 485)",
      "   - 보통인부-4"
    ],
    "work_tomorrow": [
      "◆부대공",
      " 1. 침사지  조성(BL.6)",
      "   - B/H1.0-1, 보통인부-2",
      " 2. 가배수로 조성(BL.6)",
      "   - B/H0.2-1, 보통인부-2",
      "◆기타",
      " 1. 사면보호 천막 설치(은탄리 485)",
      "   - 보통인부-4"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2398,
        "today": 25,
        "cum": 2423
      },
      {
        "role": "하도급직원",
        "prev": 24,
        "today": 4,
        "cum": 28
      },
      {
        "role": "작업반장",
        "prev": 125,
        "today": 1,
        "cum": 126
      },
      {
        "role": "보통인부",
        "prev": 88,
        "today": 6,
        "cum": 94
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 114,
        "today": 2,
        "cum": 116
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 29,
        "today": 1,
        "cum": 30
      },
      {
        "role": "장약공",
        "prev": 35,
        "today": 1,
        "cum": 36
      }
    ],
    "personnel_total": {
      "prev": 2813,
      "today": 40,
      "cum": 2853
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 41,
        "today": 1,
        "cum": 42
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 31,
        "today": 1,
        "cum": 32
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 37,
        "today": 2,
        "cum": 39
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 68,
        "today": 2,
        "cum": 70
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 97,
        "today": 3,
        "cum": 100
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 30,
        "today": 1,
        "cum": 31
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 71,
        "today": 2,
        "cum": 73
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 158,
        "today": 5,
        "cum": 163
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 158,
        "today": 4,
        "cum": 162
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 70,
        "today": 2,
        "cum": 72
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 47,
        "today": 1,
        "cum": 48
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 31,
        "today": 1,
        "cum": 32
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 98,
        "today": 2,
        "cum": 100
      },
      {
        "type": "B/H",
        "prev": 324,
        "today": 10,
        "cum": 334
      },
      {
        "type": "D/T",
        "prev": 316,
        "today": 9,
        "cum": 325
      },
      {
        "type": "크로라드릴",
        "prev": 70,
        "today": 2,
        "cum": 72
      },
      {
        "type": "살수차",
        "prev": 47,
        "today": 1,
        "cum": 48
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 31,
        "today": 1,
        "cum": 32
      }
    ],
    "equipment_total": {
      "prev": 1502,
      "today": 25,
      "cum": 1527
    }
  },
  "2026-07-04": {
    "date": "2026-07-04",
    "weather": "흐림",
    "progress": {
      "plan": 2.92,
      "actual": 4.7,
      "diff": 160.97
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1466,
        "today": 0,
        "cum": 1466,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 334856,
        "today": 0,
        "cum": 334856,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 430573.67999999993,
        "today": 0,
        "cum": 430573.67999999993,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆부대공",
      " 1. 침사지  조성(BL.6)",
      "   - B/H1.0-1, 보통인부-2",
      " 2. 가배수로 조성(BL.6)",
      "   - B/H0.2-1, 보통인부-2",
      "◆기타",
      " 1. 사면보호 천막 설치(은탄리 485)",
      "   - 보통인부-4"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2423,
        "today": 4,
        "cum": 2427
      },
      {
        "role": "하도급직원",
        "prev": 28,
        "today": 0,
        "cum": 28
      },
      {
        "role": "작업반장",
        "prev": 126,
        "today": 0,
        "cum": 126
      },
      {
        "role": "보통인부",
        "prev": 94,
        "today": 8,
        "cum": 102
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 116,
        "today": 0,
        "cum": 116
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 30,
        "today": 0,
        "cum": 30
      },
      {
        "role": "장약공",
        "prev": 36,
        "today": 0,
        "cum": 36
      }
    ],
    "personnel_total": {
      "prev": 2853,
      "today": 12,
      "cum": 2865
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 32,
        "today": 0,
        "cum": 32
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 39,
        "today": 1,
        "cum": 40
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 70,
        "today": 0,
        "cum": 70
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 100,
        "today": 1,
        "cum": 101
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 31,
        "today": 0,
        "cum": 31
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 73,
        "today": 0,
        "cum": 73
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 163,
        "today": 0,
        "cum": 163
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 162,
        "today": 0,
        "cum": 162
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 72,
        "today": 0,
        "cum": 72
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 48,
        "today": 0,
        "cum": 48
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 32,
        "today": 0,
        "cum": 32
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 100,
        "today": 0,
        "cum": 100
      },
      {
        "type": "B/H",
        "prev": 334,
        "today": 2,
        "cum": 336
      },
      {
        "type": "D/T",
        "prev": 325,
        "today": 0,
        "cum": 325
      },
      {
        "type": "크로라드릴",
        "prev": 72,
        "today": 0,
        "cum": 72
      },
      {
        "type": "살수차",
        "prev": 48,
        "today": 0,
        "cum": 48
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 32,
        "today": 0,
        "cum": 32
      }
    ],
    "equipment_total": {
      "prev": 1527,
      "today": 2,
      "cum": 1529
    }
  },
  "2026-07-05": {
    "date": "2026-07-05",
    "weather": "비",
    "progress": {
      "plan": 2.95,
      "actual": 4.7,
      "diff": 159.11
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1466,
        "today": 0,
        "cum": 1466,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 334856,
        "today": 0,
        "cum": 334856,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 430573.67999999993,
        "today": 0,
        "cum": 430573.67999999993,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 13)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H380-1, B/H0.6-2",
      " 2. 흙쌓기(BL.2, 5, 6, 13, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-4, D/T15-5 신호수-2",
      "   - 관리자-2, 작업반장-1",
      " 3. 발파암 소할(BL.2, 5)",
      "   - B/H1.0-2",
      " 4. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.2)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 6. 발파(BL.2)                [109공,  3회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 침사지 안전난간 설치(BL.6)",
      "   - B/H0.2-1, 보통인부-3"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2427,
        "today": 2,
        "cum": 2429
      },
      {
        "role": "하도급직원",
        "prev": 28,
        "today": 0,
        "cum": 28
      },
      {
        "role": "작업반장",
        "prev": 126,
        "today": 0,
        "cum": 126
      },
      {
        "role": "보통인부",
        "prev": 102,
        "today": 0,
        "cum": 102
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 116,
        "today": 0,
        "cum": 116
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 30,
        "today": 0,
        "cum": 30
      },
      {
        "role": "장약공",
        "prev": 36,
        "today": 0,
        "cum": 36
      }
    ],
    "personnel_total": {
      "prev": 2865,
      "today": 2,
      "cum": 2867
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 32,
        "today": 0,
        "cum": 32
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 40,
        "today": 0,
        "cum": 40
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 70,
        "today": 0,
        "cum": 70
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 101,
        "today": 0,
        "cum": 101
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 31,
        "today": 0,
        "cum": 31
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 73,
        "today": 0,
        "cum": 73
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 163,
        "today": 0,
        "cum": 163
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 162,
        "today": 0,
        "cum": 162
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 72,
        "today": 0,
        "cum": 72
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 48,
        "today": 0,
        "cum": 48
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 32,
        "today": 0,
        "cum": 32
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 100,
        "today": 0,
        "cum": 100
      },
      {
        "type": "B/H",
        "prev": 336,
        "today": 0,
        "cum": 336
      },
      {
        "type": "D/T",
        "prev": 325,
        "today": 0,
        "cum": 325
      },
      {
        "type": "크로라드릴",
        "prev": 72,
        "today": 0,
        "cum": 72
      },
      {
        "type": "살수차",
        "prev": 48,
        "today": 0,
        "cum": 48
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 32,
        "today": 0,
        "cum": 32
      }
    ],
    "equipment_total": {
      "prev": 1529,
      "today": 0,
      "cum": 1529
    }
  },
  "2026-07-06": {
    "date": "2026-07-06",
    "weather": "흐림/비",
    "progress": {
      "plan": 2.99,
      "actual": 4.83,
      "diff": 161.87
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1466,
        "today": 0,
        "cum": 1466,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 334856,
        "today": 10005,
        "cum": 344861,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 430573.67999999993,
        "today": 12806.4,
        "cum": 443380.07999999996,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 13)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H380-1, B/H0.6-2",
      " 2. 흙쌓기(BL.2, 5, 6, 13, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-4, D/T15-5 신호수-2",
      "   - 관리자-2, 작업반장-1",
      " 3. 발파암 소할(BL.2, 5)",
      "   - B/H1.0-2",
      " 4. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.2)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 6. 발파(BL.2)                [109공,  3회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 침사지 안전난간 설치(BL.6)",
      "   - B/H0.2-1, 보통인부-3"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 기성검사"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2429,
        "today": 25,
        "cum": 2454
      },
      {
        "role": "하도급직원",
        "prev": 28,
        "today": 4,
        "cum": 32
      },
      {
        "role": "작업반장",
        "prev": 126,
        "today": 1,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 102,
        "today": 3,
        "cum": 105
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 116,
        "today": 3,
        "cum": 119
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 30,
        "today": 1,
        "cum": 31
      },
      {
        "role": "장약공",
        "prev": 36,
        "today": 1,
        "cum": 37
      }
    ],
    "personnel_total": {
      "prev": 2867,
      "today": 38,
      "cum": 2905
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 42,
        "today": 1,
        "cum": 43
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 32,
        "today": 1,
        "cum": 33
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 40,
        "today": 1,
        "cum": 41
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 70,
        "today": 2,
        "cum": 72
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 101,
        "today": 3,
        "cum": 104
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 31,
        "today": 1,
        "cum": 32
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 73,
        "today": 2,
        "cum": 75
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 163,
        "today": 5,
        "cum": 168
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 162,
        "today": 4,
        "cum": 166
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 72,
        "today": 2,
        "cum": 74
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 48,
        "today": 1,
        "cum": 49
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 32,
        "today": 1,
        "cum": 33
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 100,
        "today": 2,
        "cum": 102
      },
      {
        "type": "B/H",
        "prev": 336,
        "today": 9,
        "cum": 345
      },
      {
        "type": "D/T",
        "prev": 325,
        "today": 9,
        "cum": 334
      },
      {
        "type": "크로라드릴",
        "prev": 72,
        "today": 2,
        "cum": 74
      },
      {
        "type": "살수차",
        "prev": 48,
        "today": 1,
        "cum": 49
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 32,
        "today": 1,
        "cum": 33
      }
    ],
    "equipment_total": {
      "prev": 1529,
      "today": 24,
      "cum": 1553
    }
  },
  "2026-07-07": {
    "date": "2026-07-07",
    "weather": "비/흐림",
    "progress": {
      "plan": 3.02,
      "actual": 4.83,
      "diff": 160.04
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1466,
        "today": 0,
        "cum": 1466,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 344861,
        "today": 0,
        "cum": 344861,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 443380.07999999996,
        "today": 0,
        "cum": 443380.07999999996,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 기성검사"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 발파암 천공 및 작업면 평탄화(BL.2)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 2. 발파(BL.2)                [109공,  3회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆기타",
      " 1. 우천 현장대기",
      "   - B/H1.0-1, B/H0.6-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2454,
        "today": 25,
        "cum": 2479
      },
      {
        "role": "하도급직원",
        "prev": 32,
        "today": 0,
        "cum": 32
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 119,
        "today": 0,
        "cum": 119
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 31,
        "today": 0,
        "cum": 31
      },
      {
        "role": "장약공",
        "prev": 37,
        "today": 0,
        "cum": 37
      }
    ],
    "personnel_total": {
      "prev": 2905,
      "today": 25,
      "cum": 2930
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 33,
        "today": 0,
        "cum": 33
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 41,
        "today": 0,
        "cum": 41
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 72,
        "today": 0,
        "cum": 72
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 32,
        "today": 0,
        "cum": 32
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 75,
        "today": 0,
        "cum": 75
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 168,
        "today": 0,
        "cum": 168
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 166,
        "today": 0,
        "cum": 166
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 74,
        "today": 0,
        "cum": 74
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 49,
        "today": 0,
        "cum": 49
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 33,
        "today": 0,
        "cum": 33
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 102,
        "today": 0,
        "cum": 102
      },
      {
        "type": "B/H",
        "prev": 345,
        "today": 0,
        "cum": 345
      },
      {
        "type": "D/T",
        "prev": 334,
        "today": 0,
        "cum": 334
      },
      {
        "type": "크로라드릴",
        "prev": 74,
        "today": 0,
        "cum": 74
      },
      {
        "type": "살수차",
        "prev": 49,
        "today": 0,
        "cum": 49
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 33,
        "today": 0,
        "cum": 33
      }
    ],
    "equipment_total": {
      "prev": 1553,
      "today": 0,
      "cum": 1553
    }
  },
  "2026-07-08": {
    "date": "2026-07-08",
    "weather": "비",
    "progress": {
      "plan": 3.06,
      "actual": 4.84,
      "diff": 158.25
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1466,
        "today": 0,
        "cum": 1466,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 344861,
        "today": 0,
        "cum": 344861,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 443380.07999999996,
        "today": 0,
        "cum": 443380.07999999996,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 발파암 천공 및 작업면 평탄화(BL.2)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 2. 발파(BL.2)                [109공,  3회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆기타",
      " 1. 우천 현장대기(주/야간)",
      "   - B/H1.0-1, B/H0.6-1"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 우천 현장대기",
      "   - B/H1.0-1, B/H0.6-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2479,
        "today": 25,
        "cum": 2504
      },
      {
        "role": "하도급직원",
        "prev": 32,
        "today": 2,
        "cum": 34
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 119,
        "today": 1,
        "cum": 120
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 31,
        "today": 1,
        "cum": 32
      },
      {
        "role": "장약공",
        "prev": 37,
        "today": 1,
        "cum": 38
      }
    ],
    "personnel_total": {
      "prev": 2930,
      "today": 30,
      "cum": 2960
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 33,
        "today": 0,
        "cum": 33
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 41,
        "today": 0,
        "cum": 41
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 72,
        "today": 1,
        "cum": 73
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 104,
        "today": 2,
        "cum": 106
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 32,
        "today": 0,
        "cum": 32
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 75,
        "today": 0,
        "cum": 75
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 168,
        "today": 0,
        "cum": 168
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 166,
        "today": 0,
        "cum": 166
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 74,
        "today": 2,
        "cum": 76
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 49,
        "today": 0,
        "cum": 49
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 33,
        "today": 0,
        "cum": 33
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 102,
        "today": 0,
        "cum": 102
      },
      {
        "type": "B/H",
        "prev": 345,
        "today": 3,
        "cum": 348
      },
      {
        "type": "D/T",
        "prev": 334,
        "today": 0,
        "cum": 334
      },
      {
        "type": "크로라드릴",
        "prev": 74,
        "today": 2,
        "cum": 76
      },
      {
        "type": "살수차",
        "prev": 49,
        "today": 0,
        "cum": 49
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 33,
        "today": 0,
        "cum": 33
      }
    ],
    "equipment_total": {
      "prev": 1553,
      "today": 5,
      "cum": 1558
    }
  },
  "2026-07-09": {
    "date": "2026-07-09",
    "weather": "비",
    "progress": {
      "plan": 3.09,
      "actual": 4.84,
      "diff": 156.5
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1466,
        "today": 0,
        "cum": 1466,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 344861,
        "today": 0,
        "cum": 344861,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 443380.07999999996,
        "today": 0,
        "cum": 443380.07999999996,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 우천 돌관작업(현장 복구)",
      "   - B/H500-1, B/H1.0-1, B/H0.6-2, D/T15-2"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 13)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H380-1, B/H0.6-1",
      " 2. 흙쌓기(BL.2, 5, 6, 13, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-2, D/T15-4, 신호수-2",
      "   - 관리자-2",
      " 3. 유실사면 및 진입로 복구(BL.1)",
      "   - B/H1.0-1, B/H0.2-1",
      " 4. 유실사면 및 진입로 복구(BL.6)",
      "   - B/H0.6-1, D/T15-1",
      " 5. 가도 및 작업로 개설(BL.3)",
      "   - B/H0.6-1",
      " 6. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 7. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 8. 발파(BL.5)                [130공,  7회]",
      "   - 관리자-1, 화약주임-1, 장약공-2",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2504,
        "today": 25,
        "cum": 2529
      },
      {
        "role": "하도급직원",
        "prev": 34,
        "today": 0,
        "cum": 34
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 120,
        "today": 0,
        "cum": 120
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 32,
        "today": 0,
        "cum": 32
      },
      {
        "role": "장약공",
        "prev": 38,
        "today": 0,
        "cum": 38
      }
    ],
    "personnel_total": {
      "prev": 2960,
      "today": 25,
      "cum": 2985
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 33,
        "today": 0,
        "cum": 33
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 41,
        "today": 0,
        "cum": 41
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 73,
        "today": 2,
        "cum": 75
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 106,
        "today": 1,
        "cum": 107
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 32,
        "today": 0,
        "cum": 32
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 75,
        "today": 1,
        "cum": 76
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 168,
        "today": 2,
        "cum": 170
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 166,
        "today": 0,
        "cum": 166
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 76,
        "today": 0,
        "cum": 76
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 49,
        "today": 0,
        "cum": 49
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 33,
        "today": 0,
        "cum": 33
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 102,
        "today": 0,
        "cum": 102
      },
      {
        "type": "B/H",
        "prev": 348,
        "today": 4,
        "cum": 352
      },
      {
        "type": "D/T",
        "prev": 334,
        "today": 2,
        "cum": 336
      },
      {
        "type": "크로라드릴",
        "prev": 76,
        "today": 0,
        "cum": 76
      },
      {
        "type": "살수차",
        "prev": 49,
        "today": 0,
        "cum": 49
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 33,
        "today": 0,
        "cum": 33
      }
    ],
    "equipment_total": {
      "prev": 1558,
      "today": 6,
      "cum": 1564
    }
  },
  "2026-07-10": {
    "date": "2026-07-10",
    "weather": "흐림",
    "progress": {
      "plan": 3.12,
      "actual": 4.97,
      "diff": 159.03
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1466,
        "today": 195,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 344861,
        "today": 9645,
        "cum": 354506,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 443380.07999999996,
        "today": 12560.1,
        "cum": 455940.17999999993,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 13)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H380-1, B/H0.6-1",
      " 2. 흙쌓기(BL.2, 5, 6, 13, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-2, D/T15-4, 신호수-2",
      "   - 관리자-2",
      " 3. 유실사면 및 진입로 복구(BL.1)",
      "   - B/H1.0-1, B/H0.2-1",
      " 4. 유실사면 및 진입로 복구(BL.6)",
      "   - B/H0.6-1, D/T15-1",
      " 5. 가도 및 작업로 개설(BL.3)",
      "   - B/H0.6-1",
      " 6. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 7. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 8. 발파(BL.5)                [130공,  7회]",
      "   - 관리자-1, 화약주임-1, 장약공-2",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 우천 피해사항 및 보완사항 합동점검(자체 점검)"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 우천 피해 복구 작업(토사유실 사면, 작업로 정비)",
      "   - B/H380-1, B/H1.0-1, B/H0.2-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2529,
        "today": 25,
        "cum": 2554
      },
      {
        "role": "하도급직원",
        "prev": 34,
        "today": 4,
        "cum": 38
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 120,
        "today": 3,
        "cum": 123
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 32,
        "today": 1,
        "cum": 33
      },
      {
        "role": "장약공",
        "prev": 38,
        "today": 2,
        "cum": 40
      }
    ],
    "personnel_total": {
      "prev": 2985,
      "today": 35,
      "cum": 3020
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 43,
        "today": 1,
        "cum": 44
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 33,
        "today": 1,
        "cum": 34
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 41,
        "today": 1,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 75,
        "today": 3,
        "cum": 78
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 107,
        "today": 2,
        "cum": 109
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 32,
        "today": 1,
        "cum": 33
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 76,
        "today": 2,
        "cum": 78
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 170,
        "today": 5,
        "cum": 175
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 166,
        "today": 2,
        "cum": 168
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 76,
        "today": 2,
        "cum": 78
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 49,
        "today": 1,
        "cum": 50
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 33,
        "today": 1,
        "cum": 34
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 102,
        "today": 2,
        "cum": 104
      },
      {
        "type": "B/H",
        "prev": 352,
        "today": 9,
        "cum": 361
      },
      {
        "type": "D/T",
        "prev": 336,
        "today": 7,
        "cum": 343
      },
      {
        "type": "크로라드릴",
        "prev": 76,
        "today": 2,
        "cum": 78
      },
      {
        "type": "살수차",
        "prev": 49,
        "today": 1,
        "cum": 50
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 33,
        "today": 1,
        "cum": 34
      }
    ],
    "equipment_total": {
      "prev": 1564,
      "today": 22,
      "cum": 1586
    }
  },
  "2026-07-11": {
    "date": "2026-07-11",
    "weather": "맑음",
    "progress": {
      "plan": 3.15,
      "actual": 4.97,
      "diff": 157.78
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 354506,
        "today": 0,
        "cum": 354506,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 455940.17999999993,
        "today": 0,
        "cum": 455940.17999999993,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 우천 피해 복구 작업(토사유실 사면, 작업로 정비)",
      "   - B/H380-1, B/H1.0-1, B/H0.2-1"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2554,
        "today": 2,
        "cum": 2556
      },
      {
        "role": "하도급직원",
        "prev": 38,
        "today": 0,
        "cum": 38
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 123,
        "today": 0,
        "cum": 123
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 33,
        "today": 0,
        "cum": 33
      },
      {
        "role": "장약공",
        "prev": 40,
        "today": 0,
        "cum": 40
      }
    ],
    "personnel_total": {
      "prev": 3020,
      "today": 2,
      "cum": 3022
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 34,
        "today": 0,
        "cum": 34
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 42,
        "today": 1,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 78,
        "today": 0,
        "cum": 78
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 109,
        "today": 1,
        "cum": 110
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 33,
        "today": 1,
        "cum": 34
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 78,
        "today": 0,
        "cum": 78
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 175,
        "today": 0,
        "cum": 175
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 168,
        "today": 0,
        "cum": 168
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 78,
        "today": 0,
        "cum": 78
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 50,
        "today": 0,
        "cum": 50
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 34,
        "today": 0,
        "cum": 34
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "B/H",
        "prev": 361,
        "today": 3,
        "cum": 364
      },
      {
        "type": "D/T",
        "prev": 343,
        "today": 0,
        "cum": 343
      },
      {
        "type": "크로라드릴",
        "prev": 78,
        "today": 0,
        "cum": 78
      },
      {
        "type": "살수차",
        "prev": 50,
        "today": 0,
        "cum": 50
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 34,
        "today": 0,
        "cum": 34
      }
    ],
    "equipment_total": {
      "prev": 1586,
      "today": 3,
      "cum": 1589
    }
  },
  "2026-07-12": {
    "date": "2026-07-12",
    "weather": "맑음",
    "progress": {
      "plan": 3.17,
      "actual": 4.97,
      "diff": 156.56
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 354506,
        "today": 0,
        "cum": 354506,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 455940.17999999993,
        "today": 0,
        "cum": 455940.17999999993,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 6)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H380-1, B/H0.6-1",
      " 2. 흙쌓기(BL.2, 5, 6, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-4, D/T15-4, 신호수-2",
      "   - 관리자-2",
      " 3. 발파암 소할 및 법면 정리",
      "   - B/H1.0-1",
      " 4. 가도 및 배수로 정비",
      "   - B/H0.6-1",
      " 5. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 6. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 7. 발파(BL.5)                [171공,  9회]",
      "   - 관리자-1, 화약주임-1, 장약공-2",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 임시침사지/가배수로 안전난간 설치",
      "   - 보통인부-4"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2556,
        "today": 2,
        "cum": 2558
      },
      {
        "role": "하도급직원",
        "prev": 38,
        "today": 0,
        "cum": 38
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 123,
        "today": 0,
        "cum": 123
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 33,
        "today": 0,
        "cum": 33
      },
      {
        "role": "장약공",
        "prev": 40,
        "today": 0,
        "cum": 40
      }
    ],
    "personnel_total": {
      "prev": 3022,
      "today": 2,
      "cum": 3024
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 34,
        "today": 0,
        "cum": 34
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 78,
        "today": 0,
        "cum": 78
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 110,
        "today": 0,
        "cum": 110
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 34,
        "today": 0,
        "cum": 34
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 78,
        "today": 0,
        "cum": 78
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 175,
        "today": 0,
        "cum": 175
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 168,
        "today": 0,
        "cum": 168
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 78,
        "today": 0,
        "cum": 78
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 50,
        "today": 0,
        "cum": 50
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 34,
        "today": 0,
        "cum": 34
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "B/H",
        "prev": 364,
        "today": 0,
        "cum": 364
      },
      {
        "type": "D/T",
        "prev": 343,
        "today": 0,
        "cum": 343
      },
      {
        "type": "크로라드릴",
        "prev": 78,
        "today": 0,
        "cum": 78
      },
      {
        "type": "살수차",
        "prev": 50,
        "today": 0,
        "cum": 50
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 34,
        "today": 0,
        "cum": 34
      }
    ],
    "equipment_total": {
      "prev": 1589,
      "today": 0,
      "cum": 1589
    }
  },
  "2026-07-13": {
    "date": "2026-07-13",
    "weather": "맑음",
    "progress": {
      "plan": 3.21,
      "actual": 5.11,
      "diff": 159.26
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 354506,
        "today": 10570,
        "cum": 365076,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 455940.17999999993,
        "today": 13529.6,
        "cum": 469469.7799999999,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 6)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H380-1, B/H0.6-1",
      " 2. 흙쌓기(BL.2, 5, 6, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-4, D/T15-5, 신호수-2",
      "   - 관리자-2",
      " 3. 발파암 소할 및 법면 정리",
      "   - B/H1.0-1",
      " 4. 가도 및 배수로 정비",
      "   - B/H0.6-1",
      " 5. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 6. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 7. 발파(BL.5)                [171공,  9회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 임시침사지/가배수로 안전난간 설치",
      "   - 보통인부-4"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 6)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H380-1, B/H0.6-1",
      " 2. 흙쌓기(BL.2, 5, 6, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-1, D/T15-5, 신호수-2",
      "   - 관리자-2",
      " 3. 임목파쇄장 조성(은탄리 산 29)",
      "   - B/H1.0-1",
      " 4. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 6. 발파(BL.5)                [74공,  4회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆폐기물처리용역",
      " 1. 폐기물 반출",
      "   - 폐콘크리트 6대",
      "◆기타",
      " 1. 법면 정리 및 천막 설치(BL.3)",
      "   - B/H0.6-1, 보통인부-3",
      " 2. 이주자 철거 지원(은탄리 801)",
      "   - 보통인부-2"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2558,
        "today": 24,
        "cum": 2582
      },
      {
        "role": "하도급직원",
        "prev": 38,
        "today": 4,
        "cum": 42
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 105,
        "today": 4,
        "cum": 109
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 123,
        "today": 3,
        "cum": 126
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 33,
        "today": 1,
        "cum": 34
      },
      {
        "role": "장약공",
        "prev": 40,
        "today": 1,
        "cum": 41
      }
    ],
    "personnel_total": {
      "prev": 3024,
      "today": 37,
      "cum": 3061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 44,
        "today": 1,
        "cum": 45
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 34,
        "today": 1,
        "cum": 35
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 78,
        "today": 2,
        "cum": 80
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 110,
        "today": 2,
        "cum": 112
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 34,
        "today": 1,
        "cum": 35
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 78,
        "today": 2,
        "cum": 80
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 175,
        "today": 5,
        "cum": 180
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 168,
        "today": 4,
        "cum": 172
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 78,
        "today": 2,
        "cum": 80
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 50,
        "today": 1,
        "cum": 51
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 34,
        "today": 1,
        "cum": 35
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 104,
        "today": 2,
        "cum": 106
      },
      {
        "type": "B/H",
        "prev": 364,
        "today": 7,
        "cum": 371
      },
      {
        "type": "D/T",
        "prev": 343,
        "today": 9,
        "cum": 352
      },
      {
        "type": "크로라드릴",
        "prev": 78,
        "today": 2,
        "cum": 80
      },
      {
        "type": "살수차",
        "prev": 50,
        "today": 1,
        "cum": 51
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 34,
        "today": 1,
        "cum": 35
      }
    ],
    "equipment_total": {
      "prev": 1589,
      "today": 22,
      "cum": 1611
    }
  },
  "2026-07-14": {
    "date": "2026-07-14",
    "weather": "흐림",
    "progress": {
      "plan": 3.24,
      "actual": 5.28,
      "diff": 162.98
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 365076,
        "today": 11764,
        "cum": 376840,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 469469.7799999999,
        "today": 15057.92,
        "cum": 484527.6999999999,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 6)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H380-1, B/H0.6-1",
      " 2. 흙쌓기(BL.2, 5, 6, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-1, D/T15-5, 신호수-2",
      "   - 관리자-2",
      " 3. 임목파쇄장 조성(은탄리 산 29)",
      "   - B/H1.0-1",
      " 4. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 6. 발파(BL.5)                [74공,  4회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆폐기물처리용역",
      " 1. 폐기물 반출",
      "   - 폐콘크리트 6대",
      "◆기타",
      " 1. 법면 정리 및 천막 설치(BL.3)",
      "   - B/H0.6-1, 보통인부-3",
      " 2. 이주자 철거 지원(은탄리 801)",
      "   - 보통인부-2"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 6)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H0.6-1",
      " 2. 흙쌓기(BL.2, 5, 6, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-1, D/T15-5, 신호수-2",
      "   - 관리자-2",
      " 3. 임목파쇄장 조성(은탄리 산 29)",
      "   - B/H1.0-1",
      " 4. 배수로 정비 및 침사지 준설(은탄리 802-31, 수해복구)",
      "   - B/H380-1",
      " 5. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 6. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 관리자-1, 천공기-2, B/H1.0-1, 화약주임-1, 장약공-1, 신호수-1",
      " 7. 이주자 수목처리 및 운반(은탄리 798)",
      "   - B/H0.6-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2582,
        "today": 25,
        "cum": 2607
      },
      {
        "role": "하도급직원",
        "prev": 42,
        "today": 4,
        "cum": 46
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 109,
        "today": 5,
        "cum": 114
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 126,
        "today": 3,
        "cum": 129
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 34,
        "today": 1,
        "cum": 35
      },
      {
        "role": "장약공",
        "prev": 41,
        "today": 1,
        "cum": 42
      }
    ],
    "personnel_total": {
      "prev": 3061,
      "today": 39,
      "cum": 3100
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 45,
        "today": 1,
        "cum": 46
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 35,
        "today": 1,
        "cum": 36
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 80,
        "today": 2,
        "cum": 82
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 112,
        "today": 2,
        "cum": 114
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 35,
        "today": 1,
        "cum": 36
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 80,
        "today": 2,
        "cum": 82
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 180,
        "today": 5,
        "cum": 185
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 172,
        "today": 1,
        "cum": 173
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 80,
        "today": 2,
        "cum": 82
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 51,
        "today": 1,
        "cum": 52
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 35,
        "today": 1,
        "cum": 36
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 106,
        "today": 2,
        "cum": 108
      },
      {
        "type": "B/H",
        "prev": 371,
        "today": 7,
        "cum": 378
      },
      {
        "type": "D/T",
        "prev": 352,
        "today": 6,
        "cum": 358
      },
      {
        "type": "크로라드릴",
        "prev": 80,
        "today": 2,
        "cum": 82
      },
      {
        "type": "살수차",
        "prev": 51,
        "today": 1,
        "cum": 52
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 35,
        "today": 1,
        "cum": 36
      }
    ],
    "equipment_total": {
      "prev": 1611,
      "today": 19,
      "cum": 1630
    }
  },
  "2026-07-15": {
    "date": "2026-07-15",
    "weather": "맑음",
    "progress": {
      "plan": 3.26,
      "actual": 5.44,
      "diff": 166.66
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 376840,
        "today": 11808,
        "cum": 388648,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 484527.6999999999,
        "today": 15114.24,
        "cum": 499641.9399999999,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 6)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H0.6-1",
      " 2. 흙쌓기(BL.2, 5, 6, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-1, D/T15-5, 신호수-2",
      "   - 관리자-2",
      " 3. 임목파쇄장 조성(은탄리 산 29)",
      "   - B/H1.0-1",
      " 4. 배수로 정비 및 침사지 준설(은탄리 802-31, 수해복구)",
      "   - B/H380-1",
      " 5. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 6. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 관리자-1, 천공기-2, B/H1.0-1, 화약주임-1, 장약공-1, 신호수-1",
      " 7. 이주자 수목처리 및 운반(은탄리 798)",
      "   - B/H0.6-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 6)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H0.6-1",
      " 2. 흙쌓기(BL.2, 5, 6, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-2, D/T15-4, 신호수-2",
      "   - 관리자-2",
      " 3. 침사지 준설(은탄리 802-31, 수해복구)",
      "   - B/H380-1",
      " 4. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 6. 발파(BL.5)                [125공,  7회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      " 7. 이주자 수목 이식(은탄리 798)",
      "   - B/H0.6-1, 조경공-4",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 방음벽 해체(은탄리 780), 침사지 안전난간대 설치(수해복구)",
      "   - B/H1.0-1, 보통인부-5"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2607,
        "today": 25,
        "cum": 2632
      },
      {
        "role": "하도급직원",
        "prev": 46,
        "today": 4,
        "cum": 50
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 114,
        "today": 0,
        "cum": 114
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 129,
        "today": 3,
        "cum": 132
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 35,
        "today": 1,
        "cum": 36
      },
      {
        "role": "장약공",
        "prev": 42,
        "today": 1,
        "cum": 43
      }
    ],
    "personnel_total": {
      "prev": 3100,
      "today": 34,
      "cum": 3134
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 46,
        "today": 1,
        "cum": 47
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 36,
        "today": 1,
        "cum": 37
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 82,
        "today": 2,
        "cum": 84
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 114,
        "today": 2,
        "cum": 116
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 36,
        "today": 1,
        "cum": 37
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 82,
        "today": 2,
        "cum": 84
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 185,
        "today": 5,
        "cum": 190
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 173,
        "today": 1,
        "cum": 174
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 82,
        "today": 2,
        "cum": 84
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 52,
        "today": 1,
        "cum": 53
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 36,
        "today": 1,
        "cum": 37
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 108,
        "today": 2,
        "cum": 110
      },
      {
        "type": "B/H",
        "prev": 378,
        "today": 7,
        "cum": 385
      },
      {
        "type": "D/T",
        "prev": 358,
        "today": 6,
        "cum": 364
      },
      {
        "type": "크로라드릴",
        "prev": 82,
        "today": 2,
        "cum": 84
      },
      {
        "type": "살수차",
        "prev": 52,
        "today": 1,
        "cum": 53
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 36,
        "today": 1,
        "cum": 37
      }
    ],
    "equipment_total": {
      "prev": 1630,
      "today": 19,
      "cum": 1649
    }
  },
  "2026-07-16": {
    "date": "2026-07-16",
    "weather": "맑음",
    "progress": {
      "plan": 3.29,
      "actual": 5.63,
      "diff": 171.03
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 388648,
        "today": 13592,
        "cum": 402240,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 499641.9399999999,
        "today": 17397.760000000002,
        "cum": 517039.6999999999,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 6)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H0.6-1",
      " 2. 흙쌓기(BL.2, 5, 6, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-2, D/T15-4, 신호수-2",
      "   - 관리자-2",
      " 3. 침사지 준설(은탄리 802-31, 수해복구)",
      "   - B/H380-1",
      " 4. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 6. 발파(BL.5)                [125공,  7회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      " 7. 이주자 수목 이식(은탄리 798)",
      "   - B/H0.6-1, 조경공-4",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 방음벽 해체(은탄리 780), 침사지 안전난간대 설치(수해복구)",
      "   - B/H1.0-1, 보통인부-5"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 6)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H0.6-2",
      " 2. 흙쌓기(BL.2, 5, 6, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-2, D/T15-4, 신호수-2",
      "   - 관리자-2",
      " 3. 침사지 준설(은탄리 802-31, 수해복구)",
      "   - B/H380-1",
      " 4. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 관리자-1, 천공기-2, B/H1.0-1, 화약주임-1, 장약공-1, 신호수-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 방음벽 해체(은탄리 780), 침사지 안전난간대 설치(수해복구)",
      "   - B/H1.0-1, 보통인부-3"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2632,
        "today": 25,
        "cum": 2657
      },
      {
        "role": "하도급직원",
        "prev": 50,
        "today": 4,
        "cum": 54
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 114,
        "today": 5,
        "cum": 119
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 132,
        "today": 3,
        "cum": 135
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 36,
        "today": 1,
        "cum": 37
      },
      {
        "role": "장약공",
        "prev": 43,
        "today": 1,
        "cum": 44
      }
    ],
    "personnel_total": {
      "prev": 3134,
      "today": 39,
      "cum": 3173
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 47,
        "today": 1,
        "cum": 48
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 37,
        "today": 1,
        "cum": 38
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 84,
        "today": 2,
        "cum": 86
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 116,
        "today": 2,
        "cum": 118
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 37,
        "today": 1,
        "cum": 38
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 84,
        "today": 2,
        "cum": 86
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 190,
        "today": 4,
        "cum": 194
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 174,
        "today": 2,
        "cum": 176
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 84,
        "today": 2,
        "cum": 86
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 53,
        "today": 1,
        "cum": 54
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 37,
        "today": 1,
        "cum": 38
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 110,
        "today": 2,
        "cum": 112
      },
      {
        "type": "B/H",
        "prev": 385,
        "today": 7,
        "cum": 392
      },
      {
        "type": "D/T",
        "prev": 364,
        "today": 6,
        "cum": 370
      },
      {
        "type": "크로라드릴",
        "prev": 84,
        "today": 2,
        "cum": 86
      },
      {
        "type": "살수차",
        "prev": 53,
        "today": 1,
        "cum": 54
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 616,
        "today": 0,
        "cum": 616
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 37,
        "today": 1,
        "cum": 38
      }
    ],
    "equipment_total": {
      "prev": 1649,
      "today": 19,
      "cum": 1668
    }
  },
  "2026-07-17": {
    "date": "2026-07-17",
    "weather": "흐림/비",
    "progress": {
      "plan": 3.31,
      "actual": 5.81,
      "diff": 175.39
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 402240,
        "today": 13763,
        "cum": 416003,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 517039.6999999999,
        "today": 17616.64,
        "cum": 534656.3399999999,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깎기(BL.2, 5, 6)",
      "   - D/ZD1-1, D/Z11T-1, B/H500-2, B/H0.6-2",
      " 2. 흙쌓기(BL.2, 5, 6, 중로(집)3-12, 중로(집)3-14, 중로(집)3-16)",
      "   - D/T25-2, D/T15-4, 신호수-2",
      "   - 관리자-2",
      " 3. 침사지 준설(은탄리 802-31, 수해복구)",
      "   - B/H380-1",
      " 4. 정지작업 및 노면정리",
      "   - 진동롤러-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 관리자-1, 천공기-2, B/H1.0-1, 화약주임-1, 장약공-1, 신호수-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 방음벽 해체(은탄리 780), 침사지 안전난간대 설치(수해복구)",
      "   - B/H1.0-1, 보통인부-3",
      " 2. 우천 야간 대기"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토",
      " 2. 우천 주/야간 대기"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2657,
        "today": 15,
        "cum": 2672
      },
      {
        "role": "하도급직원",
        "prev": 54,
        "today": 4,
        "cum": 58
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 119,
        "today": 3,
        "cum": 122
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 135,
        "today": 3,
        "cum": 138
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 37,
        "today": 1,
        "cum": 38
      },
      {
        "role": "장약공",
        "prev": 44,
        "today": 1,
        "cum": 45
      }
    ],
    "personnel_total": {
      "prev": 3173,
      "today": 27,
      "cum": 3200
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 48,
        "today": 1,
        "cum": 49
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 38,
        "today": 1,
        "cum": 39
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 43,
        "today": 1,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 86,
        "today": 2,
        "cum": 88
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 118,
        "today": 2,
        "cum": 120
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 38,
        "today": 1,
        "cum": 39
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 86,
        "today": 2,
        "cum": 88
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 194,
        "today": 4,
        "cum": 198
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 176,
        "today": 2,
        "cum": 178
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 86,
        "today": 2,
        "cum": 88
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 54,
        "today": 1,
        "cum": 55
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 38,
        "today": 1,
        "cum": 39
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 112,
        "today": 2,
        "cum": 114
      },
      {
        "type": "B/H",
        "prev": 392,
        "today": 8,
        "cum": 400
      },
      {
        "type": "D/T",
        "prev": 370,
        "today": 6,
        "cum": 376
      },
      {
        "type": "크로라드릴",
        "prev": 86,
        "today": 2,
        "cum": 88
      },
      {
        "type": "살수차",
        "prev": 54,
        "today": 1,
        "cum": 55
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 38,
        "today": 1,
        "cum": 39
      }
    ],
    "equipment_total": {
      "prev": 2720,
      "today": 20,
      "cum": 2740
    }
  },
  "2026-07-18": {
    "date": "2026-07-18",
    "weather": "비",
    "progress": {
      "plan": 3.34,
      "actual": 5.81,
      "diff": 174.05
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 416003,
        "today": 0,
        "cum": 416003,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 534656.3399999999,
        "today": 0,
        "cum": 534656.3399999999,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토",
      " 2. 우천 주/야간 대기"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2672,
        "today": 3,
        "cum": 2675
      },
      {
        "role": "하도급직원",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 122,
        "today": 0,
        "cum": 122
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 138,
        "today": 0,
        "cum": 138
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 38,
        "today": 0,
        "cum": 38
      },
      {
        "role": "장약공",
        "prev": 45,
        "today": 0,
        "cum": 45
      }
    ],
    "personnel_total": {
      "prev": 3200,
      "today": 3,
      "cum": 3203
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 49,
        "today": 0,
        "cum": 49
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 39,
        "today": 0,
        "cum": 39
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 88,
        "today": 0,
        "cum": 88
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 120,
        "today": 0,
        "cum": 120
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 39,
        "today": 0,
        "cum": 39
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 88,
        "today": 0,
        "cum": 88
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 198,
        "today": 0,
        "cum": 198
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 178,
        "today": 0,
        "cum": 178
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 88,
        "today": 0,
        "cum": 88
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 39,
        "today": 0,
        "cum": 39
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 114,
        "today": 0,
        "cum": 114
      },
      {
        "type": "B/H",
        "prev": 400,
        "today": 0,
        "cum": 400
      },
      {
        "type": "D/T",
        "prev": 376,
        "today": 0,
        "cum": 376
      },
      {
        "type": "크로라드릴",
        "prev": 88,
        "today": 0,
        "cum": 88
      },
      {
        "type": "살수차",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 39,
        "today": 0,
        "cum": 39
      }
    ],
    "equipment_total": {
      "prev": 2740,
      "today": 0,
      "cum": 2740
    }
  },
  "2026-07-19": {
    "date": "2026-07-19",
    "weather": "흐림",
    "progress": {
      "plan": 3.37,
      "actual": 5.81,
      "diff": 172.73
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 416003,
        "today": 0,
        "cum": 416003,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 534656.3399999999,
        "today": 0,
        "cum": 534656.3399999999,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깍기 및 흙쌓기(BL.2)",
      "   - B/H500-1, B/H380-1, D/T15-4, D/T25-1, 신호수-1",
      " 2. 흙깍기 및 흙쌓기(BL.5)",
      "   - 관리자-2, D/Z11T-1, B/H500-1, B/H0.6-1, D/T25-2, 신호수-1",
      " 3. 도로 노체 성토(중로(집)3-16)",
      "   - D/ZD1-1, 진동롤러-1",
      " 4. 발파암 소할",
      "   - B/H1.0-1",
      " 5. 비다짐 성토 및 폐콘크리트 상차(BL.2)",
      "   - B/H0.6-1",
      " 6. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 7. 발파(BL.5)                [135공,  7회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆폐기물처리용역",
      " 1. 폐기물 반출",
      "   - 폐콘크리트 7대"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2675,
        "today": 2,
        "cum": 2677
      },
      {
        "role": "하도급직원",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 122,
        "today": 0,
        "cum": 122
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 138,
        "today": 0,
        "cum": 138
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 38,
        "today": 0,
        "cum": 38
      },
      {
        "role": "장약공",
        "prev": 45,
        "today": 0,
        "cum": 45
      }
    ],
    "personnel_total": {
      "prev": 3203,
      "today": 2,
      "cum": 3205
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 49,
        "today": 0,
        "cum": 49
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 39,
        "today": 0,
        "cum": 39
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 88,
        "today": 0,
        "cum": 88
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 120,
        "today": 0,
        "cum": 120
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 39,
        "today": 0,
        "cum": 39
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 88,
        "today": 0,
        "cum": 88
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 198,
        "today": 0,
        "cum": 198
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 178,
        "today": 0,
        "cum": 178
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 88,
        "today": 0,
        "cum": 88
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 39,
        "today": 0,
        "cum": 39
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 114,
        "today": 0,
        "cum": 114
      },
      {
        "type": "B/H",
        "prev": 400,
        "today": 0,
        "cum": 400
      },
      {
        "type": "D/T",
        "prev": 376,
        "today": 0,
        "cum": 376
      },
      {
        "type": "크로라드릴",
        "prev": 88,
        "today": 0,
        "cum": 88
      },
      {
        "type": "살수차",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 39,
        "today": 0,
        "cum": 39
      }
    ],
    "equipment_total": {
      "prev": 2740,
      "today": 0,
      "cum": 2740
    }
  },
  "2026-07-20": {
    "date": "2026-07-20",
    "weather": "비/흐림",
    "progress": {
      "plan": 3.39,
      "actual": 5.83,
      "diff": 171.99
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 416003,
        "today": 1390,
        "cum": 417393,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 534656.3399999999,
        "today": 1779.2,
        "cum": 536435.5399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깍기 및 흙쌓기(BL.2)",
      "   - B/H500-1, B/H380-1, D/T15-4, D/T25-1, 신호수-1",
      " 2. 흙깍기 및 흙쌓기(BL.5)",
      "   - 관리자-2, D/Z11T-1, B/H500-1, B/H0.6-1, D/T25-2, 신호수-1",
      " 3. 도로 노체 성토(중로(집)3-16)",
      "   - D/ZD1-1, 진동롤러-1",
      " 4. 발파암 소할",
      "   - B/H1.0-1",
      " 5. 비다짐 성토 및 폐콘크리트 상차(BL.2)",
      "   - B/H0.6-1",
      " 6. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 7. 발파(BL.5)                [135공,  7회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆폐기물처리용역",
      " 1. 폐기물 반출",
      "   - 폐콘크리트 3대",
      "◆기타",
      " 1. 우천 작업 중단"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깍기 및 흙쌓기(BL.2)",
      "   - B/H500-1, B/H380-1, B/H0.6-1, D/T15-5, D/T25-1, 신호수-1",
      " 2. 흙깍기 및 흙쌓기(BL.5)",
      "   - 관리자-2, D/Z11T-1, B/H500-1, B/H0.6-1, D/T25-2, 신호수-1",
      " 3. 도로 노체 성토(중로(집)3-16)",
      "   - D/ZD1-1, 진동롤러-1",
      " 4. 발파암 소할",
      "   - B/H1.0-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 6. 발파(BL.5)                [109공,  6회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 폐유저장소 정리",
      "   - 보통인부-2"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2677,
        "today": 25,
        "cum": 2702
      },
      {
        "role": "하도급직원",
        "prev": 58,
        "today": 4,
        "cum": 62
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 122,
        "today": 0,
        "cum": 122
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 138,
        "today": 3,
        "cum": 141
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 38,
        "today": 1,
        "cum": 39
      },
      {
        "role": "장약공",
        "prev": 45,
        "today": 1,
        "cum": 46
      }
    ],
    "personnel_total": {
      "prev": 3205,
      "today": 34,
      "cum": 3239
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 49,
        "today": 1,
        "cum": 50
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 39,
        "today": 1,
        "cum": 40
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 88,
        "today": 2,
        "cum": 90
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 120,
        "today": 2,
        "cum": 122
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 39,
        "today": 1,
        "cum": 40
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 88,
        "today": 2,
        "cum": 90
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 198,
        "today": 4,
        "cum": 202
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 178,
        "today": 3,
        "cum": 181
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 88,
        "today": 2,
        "cum": 90
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 55,
        "today": 1,
        "cum": 56
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 39,
        "today": 1,
        "cum": 40
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 114,
        "today": 2,
        "cum": 116
      },
      {
        "type": "B/H",
        "prev": 400,
        "today": 7,
        "cum": 407
      },
      {
        "type": "D/T",
        "prev": 376,
        "today": 7,
        "cum": 383
      },
      {
        "type": "크로라드릴",
        "prev": 88,
        "today": 2,
        "cum": 90
      },
      {
        "type": "살수차",
        "prev": 55,
        "today": 1,
        "cum": 56
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 39,
        "today": 1,
        "cum": 40
      }
    ],
    "equipment_total": {
      "prev": 2740,
      "today": 20,
      "cum": 2760
    }
  },
  "2026-07-21": {
    "date": "2026-07-21",
    "weather": "흐림",
    "progress": {
      "plan": 3.42,
      "actual": 5.92,
      "diff": 173.06
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 417393,
        "today": 5871,
        "cum": 423264,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 536435.5399999998,
        "today": 7514.88,
        "cum": 543950.4199999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깍기 및 흙쌓기(BL.2)",
      "   - B/H500-1, B/H380-1, B/H0.6-1, D/T25-2, D/T15-3, 신호수-1",
      " 2. 흙깍기 및 흙쌓기(BL.5)",
      "   - 관리자-2, D/Z11T-1, B/H500-1, B/H0.6-1, D/T25-1, D/T15-2, 신호수-1",
      " 3. 도로 노체 성토(중로(집)3-16)",
      "   - D/ZD1-1, 진동롤러-1",
      " 4. 발파암 소할",
      "   - B/H1.0-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 6. 발파(BL.5)                [109공,  6회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 폐유저장소 정리",
      "   - 보통인부-2"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깍기 및 흙쌓기(BL.2)",
      "   - B/H500-1, B/H380-1, B/H0.6-1, D/T25-2, D/T15-3, 신호수-1",
      " 2. 흙깍기 및 흙쌓기(BL.5)",
      "   - 관리자-2, D/Z11T-1, B/H500-1, B/H0.6-1, D/T25-1, D/T15-2, 신호수-1",
      " 3. 도로 노체 성토(중로(집)3-16)",
      "   - D/ZD1-1, 진동롤러-1",
      " 4. 발파암 소할",
      "   - B/H1.0-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 관리자-1, 천공기-2, B/H1.0-1, 화약주임-1, 장약공-1, 신호수-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2702,
        "today": 25,
        "cum": 2727
      },
      {
        "role": "하도급직원",
        "prev": 62,
        "today": 4,
        "cum": 66
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 122,
        "today": 2,
        "cum": 124
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 141,
        "today": 3,
        "cum": 144
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 39,
        "today": 1,
        "cum": 40
      },
      {
        "role": "장약공",
        "prev": 46,
        "today": 1,
        "cum": 47
      }
    ],
    "personnel_total": {
      "prev": 3239,
      "today": 36,
      "cum": 3275
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 50,
        "today": 1,
        "cum": 51
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 40,
        "today": 1,
        "cum": 41
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 90,
        "today": 2,
        "cum": 92
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 122,
        "today": 2,
        "cum": 124
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 40,
        "today": 1,
        "cum": 41
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 90,
        "today": 2,
        "cum": 92
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 202,
        "today": 5,
        "cum": 207
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 181,
        "today": 3,
        "cum": 184
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 90,
        "today": 2,
        "cum": 92
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 56,
        "today": 1,
        "cum": 57
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 40,
        "today": 1,
        "cum": 41
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 116,
        "today": 2,
        "cum": 118
      },
      {
        "type": "B/H",
        "prev": 407,
        "today": 7,
        "cum": 414
      },
      {
        "type": "D/T",
        "prev": 383,
        "today": 8,
        "cum": 391
      },
      {
        "type": "크로라드릴",
        "prev": 90,
        "today": 2,
        "cum": 92
      },
      {
        "type": "살수차",
        "prev": 56,
        "today": 1,
        "cum": 57
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 40,
        "today": 1,
        "cum": 41
      }
    ],
    "equipment_total": {
      "prev": 2760,
      "today": 21,
      "cum": 2781
    }
  },
  "2026-07-22": {
    "date": "2026-07-22",
    "weather": "비/흐림",
    "progress": {
      "plan": 3.44,
      "actual": 5.98,
      "diff": 173.78
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 423264,
        "today": 5024,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 543950.4199999998,
        "today": 6430.72,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깍기 및 흙쌓기(BL.2)",
      "   - B/H500-1, B/H380-1, B/H0.6-1, D/T25-2, D/T15-3, 신호수-1",
      " 2. 흙깍기 및 흙쌓기(BL.5)",
      "   - 관리자-2, D/Z11T-1, B/H500-1, B/H0.6-1, D/T25-1, D/T15-2, 신호수-1",
      " 3. 도로 노체 성토(중로(집)3-16)",
      "   - D/ZD1-1, 진동롤러-1",
      " 4. 발파암 소할",
      "   - B/H1.0-1",
      " 5. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 관리자-1, 천공기-2, B/H1.0-1, 화약주임-1, 장약공-1, 신호수-1",
      "◆부대공",
      " 1. 현장 살수",
      "   - 살수차(8ton)-1",
      "◆기타",
      " 1. 주간공정회의"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깍기 및 흙쌓기(BL.2, 5, 6)",
      "   - D/Z11T-1",
      " 2. 발파암 소할",
      "   - B/H1.0-1",
      " 3. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 4. 발파(BL.5)                [162공,  8회]",
      "   - 관리자-1, 화약주임-1, 장약공-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2727,
        "today": 25,
        "cum": 2752
      },
      {
        "role": "하도급직원",
        "prev": 66,
        "today": 4,
        "cum": 70
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 124,
        "today": 0,
        "cum": 124
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 144,
        "today": 3,
        "cum": 147
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 40,
        "today": 1,
        "cum": 41
      },
      {
        "role": "장약공",
        "prev": 47,
        "today": 1,
        "cum": 48
      }
    ],
    "personnel_total": {
      "prev": 3275,
      "today": 34,
      "cum": 3309
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 51,
        "today": 1,
        "cum": 52
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 41,
        "today": 1,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 92,
        "today": 2,
        "cum": 94
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 124,
        "today": 2,
        "cum": 126
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 41,
        "today": 1,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 92,
        "today": 2,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 207,
        "today": 5,
        "cum": 212
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 184,
        "today": 3,
        "cum": 187
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 92,
        "today": 2,
        "cum": 94
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 57,
        "today": 1,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 41,
        "today": 1,
        "cum": 42
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 118,
        "today": 2,
        "cum": 120
      },
      {
        "type": "B/H",
        "prev": 414,
        "today": 7,
        "cum": 421
      },
      {
        "type": "D/T",
        "prev": 391,
        "today": 8,
        "cum": 399
      },
      {
        "type": "크로라드릴",
        "prev": 92,
        "today": 2,
        "cum": 94
      },
      {
        "type": "살수차",
        "prev": 57,
        "today": 1,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 41,
        "today": 1,
        "cum": 42
      }
    ],
    "equipment_total": {
      "prev": 2781,
      "today": 21,
      "cum": 2802
    }
  },
  "2026-07-23": {
    "date": "2026-07-23",
    "weather": "흐림",
    "progress": {
      "plan": 3.47,
      "actual": 5.98,
      "diff": 172.5
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깍기 및 흙쌓기(BL.2, 5, 6)",
      "   - D/Z11T-1",
      " 2. 발파암 소할",
      "   - B/H1.0-1",
      " 3. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 4. 발파(BL.5)                [162공,  8회]",
      "   - 관리자-1, 화약주임-1, 장약공-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 가도/작업로 개설",
      "   - B/H1.0-1",
      " 2. 둑 쌓기",
      "   - B/H0.6-2",
      " 3. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 4. 발파(BL.5)                [160공,  8회]",
      "   - 관리자-1, 화약주임-1, 장약공-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2752,
        "today": 25,
        "cum": 2777
      },
      {
        "role": "하도급직원",
        "prev": 70,
        "today": 2,
        "cum": 72
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 124,
        "today": 0,
        "cum": 124
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 147,
        "today": 1,
        "cum": 148
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 41,
        "today": 1,
        "cum": 42
      },
      {
        "role": "장약공",
        "prev": 48,
        "today": 1,
        "cum": 49
      }
    ],
    "personnel_total": {
      "prev": 3309,
      "today": 30,
      "cum": 3339
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 52,
        "today": 1,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 126,
        "today": 2,
        "cum": 128
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 212,
        "today": 0,
        "cum": 212
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 187,
        "today": 0,
        "cum": 187
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 94,
        "today": 2,
        "cum": 96
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 42,
        "today": 0,
        "cum": 42
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 120,
        "today": 1,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 421,
        "today": 2,
        "cum": 423
      },
      {
        "type": "D/T",
        "prev": 399,
        "today": 0,
        "cum": 399
      },
      {
        "type": "크로라드릴",
        "prev": 94,
        "today": 2,
        "cum": 96
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 42,
        "today": 0,
        "cum": 42
      }
    ],
    "equipment_total": {
      "prev": 2802,
      "today": 5,
      "cum": 2807
    }
  },
  "2026-07-24": {
    "date": "2026-07-24",
    "weather": "맑음",
    "progress": {
      "plan": 3.5,
      "actual": 5.99,
      "diff": 171.24
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 가도/작업로 개설",
      "   - B/H1.0-1",
      " 2. 둑 쌓기",
      "   - B/H0.6-2",
      " 3. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 4. 발파(BL.5)                [160공,  8회]",
      "   - 관리자-1, 화약주임-1, 장약공-1"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2777,
        "today": 25,
        "cum": 2802
      },
      {
        "role": "하도급직원",
        "prev": 72,
        "today": 2,
        "cum": 74
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 124,
        "today": 0,
        "cum": 124
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 148,
        "today": 1,
        "cum": 149
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 42,
        "today": 1,
        "cum": 43
      },
      {
        "role": "장약공",
        "prev": 49,
        "today": 1,
        "cum": 50
      }
    ],
    "personnel_total": {
      "prev": 3339,
      "today": 30,
      "cum": 3369
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 94,
        "today": 2,
        "cum": 96
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 128,
        "today": 2,
        "cum": 130
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 212,
        "today": 0,
        "cum": 212
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 187,
        "today": 1,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 96,
        "today": 2,
        "cum": 98
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 42,
        "today": 0,
        "cum": 42
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 423,
        "today": 4,
        "cum": 427
      },
      {
        "type": "D/T",
        "prev": 399,
        "today": 1,
        "cum": 400
      },
      {
        "type": "크로라드릴",
        "prev": 96,
        "today": 2,
        "cum": 98
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 42,
        "today": 0,
        "cum": 42
      }
    ],
    "equipment_total": {
      "prev": 2807,
      "today": 7,
      "cum": 2814
    }
  },
  "2026-07-25": {
    "date": "2026-07-25",
    "weather": "맑음",
    "progress": {
      "plan": 3.52,
      "actual": 5.99,
      "diff": 170.0
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2802,
        "today": 2,
        "cum": 2804
      },
      {
        "role": "하도급직원",
        "prev": 74,
        "today": 0,
        "cum": 74
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 124,
        "today": 0,
        "cum": 124
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 149,
        "today": 0,
        "cum": 149
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "role": "장약공",
        "prev": 50,
        "today": 0,
        "cum": 50
      }
    ],
    "personnel_total": {
      "prev": 3369,
      "today": 2,
      "cum": 3371
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 96,
        "today": 0,
        "cum": 96
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 130,
        "today": 0,
        "cum": 130
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 212,
        "today": 0,
        "cum": 212
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 98,
        "today": 0,
        "cum": 98
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 42,
        "today": 0,
        "cum": 42
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 427,
        "today": 0,
        "cum": 427
      },
      {
        "type": "D/T",
        "prev": 400,
        "today": 0,
        "cum": 400
      },
      {
        "type": "크로라드릴",
        "prev": 98,
        "today": 0,
        "cum": 98
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 42,
        "today": 0,
        "cum": 42
      }
    ],
    "equipment_total": {
      "prev": 2814,
      "today": 0,
      "cum": 2814
    }
  },
  "2026-07-26": {
    "date": "2026-07-26",
    "weather": "맑음",
    "progress": {
      "plan": 3.55,
      "actual": 5.99,
      "diff": 168.78
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 흙깍기 및 흙쌓기(BL.13)",
      "   - B/H380-1, D/T15-3",
      " 2. 정지작업 및 비다짐 성토(BL.13)",
      "   - B/H0.6-2, 진동롤러-1",
      " 3. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 4. 발파(BL.5)                [143공,  7회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 침사지 준설 및 설치",
      "   - B/H1.0-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2804,
        "today": 2,
        "cum": 2806
      },
      {
        "role": "하도급직원",
        "prev": 74,
        "today": 0,
        "cum": 74
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 124,
        "today": 0,
        "cum": 124
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 149,
        "today": 0,
        "cum": 149
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "role": "장약공",
        "prev": 50,
        "today": 0,
        "cum": 50
      }
    ],
    "personnel_total": {
      "prev": 3371,
      "today": 2,
      "cum": 3373
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 96,
        "today": 0,
        "cum": 96
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 130,
        "today": 0,
        "cum": 130
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 212,
        "today": 0,
        "cum": 212
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 98,
        "today": 0,
        "cum": 98
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 42,
        "today": 0,
        "cum": 42
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 427,
        "today": 0,
        "cum": 427
      },
      {
        "type": "D/T",
        "prev": 400,
        "today": 0,
        "cum": 400
      },
      {
        "type": "크로라드릴",
        "prev": 98,
        "today": 0,
        "cum": 98
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 42,
        "today": 0,
        "cum": 42
      }
    ],
    "equipment_total": {
      "prev": 2814,
      "today": 0,
      "cum": 2814
    }
  },
  "2026-07-27": {
    "date": "2026-07-27",
    "weather": "맑음",
    "progress": {
      "plan": 3.57,
      "actual": 5.99,
      "diff": 167.57
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 흙깍기 및 흙쌓기(BL.13)",
      "   - B/H380-1, D/T15-3",
      " 2. 정지작업 및 비다짐 성토(BL.13)",
      "   - B/H0.6-1, 진동롤러-1",
      " 3. 가도개설 및 사면 둑쌓기(BL.5)",
      "   - B/H0.6-1",
      " 4. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 5. 발파(BL.5)                [143공,  7회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 기존 침사지 준설 및 신규 침사지 설치(은탄리 802-36)",
      "   - B/H1.0-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 정지작업 및 노면정리(BL.13)",
      "   - 진동롤러-1",
      " 2. 가도개설 및 사면 둑쌓기(은탄리 852)",
      "   - B/H0.6-1",
      " 3. 가도개설 및 사면 둑쌓기(BL.5)",
      "   - B/H0.6-1",
      " 4. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 5. 발파(BL.5)                [146공,  7회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 침사지 설치(은탄리 802-36)",
      "   - B/H1.0-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2806,
        "today": 25,
        "cum": 2831
      },
      {
        "role": "하도급직원",
        "prev": 74,
        "today": 4,
        "cum": 78
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 124,
        "today": 0,
        "cum": 124
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 149,
        "today": 1,
        "cum": 150
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 43,
        "today": 1,
        "cum": 44
      },
      {
        "role": "장약공",
        "prev": 50,
        "today": 1,
        "cum": 51
      }
    ],
    "personnel_total": {
      "prev": 3373,
      "today": 32,
      "cum": 3405
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 96,
        "today": 2,
        "cum": 98
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 130,
        "today": 2,
        "cum": 132
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 42,
        "today": 1,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 212,
        "today": 3,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 98,
        "today": 2,
        "cum": 100
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 42,
        "today": 1,
        "cum": 43
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 427,
        "today": 5,
        "cum": 432
      },
      {
        "type": "D/T",
        "prev": 400,
        "today": 3,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 98,
        "today": 2,
        "cum": 100
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 42,
        "today": 1,
        "cum": 43
      }
    ],
    "equipment_total": {
      "prev": 2814,
      "today": 11,
      "cum": 2825
    }
  },
  "2026-07-28": {
    "date": "2026-07-28",
    "weather": "맑음",
    "progress": {
      "plan": 3.6,
      "actual": 5.99,
      "diff": 166.38
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 정지작업 및 노면정리(BL.13)",
      "   - 진동롤러-1",
      " 2. 가도개설 및 사면 둑쌓기(은탄리 852)",
      "   - B/H0.6-1",
      " 3. 가도개설 및 사면 둑쌓기(BL.5)",
      "   - B/H0.6-1",
      " 4. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 5. 발파(BL.5)                [146공,  7회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 침사지 설치(은탄리 802-36)",
      "   - B/H1.0-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 가도개설 및 사면 둑쌓기(은탄리 852)",
      "   - B/H0.6-1",
      " 2. 가도개설 및 사면 둑쌓기(BL.5)",
      "   - B/H0.6-1",
      " 3. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 4. 발파(BL.5)                [160공,  8회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 침사지 설치(은탄리 802-36)",
      "   - B/H1.0-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2831,
        "today": 25,
        "cum": 2856
      },
      {
        "role": "하도급직원",
        "prev": 78,
        "today": 3,
        "cum": 81
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 124,
        "today": 0,
        "cum": 124
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 150,
        "today": 1,
        "cum": 151
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 44,
        "today": 1,
        "cum": 45
      },
      {
        "role": "장약공",
        "prev": 51,
        "today": 1,
        "cum": 52
      }
    ],
    "personnel_total": {
      "prev": 3405,
      "today": 31,
      "cum": 3436
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 98,
        "today": 2,
        "cum": 100
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 132,
        "today": 2,
        "cum": 134
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 100,
        "today": 2,
        "cum": 102
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 43,
        "today": 1,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 432,
        "today": 4,
        "cum": 436
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 100,
        "today": 2,
        "cum": 102
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 43,
        "today": 1,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2825,
      "today": 7,
      "cum": 2832
    }
  },
  "2026-07-29": {
    "date": "2026-07-29",
    "weather": "맑음",
    "progress": {
      "plan": 3.62,
      "actual": 5.99,
      "diff": 165.21
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 가도개설 및 사면 둑쌓기(은탄리 852)",
      "   - B/H0.6-1",
      " 2. 가도개설 및 사면 둑쌓기(BL.5)",
      "   - B/H0.6-1",
      " 3. 발파암 천공 및 작업면 평탄화(BL.5)",
      "   - 천공기-2, B/H1.0-1, 신호수-1",
      " 4. 발파(BL.5)                [160공,  8회]",
      "   - 관리자-1, 화약주임-1, 장약공-1",
      "◆부대공",
      " 1. 침사지 설치(은탄리 802-36)",
      "   - B/H1.0-1",
      "◆폐기물처리용역",
      " 1. 폐기물 반출",
      "   - 폐콘크리트 4대",
      "◆기타",
      " 1. 주간공정회의",
      " 2. 벌개제근 및 집목 작업(벌목공사)",
      "   - B/H0.6-1, B/H0.2-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 가도개설 및 사면 둑쌓기(은탄리 852)",
      "   - B/H0.6-1",
      " 2. 가도개설 및 사면 둑쌓기(BL.5)",
      "   - B/H0.6-1",
      " 3. 발파암 소할(BL.5)",
      "   - 관리자-2, B/H1.0-1",
      "◆부대공",
      " 1. 침사지 설치(은탄리 802-36)",
      "   - B/H1.0-1, B/H0.2-1, 보통인부-4",
      "◆기타",
      " 1. 벌개제근 및 집목 작업(벌목공사)",
      "   - B/H0.6-1, B/H0.2-1, D/T15-2"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2856,
        "today": 25,
        "cum": 2881
      },
      {
        "role": "하도급직원",
        "prev": 81,
        "today": 4,
        "cum": 85
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 124,
        "today": 0,
        "cum": 124
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 151,
        "today": 1,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 45,
        "today": 1,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 52,
        "today": 1,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3436,
      "today": 32,
      "cum": 3468
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 0,
        "cum": 44
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 100,
        "today": 2,
        "cum": 102
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 134,
        "today": 2,
        "cum": 136
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 102,
        "today": 2,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 436,
        "today": 4,
        "cum": 440
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 102,
        "today": 2,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2832,
      "today": 6,
      "cum": 2838
    }
  },
  "2026-07-30": {
    "date": "2026-07-30",
    "weather": "맑음",
    "progress": {
      "plan": 3.65,
      "actual": 5.99,
      "diff": 164.06
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 가도개설 및 사면 둑쌓기(은탄리 852)",
      "   - B/H0.6-1",
      " 2. 가도개설 및 사면 둑쌓기(BL.5)",
      "   - B/H0.6-1",
      " 3. 발파암 소할(BL.5)",
      "   - 관리자-2, B/H1.0-1",
      "◆부대공",
      " 1. 침사지 설치(은탄리 802-36)",
      "   - B/H1.0-1, B/H0.2-1, 보통인부-4",
      "◆기타",
      " 1. 벌개제근 및 집목 작업(벌목공사)",
      "   - B/H0.6-1, B/H0.2-1, D/T15-2"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 발파암 소할(BL.5)",
      "   - 관리자-2, B/H1.0-1",
      " 2. 사면 소단 다이크 설치(BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 침사지 설치(은탄리 802-36)",
      "   - B/H0.2-1, 보통인부-4",
      "◆기타",
      " 1. 벌개제근 및 집목 작업(벌목공사)",
      "   - B/H0.6-1, B/H0.2-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2881,
        "today": 25,
        "cum": 2906
      },
      {
        "role": "하도급직원",
        "prev": 85,
        "today": 4,
        "cum": 89
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 124,
        "today": 4,
        "cum": 128
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3468,
      "today": 33,
      "cum": 3501
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 44,
        "today": 1,
        "cum": 45
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 102,
        "today": 2,
        "cum": 104
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 136,
        "today": 2,
        "cum": 138
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 440,
        "today": 5,
        "cum": 445
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2838,
      "today": 5,
      "cum": 2843
    }
  },
  "2026-07-31": {
    "date": "2026-07-31",
    "weather": "맑음",
    "progress": {
      "plan": 3.68,
      "actual": 5.99,
      "diff": 162.92
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 발파암 소할(BL.5)",
      "   - 관리자-2, B/H1.0-1",
      " 2. 사면 소단 다이크 설치(BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 침사지 설치(은탄리 802-36)",
      "   - B/H0.2-1, 보통인부-4",
      "◆기타",
      " 1. 벌개제근 및 원목반출(벌목공사)",
      "   - B/H0.6-1, B/H0.2-1"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2906,
        "today": 25,
        "cum": 2931
      },
      {
        "role": "하도급직원",
        "prev": 89,
        "today": 4,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 128,
        "today": 4,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3501,
      "today": 33,
      "cum": 3534
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 45,
        "today": 1,
        "cum": 46
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 138,
        "today": 1,
        "cum": 139
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 445,
        "today": 2,
        "cum": 447
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2843,
      "today": 2,
      "cum": 2845
    }
  },
  "2026-08-01": {
    "date": "2026-08-01",
    "weather": "맑음",
    "progress": {
      "plan": 3.7,
      "actual": 5.99,
      "diff": 161.8
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2931,
        "today": 2,
        "cum": 2933
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3534,
      "today": 2,
      "cum": 3536
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 139,
        "today": 0,
        "cum": 139
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 447,
        "today": 0,
        "cum": 447
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2845,
      "today": 0,
      "cum": 2845
    }
  },
  "2026-08-02": {
    "date": "2026-08-02",
    "weather": "맑음",
    "progress": {
      "plan": 3.73,
      "actual": 5.99,
      "diff": 160.69
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면정리 및 소단 다이크 설치(중로(집)3-14)",
      "   - B/H1.0-1",
      "2. 작업로 설치 및 기존구조물 깨기",
      "   - B/H0.6-1",
      "◆기타",
      "1. 벌개제근, 임목적재 및 운반",
      "   - B/H0.6-1, B/H0.2-1, D/T15-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2933,
        "today": 2,
        "cum": 2935
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3536,
      "today": 2,
      "cum": 3538
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 139,
        "today": 0,
        "cum": 139
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 447,
        "today": 0,
        "cum": 447
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2845,
      "today": 0,
      "cum": 2845
    }
  },
  "2026-08-03": {
    "date": "2026-08-03",
    "weather": "맑음",
    "progress": {
      "plan": 3.75,
      "actual": 5.99,
      "diff": 159.6
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면정리 및 소단 다이크 설치 (중로(집)3-14)",
      "   - B/H1.0-1",
      "2. 작업로 설치 및 기존구조물 깨기 (BL.23)",
      "   - B/H0.6-1",
      "◆기타",
      "1. 벌개제근, 임목적재 및 운반 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1, B/H0.2-1, D/T15-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면정리 및 소단 다이크 설치 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근, 임목적재 및 운반 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1, B/H0.2-1, D/T15-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2935,
        "today": 22,
        "cum": 2957
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3538,
      "today": 22,
      "cum": 3560
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 104,
        "today": 1,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 139,
        "today": 1,
        "cum": 140
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 447,
        "today": 2,
        "cum": 449
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2845,
      "today": 2,
      "cum": 2847
    }
  },
  "2026-08-04": {
    "date": "2026-08-04",
    "weather": "맑음",
    "progress": {
      "plan": 3.78,
      "actual": 5.99,
      "diff": 158.52
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면정리 및 소단 다이크 설치 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근, 임목적재 및 운반 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1, B/H0.2-1, D/T15-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 발파암 소할 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근, 임목적재 및 운반 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1, B/H0.2-1",
      "2. 주간공정회의"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2957,
        "today": 20,
        "cum": 2977
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3560,
      "today": 20,
      "cum": 3580
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 140,
        "today": 1,
        "cum": 141
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 449,
        "today": 1,
        "cum": 450
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2847,
      "today": 1,
      "cum": 2848
    }
  },
  "2026-08-05": {
    "date": "2026-08-05",
    "weather": "맑음",
    "progress": {
      "plan": 3.8,
      "actual": 5.99,
      "diff": 157.46
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 토공 작업 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근 및 집토 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1, B/H0.2-1",
      "2. 주간공정회의"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 토공 작업 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근 및 뿌리파쇄 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2977,
        "today": 20,
        "cum": 2997
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3580,
      "today": 20,
      "cum": 3600
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 141,
        "today": 1,
        "cum": 142
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 450,
        "today": 1,
        "cum": 451
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2848,
      "today": 1,
      "cum": 2849
    }
  },
  "2026-08-06": {
    "date": "2026-08-06",
    "weather": "맑음",
    "progress": {
      "plan": 3.83,
      "actual": 5.99,
      "diff": 156.41
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근 및 뿌리쪼개기 (BL.22, 벌목공사)",
      "   - B/H0.6-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근 및 뿌리쪼개기 (BL.22, 벌목공사)",
      "   - B/H0.6-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 2997,
        "today": 21,
        "cum": 3018
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3600,
      "today": 21,
      "cum": 3621
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 142,
        "today": 1,
        "cum": 143
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 451,
        "today": 1,
        "cum": 452
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2849,
      "today": 1,
      "cum": 2850
    }
  },
  "2026-08-07": {
    "date": "2026-08-07",
    "weather": "맑음",
    "progress": {
      "plan": 3.86,
      "actual": 5.99,
      "diff": 155.38
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      " 1. 벌개제근 및 뿌리쪼개기 (BL.22, 벌목공사)",
      "   - B/H0.6-1",
      " 2. 하천 하상정리 (은탄리802-84, 민원사항)",
      "   - B/H0.2-1"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3018,
        "today": 22,
        "cum": 3040
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3621,
      "today": 22,
      "cum": 3643
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 46,
        "today": 1,
        "cum": 47
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 143,
        "today": 1,
        "cum": 144
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 452,
        "today": 2,
        "cum": 454
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2850,
      "today": 2,
      "cum": 2852
    }
  },
  "2026-08-08": {
    "date": "2026-08-08",
    "weather": "맑음",
    "progress": {
      "plan": 3.88,
      "actual": 5.99,
      "diff": 154.36
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3040,
        "today": 2,
        "cum": 3042
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3643,
      "today": 2,
      "cum": 3645
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 47,
        "today": 0,
        "cum": 47
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 144,
        "today": 0,
        "cum": 144
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 454,
        "today": 0,
        "cum": 454
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2852,
      "today": 0,
      "cum": 2852
    }
  },
  "2026-08-09": {
    "date": "2026-08-09",
    "weather": "맑음",
    "progress": {
      "plan": 3.91,
      "actual": 5.99,
      "diff": 153.35
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3042,
        "today": 2,
        "cum": 3044
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3645,
      "today": 2,
      "cum": 3647
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 47,
        "today": 0,
        "cum": 47
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 144,
        "today": 0,
        "cum": 144
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 454,
        "today": 0,
        "cum": 454
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2852,
      "today": 0,
      "cum": 2852
    }
  },
  "2026-08-10": {
    "date": "2026-08-10",
    "weather": "맑음",
    "progress": {
      "plan": 3.94,
      "actual": 5.99,
      "diff": 151.98
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 뿌리쪼개기 (BL.22, 벌목공사)",
      "   - B/H0.6-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3044,
        "today": 21,
        "cum": 3065
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3647,
      "today": 21,
      "cum": 3668
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 47,
        "today": 0,
        "cum": 47
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 144,
        "today": 1,
        "cum": 145
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 454,
        "today": 1,
        "cum": 455
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2852,
      "today": 1,
      "cum": 2853
    }
  },
  "2026-08-11": {
    "date": "2026-08-11",
    "weather": "맑음",
    "progress": {
      "plan": 3.98,
      "actual": 5.99,
      "diff": 150.62
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      " 1. 주간공정회의"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3065,
        "today": 23,
        "cum": 3088
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3668,
      "today": 23,
      "cum": 3691
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 47,
        "today": 0,
        "cum": 47
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 145,
        "today": 1,
        "cum": 146
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 455,
        "today": 1,
        "cum": 456
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2853,
      "today": 1,
      "cum": 2854
    }
  },
  "2026-08-12": {
    "date": "2026-08-12",
    "weather": "맑음",
    "progress": {
      "plan": 4.01,
      "actual": 5.99,
      "diff": 149.3
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      " 1. 주간공정회의",
      " 2. 진천군의회 및 진천군청 기업지원과 현장 방문",
      " 3. 온열질환 및 혹서기 대비 점검 (산업안전보건공단)"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3088,
        "today": 21,
        "cum": 3109
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3691,
      "today": 21,
      "cum": 3712
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 47,
        "today": 0,
        "cum": 47
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 146,
        "today": 1,
        "cum": 147
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 456,
        "today": 1,
        "cum": 457
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2854,
      "today": 1,
      "cum": 2855
    }
  },
  "2026-08-13": {
    "date": "2026-08-13",
    "weather": "맑음",
    "progress": {
      "plan": 4.05,
      "actual": 5.99,
      "diff": 147.99
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3109,
        "today": 19,
        "cum": 3128
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3712,
      "today": 19,
      "cum": 3731
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 47,
        "today": 0,
        "cum": 47
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 147,
        "today": 1,
        "cum": 148
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 457,
        "today": 1,
        "cum": 458
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1668,
        "today": 0,
        "cum": 1668
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 2855,
      "today": 1,
      "cum": 2856
    }
  },
  "2026-08-14": {
    "date": "2026-08-14",
    "weather": "흐림",
    "progress": {
      "plan": 4.09,
      "actual": 5.99,
      "diff": 146.71
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3128,
        "today": 19,
        "cum": 3147
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3731,
      "today": 19,
      "cum": 3750
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 47,
        "today": 0,
        "cum": 47
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 148,
        "today": 1,
        "cum": 149
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 458,
        "today": 1,
        "cum": 459
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1188,
      "today": 1,
      "cum": 1189
    }
  },
  "2026-08-15": {
    "date": "2026-08-15",
    "weather": "흐림",
    "progress": {
      "plan": 4.12,
      "actual": 5.99,
      "diff": 145.45
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3147,
        "today": 2,
        "cum": 3149
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3750,
      "today": 2,
      "cum": 3752
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 47,
        "today": 0,
        "cum": 47
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 149,
        "today": 0,
        "cum": 149
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 459,
        "today": 0,
        "cum": 459
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1189,
      "today": 0,
      "cum": 1189
    }
  },
  "2026-08-16": {
    "date": "2026-08-16",
    "weather": "비",
    "progress": {
      "plan": 4.16,
      "actual": 6.0,
      "diff": 144.21
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3149,
        "today": 2,
        "cum": 3151
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3752,
      "today": 2,
      "cum": 3754
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 47,
        "today": 0,
        "cum": 47
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 149,
        "today": 0,
        "cum": 149
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 459,
        "today": 0,
        "cum": 459
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1189,
      "today": 0,
      "cum": 1189
    }
  },
  "2026-08-17": {
    "date": "2026-08-17",
    "weather": "흐림",
    "progress": {
      "plan": 4.19,
      "actual": 6.0,
      "diff": 142.99
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 나무 집목 및 임목폐기물 정리 (BL.3, 5)",
      "   - B/H0.2-1, B/H0.6-1",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수",
      "   - 살수차-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3151,
        "today": 9,
        "cum": 3160
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3754,
      "today": 9,
      "cum": 3763
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 47,
        "today": 0,
        "cum": 47
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 0,
        "cum": 105
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 149,
        "today": 0,
        "cum": 149
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 459,
        "today": 0,
        "cum": 459
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 0,
        "cum": 58
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1189,
      "today": 0,
      "cum": 1189
    }
  },
  "2026-08-18": {
    "date": "2026-08-18",
    "weather": "맑음",
    "progress": {
      "plan": 4.23,
      "actual": 6.0,
      "diff": 141.8
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 나무 집목 및 임목폐기물 정리 (BL.3, 5)",
      "   - B/H0.2-1, B/H0.6-1",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수",
      "   - 살수차-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 나무 집목 및 임목폐기물 운반 (BL.2)",
      "   - B/H0.2-1, B/H0.6-1, D/T15-1",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      " 4. 침사지 난간설치 및 작업로(임목파쇄장) 정지작업",
      "   - B/H0.2-1, 보통인부-1",
      "◆부대공",
      " 1. 현장살수",
      "   - 살수차-1",
      "◆기타",
      " 1. 주간공정회의"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3160,
        "today": 20,
        "cum": 3180
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3763,
      "today": 20,
      "cum": 3783
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 47,
        "today": 1,
        "cum": 48
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 105,
        "today": 1,
        "cum": 106
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 0,
        "today": 1,
        "cum": 1
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 149,
        "today": 1,
        "cum": 150
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 0,
        "cum": 215
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 58,
        "today": 1,
        "cum": 59
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 0,
        "today": 1,
        "cum": 1
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 459,
        "today": 4,
        "cum": 463
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 0,
        "cum": 403
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 58,
        "today": 1,
        "cum": 59
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 0,
        "today": 1,
        "cum": 1
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1189,
      "today": 6,
      "cum": 1195
    }
  },
  "2026-08-19": {
    "date": "2026-08-19",
    "weather": "맑음",
    "progress": {
      "plan": 4.26,
      "actual": 6.0,
      "diff": 140.62
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 나무 집목 및 임목폐기물 운반 (BL.2)",
      "   - B/H0.2-1, B/H0.6-1, D/T15-2",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수",
      "   - 살수차-1",
      "◆기타",
      " 1. 주간공정회의",
      " 2. 침사지 난간설치 및 작업로(임목파쇄장) 정지작업",
      "   - B/H0.2-1, 보통인부-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 나무 집목 및 임목폐기물 운반 (BL.2)",
      "   - B/H0.2-1, B/H0.6-1, D/T15-2",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      " 4. 작업로 토공 정지 작업 (BL.22)",
      "   - B/H0.2-1",
      "◆부대공",
      " 1. 현장살수",
      "   - 살수차-1",
      "◆기타",
      " 1. 침사지 안전 난간 설치 (BL.13)"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3180,
        "today": 21,
        "cum": 3201
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 132,
        "today": 1,
        "cum": 133
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3783,
      "today": 22,
      "cum": 3805
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 48,
        "today": 2,
        "cum": 50
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 106,
        "today": 1,
        "cum": 107
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 1,
        "today": 1,
        "cum": 2
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 150,
        "today": 1,
        "cum": 151
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 215,
        "today": 2,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 59,
        "today": 1,
        "cum": 60
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 1,
        "today": 1,
        "cum": 2
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 463,
        "today": 5,
        "cum": 468
      },
      {
        "type": "D/T",
        "prev": 403,
        "today": 2,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 59,
        "today": 1,
        "cum": 60
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 1,
        "today": 1,
        "cum": 2
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1195,
      "today": 9,
      "cum": 1204
    }
  },
  "2026-08-20": {
    "date": "2026-08-20",
    "weather": "흐림",
    "progress": {
      "plan": 4.3,
      "actual": 6.0,
      "diff": 139.47
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 벌개제근 및 뿌리쪼개기 (BL.2)",
      "   - B/H0.2-1, B/H0.6-1",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      " 4. 작업로 토공 정지 작업 (BL.22)",
      "   - B/H0.2-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 침사지 안전 난간 설치 (BL.13)"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 침사지 안전 난간 설치 (BL.13)",
      "   - 보통인부-4"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3201,
        "today": 21,
        "cum": 3222
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 133,
        "today": 0,
        "cum": 133
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3805,
      "today": 21,
      "cum": 3826
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 50,
        "today": 2,
        "cum": 52
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 107,
        "today": 1,
        "cum": 108
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 2,
        "today": 1,
        "cum": 3
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 151,
        "today": 1,
        "cum": 152
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 60,
        "today": 1,
        "cum": 61
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 2,
        "today": 1,
        "cum": 3
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 468,
        "today": 5,
        "cum": 473
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 60,
        "today": 1,
        "cum": 61
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 2,
        "today": 1,
        "cum": 3
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1204,
      "today": 7,
      "cum": 1211
    }
  },
  "2026-08-21": {
    "date": "2026-08-21",
    "weather": "비",
    "progress": {
      "plan": 4.34,
      "actual": 6.01,
      "diff": 138.67
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 우천으로 인한 작업 없음"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3222,
        "today": 21,
        "cum": 3243
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 133,
        "today": 0,
        "cum": 133
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3826,
      "today": 21,
      "cum": 3847
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 52,
        "today": 0,
        "cum": 52
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 108,
        "today": 0,
        "cum": 108
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 3,
        "today": 0,
        "cum": 3
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 61,
        "today": 0,
        "cum": 61
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 3,
        "today": 0,
        "cum": 3
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 473,
        "today": 0,
        "cum": 473
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 61,
        "today": 0,
        "cum": 61
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 3,
        "today": 0,
        "cum": 3
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1211,
      "today": 0,
      "cum": 1211
    }
  },
  "2026-08-22": {
    "date": "2026-08-22",
    "weather": "흐림",
    "progress": {
      "plan": 4.37,
      "actual": 6.01,
      "diff": 137.55
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3243,
        "today": 2,
        "cum": 3245
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 133,
        "today": 0,
        "cum": 133
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3847,
      "today": 2,
      "cum": 3849
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 52,
        "today": 0,
        "cum": 52
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 108,
        "today": 0,
        "cum": 108
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 3,
        "today": 0,
        "cum": 3
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 61,
        "today": 0,
        "cum": 61
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 3,
        "today": 0,
        "cum": 3
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 473,
        "today": 0,
        "cum": 473
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 61,
        "today": 0,
        "cum": 61
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 3,
        "today": 0,
        "cum": 3
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1211,
      "today": 0,
      "cum": 1211
    }
  },
  "2026-08-23": {
    "date": "2026-08-23",
    "weather": "흐림",
    "progress": {
      "plan": 4.41,
      "actual": 6.01,
      "diff": 136.44
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 침사지 및 가배수로 정비(BL.2, BL.13)",
      "   - B/H1.0-1",
      " 2. 토사유실 방지 사면 천막 보수 작업",
      "   - 보통인부-4"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3245,
        "today": 2,
        "cum": 3247
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 0,
        "cum": 127
      },
      {
        "role": "보통인부",
        "prev": 133,
        "today": 0,
        "cum": 133
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3849,
      "today": 2,
      "cum": 3851
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 52,
        "today": 0,
        "cum": 52
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 108,
        "today": 0,
        "cum": 108
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 3,
        "today": 0,
        "cum": 3
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 61,
        "today": 0,
        "cum": 61
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 3,
        "today": 0,
        "cum": 3
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 473,
        "today": 0,
        "cum": 473
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 61,
        "today": 0,
        "cum": 61
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 3,
        "today": 0,
        "cum": 3
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1211,
      "today": 0,
      "cum": 1211
    }
  },
  "2026-08-24": {
    "date": "2026-08-24",
    "weather": "맑음",
    "progress": {
      "plan": 4.44,
      "actual": 6.01,
      "diff": 135.37
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 침사지 및 가배수로 정비(BL.2, BL.13)",
      "   - B/H1.0-1",
      " 2. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-4"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.22)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 법면정리 및 가배수로 터파기(BL.2, BL.13)",
      "   - B/H1.0-1",
      " 2. 하천 준설(민원)",
      "   - B/H0.2-1",
      " 3. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-4"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3247,
        "today": 22,
        "cum": 3269
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 127,
        "today": 1,
        "cum": 128
      },
      {
        "role": "보통인부",
        "prev": 133,
        "today": 4,
        "cum": 137
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3851,
      "today": 27,
      "cum": 3878
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 52,
        "today": 0,
        "cum": 52
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 108,
        "today": 0,
        "cum": 108
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 3,
        "today": 1,
        "cum": 4
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 152,
        "today": 1,
        "cum": 153
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 61,
        "today": 1,
        "cum": 62
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 3,
        "today": 1,
        "cum": 4
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 473,
        "today": 2,
        "cum": 475
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 61,
        "today": 1,
        "cum": 62
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 3,
        "today": 1,
        "cum": 4
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1211,
      "today": 4,
      "cum": 1215
    }
  },
  "2026-08-25": {
    "date": "2026-08-25",
    "weather": "흐림",
    "progress": {
      "plan": 4.48,
      "actual": 6.03,
      "diff": 134.62
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.22)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 가배수로 터파기(중로(집)3-16, BL.2, BL.13)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 하천 준설(은탄리 802-84, 민원사항)",
      "   - B/H0.2-1",
      " 2. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-4",
      " 3. 기술지원기술인 정기점검"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.22)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 가배수로 정리(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-4",
      " 2. 주간공정회의",
      " 3. 관리감독자 교육(안전)",
      " 4. 근로자 정기교육(안전)"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3269,
        "today": 24,
        "cum": 3293
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 128,
        "today": 1,
        "cum": 129
      },
      {
        "role": "보통인부",
        "prev": 137,
        "today": 4,
        "cum": 141
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3878,
      "today": 29,
      "cum": 3907
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 52,
        "today": 1,
        "cum": 53
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 108,
        "today": 1,
        "cum": 109
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 4,
        "today": 1,
        "cum": 5
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 153,
        "today": 1,
        "cum": 154
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 62,
        "today": 1,
        "cum": 63
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 4,
        "today": 1,
        "cum": 5
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 475,
        "today": 4,
        "cum": 479
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 62,
        "today": 1,
        "cum": 63
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 4,
        "today": 1,
        "cum": 5
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1215,
      "today": 6,
      "cum": 1221
    }
  },
  "2026-08-26": {
    "date": "2026-08-26",
    "weather": "맑음",
    "progress": {
      "plan": 4.51,
      "actual": 6.03,
      "diff": 133.63
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 가배수로 정리(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-4",
      " 2. 주간공정회의",
      " 3. 관리감독자 교육(안전)",
      " 4. 근로자 정기교육(안전)"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 표토제거(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-3"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3293,
        "today": 23,
        "cum": 3316
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 129,
        "today": 1,
        "cum": 130
      },
      {
        "role": "보통인부",
        "prev": 141,
        "today": 4,
        "cum": 145
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3907,
      "today": 28,
      "cum": 3935
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 109,
        "today": 1,
        "cum": 110
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 5,
        "today": 1,
        "cum": 6
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 154,
        "today": 1,
        "cum": 155
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 63,
        "today": 1,
        "cum": 64
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 5,
        "today": 1,
        "cum": 6
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 479,
        "today": 3,
        "cum": 482
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 63,
        "today": 1,
        "cum": 64
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 5,
        "today": 1,
        "cum": 6
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1221,
      "today": 5,
      "cum": 1226
    }
  },
  "2026-08-27": {
    "date": "2026-08-27",
    "weather": "맑음",
    "progress": {
      "plan": 4.55,
      "actual": 6.03,
      "diff": 132.6
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 임목폐기물 파쇄 (BL.2)",
      "   - B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 표토제거(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-3"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 표토제거(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-3"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3316,
        "today": 22,
        "cum": 3338
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 130,
        "today": 1,
        "cum": 131
      },
      {
        "role": "보통인부",
        "prev": 145,
        "today": 3,
        "cum": 148
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3935,
      "today": 26,
      "cum": 3961
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 110,
        "today": 0,
        "cum": 110
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 6,
        "today": 1,
        "cum": 7
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 155,
        "today": 1,
        "cum": 156
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 64,
        "today": 1,
        "cum": 65
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 6,
        "today": 1,
        "cum": 7
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 482,
        "today": 2,
        "cum": 484
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 64,
        "today": 1,
        "cum": 65
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 6,
        "today": 1,
        "cum": 7
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1226,
      "today": 4,
      "cum": 1230
    }
  },
  "2026-08-28": {
    "date": "2026-08-28",
    "weather": "흐림/비",
    "progress": {
      "plan": 4.59,
      "actual": 6.04,
      "diff": 131.8
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 표토제거(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-3",
      " 2. 진천군 재해영향평가 점검",
      " 3. 우천피해복구 및 토사유실방지 작업",
      "   - B/H0.2-1"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3338,
        "today": 21,
        "cum": 3359
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 131,
        "today": 1,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 148,
        "today": 3,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3961,
      "today": 25,
      "cum": 3986
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 53,
        "today": 1,
        "cum": 54
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 110,
        "today": 1,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 7,
        "today": 1,
        "cum": 8
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 156,
        "today": 1,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 65,
        "today": 1,
        "cum": 66
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 7,
        "today": 1,
        "cum": 8
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 484,
        "today": 4,
        "cum": 488
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 65,
        "today": 1,
        "cum": 66
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 7,
        "today": 1,
        "cum": 8
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1230,
      "today": 6,
      "cum": 1236
    }
  },
  "2026-08-29": {
    "date": "2026-08-29",
    "weather": "흐림/비",
    "progress": {
      "plan": 4.62,
      "actual": 6.04,
      "diff": 130.79
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3359,
        "today": 2,
        "cum": 3361
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3986,
      "today": 2,
      "cum": 3988
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 54,
        "today": 0,
        "cum": 54
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 66,
        "today": 0,
        "cum": 66
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 488,
        "today": 0,
        "cum": 488
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 66,
        "today": 0,
        "cum": 66
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1236,
      "today": 0,
      "cum": 1236
    }
  },
  "2026-08-30": {
    "date": "2026-08-30",
    "weather": "흐림",
    "progress": {
      "plan": 4.66,
      "actual": 6.04,
      "diff": 129.8
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 우천으로 인한 작업 없음"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3361,
        "today": 2,
        "cum": 3363
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3988,
      "today": 2,
      "cum": 3990
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 54,
        "today": 0,
        "cum": 54
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 66,
        "today": 0,
        "cum": 66
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 488,
        "today": 0,
        "cum": 488
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 66,
        "today": 0,
        "cum": 66
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1236,
      "today": 0,
      "cum": 1236
    }
  },
  "2026-08-31": {
    "date": "2026-08-31",
    "weather": "비",
    "progress": {
      "plan": 4.69,
      "actual": 6.06,
      "diff": 129.04
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 우천으로 인한 작업 없음"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 우천으로 인한 작업 없음"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3363,
        "today": 23,
        "cum": 3386
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 3990,
      "today": 23,
      "cum": 4013
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 54,
        "today": 0,
        "cum": 54
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 66,
        "today": 0,
        "cum": 66
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 488,
        "today": 0,
        "cum": 488
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 66,
        "today": 0,
        "cum": 66
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1236,
      "today": 0,
      "cum": 1236
    }
  },
  "2026-09-01": {
    "date": "2026-09-01",
    "weather": "비/흐림",
    "progress": {
      "plan": 4.73,
      "actual": 6.06,
      "diff": 128.07
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 우천으로 인한 작업 없음"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 하천 준설 및 가배수로 정비 작업",
      "   - B/H0.2-1",
      " 2. 주간공정회의"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3386,
        "today": 24,
        "cum": 3410
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4013,
      "today": 24,
      "cum": 4037
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 54,
        "today": 0,
        "cum": 54
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 66,
        "today": 0,
        "cum": 66
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 488,
        "today": 0,
        "cum": 488
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 66,
        "today": 0,
        "cum": 66
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 8,
        "today": 0,
        "cum": 8
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1236,
      "today": 0,
      "cum": 1236
    }
  },
  "2026-09-02": {
    "date": "2026-09-02",
    "weather": "흐림",
    "progress": {
      "plan": 4.76,
      "actual": 6.05,
      "diff": 126.91
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 하천 준설 및 가배수로 정비 작업",
      "   - B/H0.2-1",
      " 2. 주간공정회의"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 표토제거(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3410,
        "today": 24,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4037,
      "today": 24,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 54,
        "today": 1,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 8,
        "today": 1,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 66,
        "today": 1,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 8,
        "today": 1,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 488,
        "today": 2,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 66,
        "today": 1,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 8,
        "today": 1,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1236,
      "today": 4,
      "cum": 1240
    }
  },
  "2026-09-03": {
    "date": "2026-09-03",
    "weather": "맑음",
    "progress": {
      "plan": 4.8,
      "actual": 6.05,
      "diff": 125.98
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면정리 및 소단 다이크 설치 (중로(집)3-14)",
      "   - B/H1.0-1",
      "2. 작업로 설치 및 기존구조물 깨기 (BL.23)",
      "   - B/H0.6-1",
      "◆기타",
      "1. 벌개제근, 임목적재 및 운반 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1, B/H0.2-1, D/T15-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면정리 및 소단 다이크 설치 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근, 임목적재 및 운반 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1, B/H0.2-1, D/T15-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-04": {
    "date": "2026-09-04",
    "weather": "맑음",
    "progress": {
      "plan": 4.84,
      "actual": 6.05,
      "diff": 125.06
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면정리 및 소단 다이크 설치 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근, 임목적재 및 운반 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1, B/H0.2-1, D/T15-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 발파암 소할 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근, 임목적재 및 운반 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1, B/H0.2-1",
      "2. 주간공정회의"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-05": {
    "date": "2026-09-05",
    "weather": "맑음",
    "progress": {
      "plan": 4.87,
      "actual": 6.05,
      "diff": 124.15
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 토공 작업 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근 및 집토 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1, B/H0.2-1",
      "2. 주간공정회의"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 토공 작업 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근 및 뿌리파쇄 (은탄리 산 29, 벌목공사)",
      "   - B/H0.6-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-06": {
    "date": "2026-09-06",
    "weather": "맑음",
    "progress": {
      "plan": 4.91,
      "actual": 6.05,
      "diff": 123.25
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근 및 뿌리쪼개기 (BL.22, 벌목공사)",
      "   - B/H0.6-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 벌개제근 및 뿌리쪼개기 (BL.22, 벌목공사)",
      "   - B/H0.6-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-07": {
    "date": "2026-09-07",
    "weather": "맑음",
    "progress": {
      "plan": 4.94,
      "actual": 6.05,
      "diff": 122.37
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      " 1. 벌개제근 및 뿌리쪼개기 (BL.22, 벌목공사)",
      "   - B/H0.6-1",
      " 2. 하천 하상정리 (은탄리802-84, 민원사항)",
      "   - B/H0.2-1"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-08": {
    "date": "2026-09-08",
    "weather": "맑음",
    "progress": {
      "plan": 4.98,
      "actual": 6.05,
      "diff": 121.5
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-09": {
    "date": "2026-09-09",
    "weather": "맑음",
    "progress": {
      "plan": 5.02,
      "actual": 6.05,
      "diff": 120.45
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-10": {
    "date": "2026-09-10",
    "weather": "맑음",
    "progress": {
      "plan": 5.07,
      "actual": 6.05,
      "diff": 119.41
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      "1. 뿌리쪼개기 (BL.22, 벌목공사)",
      "   - B/H0.6-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-11": {
    "date": "2026-09-11",
    "weather": "맑음",
    "progress": {
      "plan": 5.11,
      "actual": 6.05,
      "diff": 118.39
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      " 1. 주간공정회의"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-12": {
    "date": "2026-09-12",
    "weather": "맑음",
    "progress": {
      "plan": 5.15,
      "actual": 6.05,
      "diff": 117.39
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 소단 다이크 설치 및 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      "◆기타",
      " 1. 주간공정회의",
      " 2. 진천군의회 및 진천군청 기업지원과 현장 방문",
      " 3. 온열질환 및 혹서기 대비 점검 (산업안전보건공단)"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-13": {
    "date": "2026-09-13",
    "weather": "맑음",
    "progress": {
      "plan": 5.2,
      "actual": 6.05,
      "diff": 116.4
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-14": {
    "date": "2026-09-14",
    "weather": "흐림",
    "progress": {
      "plan": 5.24,
      "actual": 6.05,
      "diff": 115.43
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-15": {
    "date": "2026-09-15",
    "weather": "흐림",
    "progress": {
      "plan": 5.29,
      "actual": 6.05,
      "diff": 114.48
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-16": {
    "date": "2026-09-16",
    "weather": "비",
    "progress": {
      "plan": 5.33,
      "actual": 6.05,
      "diff": 113.54
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-17": {
    "date": "2026-09-17",
    "weather": "흐림",
    "progress": {
      "plan": 5.37,
      "actual": 6.05,
      "diff": 112.62
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 나무 집목 및 임목폐기물 정리 (BL.3, 5)",
      "   - B/H0.2-1, B/H0.6-1",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수",
      "   - 살수차-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-18": {
    "date": "2026-09-18",
    "weather": "맑음",
    "progress": {
      "plan": 5.42,
      "actual": 6.05,
      "diff": 111.71
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 나무 집목 및 임목폐기물 정리 (BL.3, 5)",
      "   - B/H0.2-1, B/H0.6-1",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수",
      "   - 살수차-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 나무 집목 및 임목폐기물 운반 (BL.2)",
      "   - B/H0.2-1, B/H0.6-1, D/T15-1",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      " 4. 침사지 난간설치 및 작업로(임목파쇄장) 정지작업",
      "   - B/H0.2-1, 보통인부-1",
      "◆부대공",
      " 1. 현장살수",
      "   - 살수차-1",
      "◆기타",
      " 1. 주간공정회의"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-19": {
    "date": "2026-09-19",
    "weather": "맑음",
    "progress": {
      "plan": 5.46,
      "actual": 6.05,
      "diff": 110.82
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 나무 집목 및 임목폐기물 운반 (BL.2)",
      "   - B/H0.2-1, B/H0.6-1, D/T15-2",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수",
      "   - 살수차-1",
      "◆기타",
      " 1. 주간공정회의",
      " 2. 침사지 난간설치 및 작업로(임목파쇄장) 정지작업",
      "   - B/H0.2-1, 보통인부-1"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 나무 집목 및 임목폐기물 운반 (BL.2)",
      "   - B/H0.2-1, B/H0.6-1, D/T15-2",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      " 4. 작업로 토공 정지 작업 (BL.22)",
      "   - B/H0.2-1",
      "◆부대공",
      " 1. 현장살수",
      "   - 살수차-1",
      "◆기타",
      " 1. 침사지 안전 난간 설치 (BL.13)"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-20": {
    "date": "2026-09-20",
    "weather": "흐림",
    "progress": {
      "plan": 5.51,
      "actual": 6.05,
      "diff": 109.94
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 벌개제근 및 뿌리쪼개기 (BL.2)",
      "   - B/H0.2-1, B/H0.6-1",
      " 3. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      " 4. 작업로 토공 정지 작업 (BL.22)",
      "   - B/H0.2-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 침사지 안전 난간 설치 (BL.13)"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 법면 정리 (중로(집)3-14)",
      "   - B/H1.0-1",
      " 2. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 침사지 안전 난간 설치 (BL.13)",
      "   - 보통인부-4"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-21": {
    "date": "2026-09-21",
    "weather": "비",
    "progress": {
      "plan": 5.55,
      "actual": 6.05,
      "diff": 109.08
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 우천으로 인한 작업 없음"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-22": {
    "date": "2026-09-22",
    "weather": "흐림",
    "progress": {
      "plan": 5.59,
      "actual": 6.05,
      "diff": 108.22
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-23": {
    "date": "2026-09-23",
    "weather": "흐림",
    "progress": {
      "plan": 5.64,
      "actual": 6.06,
      "diff": 107.39
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 침사지 및 가배수로 정비(BL.2, BL.13)",
      "   - B/H1.0-1",
      " 2. 토사유실 방지 사면 천막 보수 작업",
      "   - 보통인부-4"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-24": {
    "date": "2026-09-24",
    "weather": "맑음",
    "progress": {
      "plan": 5.68,
      "actual": 6.06,
      "diff": 106.56
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 임목폐기물 파쇄 (BL.22)",
      "   - B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 침사지 및 가배수로 정비(BL.2, BL.13)",
      "   - B/H1.0-1",
      " 2. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-4"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.22)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 법면정리 및 가배수로 터파기(BL.2, BL.13)",
      "   - B/H1.0-1",
      " 2. 하천 준설(민원)",
      "   - B/H0.2-1",
      " 3. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-4"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-25": {
    "date": "2026-09-25",
    "weather": "흐림",
    "progress": {
      "plan": 5.73,
      "actual": 6.06,
      "diff": 105.75
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.22)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 가배수로 터파기(중로(집)3-16, BL.2, BL.13)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 하천 준설(은탄리 802-84, 민원사항)",
      "   - B/H0.2-1",
      " 2. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-4",
      " 3. 기술지원기술인 정기점검"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.22)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 가배수로 정리(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-4",
      " 2. 주간공정회의",
      " 3. 관리감독자 교육(안전)",
      " 4. 근로자 정기교육(안전)"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-26": {
    "date": "2026-09-26",
    "weather": "맑음",
    "progress": {
      "plan": 5.77,
      "actual": 6.06,
      "diff": 104.95
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 가배수로 정리(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-4",
      " 2. 주간공정회의",
      " 3. 관리감독자 교육(안전)",
      " 4. 근로자 정기교육(안전)"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 표토제거(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-3"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-27": {
    "date": "2026-09-27",
    "weather": "맑음",
    "progress": {
      "plan": 5.81,
      "actual": 6.06,
      "diff": 104.16
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 임목폐기물 파쇄 (BL.2)",
      "   - B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 표토제거(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-3"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 표토제거(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-3"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-28": {
    "date": "2026-09-28",
    "weather": "흐림/비",
    "progress": {
      "plan": 5.86,
      "actual": 6.06,
      "diff": 103.39
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.6-1, B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 표토제거(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1",
      "◆기타",
      " 1. 토사유실 방지 사면 천막 보수 작업",
      "   - 작업반장-1, 보통인부-3",
      " 2. 진천군 재해영향평가 점검",
      " 3. 우천피해복구 및 토사유실방지 작업",
      "   - B/H0.2-1"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-29": {
    "date": "2026-09-29",
    "weather": "흐림/비",
    "progress": {
      "plan": 5.9,
      "actual": 6.06,
      "diff": 102.63
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-09-30": {
    "date": "2026-09-30",
    "weather": "흐림",
    "progress": {
      "plan": 5.95,
      "actual": 6.06,
      "diff": 101.87
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 설계도서 검토"
    ],
    "work_tomorrow": [
      "◆기타",
      " 1. 우천으로 인한 작업 없음"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  },
  "2026-10-01": {
    "date": "2026-10-01",
    "weather": "비",
    "progress": {
      "plan": 5.99,
      "actual": 6.06,
      "diff": 101.13
    },
    "earth": {
      "토사": {
        "design": 1507585,
        "prev": 1661,
        "today": 0,
        "cum": 1661,
        "start": "2025-02-01"
      },
      "리핑암": {
        "design": 1122283,
        "prev": 492,
        "today": 0,
        "cum": 492,
        "start": "2025-03-10"
      },
      "발파암깎기": {
        "design": 3794908,
        "prev": 428288,
        "today": 0,
        "cum": 428288,
        "start": "2025-04-05"
      },
      "흙쌓기(성토)": {
        "design": 7742307,
        "prev": 550381.1399999998,
        "today": 0,
        "cum": 550381.1399999998,
        "start": "2025-02-01"
      }
    },
    "work_today": [
      "◆기타",
      " 1. 우천으로 인한 작업 없음"
    ],
    "work_tomorrow": [
      "◆토공",
      " 1. 임목폐기물 파쇄 및 적재(BL.2)",
      "   - B/H0.8-1, 임목파쇄기-1",
      " 2. 법면정리 및 표토제거(중로(집)3-16, BL.2)",
      "   - B/H1.0-1",
      "◆부대공",
      " 1. 현장살수(임목파쇄장)",
      "   - 살수차-1"
    ],
    "personnel": [
      {
        "role": "직    원",
        "prev": 3434,
        "today": 0,
        "cum": 3434
      },
      {
        "role": "하도급직원",
        "prev": 93,
        "today": 0,
        "cum": 93
      },
      {
        "role": "작업반장",
        "prev": 132,
        "today": 0,
        "cum": 132
      },
      {
        "role": "보통인부",
        "prev": 151,
        "today": 0,
        "cum": 151
      },
      {
        "role": "형틀목공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 근 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "비 계 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "CON'C 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "포 장 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "신 호 수",
        "prev": 152,
        "today": 0,
        "cum": 152
      },
      {
        "role": "조 적 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "법면보호공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "상수도공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "면보수공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "관 로 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "용 접 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "조 경 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "전 기 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "설 비 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "보 링 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "기 능 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "철 골 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "벌 목 공",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "role": "화약주임",
        "prev": 46,
        "today": 0,
        "cum": 46
      },
      {
        "role": "장약공",
        "prev": 53,
        "today": 0,
        "cum": 53
      }
    ],
    "personnel_total": {
      "prev": 4061,
      "today": 0,
      "cum": 4061
    },
    "equipment_detail": [
      {
        "type": "D/Z",
        "spec": "3K",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "5K",
        "prev": 17,
        "today": 0,
        "cum": 17
      },
      {
        "type": "D/Z",
        "spec": "10N",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "D/Z",
        "spec": "11R",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "D/Z",
        "spec": "11T",
        "prev": 53,
        "today": 0,
        "cum": 53
      },
      {
        "type": "D/Z",
        "spec": "D1",
        "prev": 42,
        "today": 0,
        "cum": 42
      },
      {
        "type": "B/H",
        "spec": "mini",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.2",
        "prev": 55,
        "today": 0,
        "cum": 55
      },
      {
        "type": "B/H",
        "spec": "0.3",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "0.6",
        "prev": 111,
        "today": 0,
        "cum": 111
      },
      {
        "type": "B/H",
        "spec": "0.8",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "B/H",
        "spec": "1",
        "prev": 157,
        "today": 0,
        "cum": 157
      },
      {
        "type": "B/H",
        "spec": "380(1.8)",
        "prev": 43,
        "today": 0,
        "cum": 43
      },
      {
        "type": "B/H",
        "spec": "400(1.8)",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "B/H",
        "spec": "480(2.4)",
        "prev": 21,
        "today": 0,
        "cum": 21
      },
      {
        "type": "B/H",
        "spec": "500(2.4)",
        "prev": 94,
        "today": 0,
        "cum": 94
      },
      {
        "type": "D/T",
        "spec": "15t",
        "prev": 217,
        "today": 0,
        "cum": 217
      },
      {
        "type": "D/T",
        "spec": "25t",
        "prev": 188,
        "today": 0,
        "cum": 188
      },
      {
        "type": "크로라드릴",
        "spec": "1식",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "spec": "1식",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "spec": "5T",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "spec": "1식",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "spec": "1식",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "spec": "1식",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment": [
      {
        "type": "D/Z",
        "prev": 121,
        "today": 0,
        "cum": 121
      },
      {
        "type": "B/H",
        "prev": 490,
        "today": 0,
        "cum": 490
      },
      {
        "type": "D/T",
        "prev": 405,
        "today": 0,
        "cum": 405
      },
      {
        "type": "크로라드릴",
        "prev": 104,
        "today": 0,
        "cum": 104
      },
      {
        "type": "살수차",
        "prev": 67,
        "today": 0,
        "cum": 67
      },
      {
        "type": "오거",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "화물차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "지게차",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "스카이",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "임목파쇄기",
        "prev": 9,
        "today": 0,
        "cum": 9
      },
      {
        "type": "그레이더",
        "prev": 0,
        "today": 0,
        "cum": 0
      },
      {
        "type": "진동로라",
        "prev": 44,
        "today": 0,
        "cum": 44
      }
    ],
    "equipment_total": {
      "prev": 1240,
      "today": 0,
      "cum": 1240
    }
  }
};
