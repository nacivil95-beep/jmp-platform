/**
 * 안전/보건팀 유해위험작업 데이터 (날짜별)
 * 생성 스크립트: extract_safety.py
 * '데이터관리/안전팀' 폴더의 '유해위험작업_YYYYMMDD.xlsx' 파일들을 읽어 날짜별로 모읍니다.
 * 새로 추가되거나 수정된 파일만 다시 읽고, 그 외 과거 날짜는 이전 결과를 그대로 유지합니다.
 * 원본 엑셀에 있는 행 순서 그대로, 전부 표시합니다 (점검차수별로 여러 줄이어도 각각 별개 항목입니다).
 * 노출 항목: 작업일자, 업체명, 등급, 작업명, 작업장소, 작업상태 (그 외 항목은 원본에만 있고 여기엔 없음)
 */
let SAFETY_DATA = {
  "2026-07-31": [
    {
      "company": "토우산업(주)",
      "date": "2026-07-31",
      "grade": "일상A",
      "location": "BL.2,5,13, 중로(집)3-14",
      "status": "작업승인",
      "work_name": "법면정리, 가도개설, 소할, 침사지설치, 단부 소단다이크설치"
    },
    {
      "company": "토우산업(주)",
      "date": "2026-07-31",
      "grade": "일상A",
      "location": "BL.2,5,13, 중로(집)3-14",
      "status": "작업승인",
      "work_name": "법면정리, 가도개설, 소할, 침사지설치, 단부 소단다이크설치"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-07-31",
      "grade": "일상A",
      "location": "BL.13",
      "status": "작업승인",
      "work_name": "침사지 설치  작업"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-07-31",
      "grade": "일상A",
      "location": "BL.13",
      "status": "작업승인",
      "work_name": "침사지 설치  작업"
    },
    {
      "company": "(주)승원건설 발파 채석",
      "date": "2026-07-31",
      "grade": "일상A",
      "location": "5BL",
      "status": "작업승인",
      "work_name": "발파암 소할작업"
    }
  ],
  "2026-08-03": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-04",
      "grade": "일상",
      "location": "BL.2,5,중로(집)3-14",
      "status": "작업승인",
      "work_name": "법면정리, 소할"
    }
  ],
  "2026-08-11": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-12",
      "grade": "일상",
      "location": "BL.2,5,중로(집)3-14",
      "status": "작업승인",
      "work_name": "법면정리, 소할"
    }
  ],
  "2026-08-13": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-13",
      "grade": "일상",
      "location": "BL.2,5,중로(집)3-14",
      "status": "작업승인",
      "work_name": "법면정리, 소할"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-13",
      "grade": "일상",
      "location": "BL03,05",
      "status": "작업승인",
      "work_name": "나무 집목 및 임목폐기물 운반"
    }
  ],
  "2026-08-14": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-14",
      "grade": "일상",
      "location": "BL.2,5,중로(집)3-14",
      "status": "작업승인",
      "work_name": "법면정리, 소할"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-14",
      "grade": "일상",
      "location": "BL03,05",
      "status": "작업승인",
      "work_name": "나무 집목 및 임목폐기물 운반"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-14",
      "grade": "일상A",
      "location": "BL.22 / BL.24",
      "status": "작업승인",
      "work_name": "임목 폐기물 파쇄"
    }
  ],
  "2026-08-19": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-19",
      "grade": "일상A",
      "location": "BL.2,5,13,22,중로(집)3-14",
      "status": "작업승인",
      "work_name": "법면정리, 소할, 작업로 정지(성토)"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-19",
      "grade": "일상",
      "location": "BL03,05",
      "status": "작업승인",
      "work_name": "나무 집목 및 임목폐기물 운반"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-19",
      "grade": "일상A",
      "location": "BL.22 / BL.24",
      "status": "작업승인",
      "work_name": "임목 폐기물 파쇄"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-19",
      "grade": "일상",
      "location": "현장 내 전구역",
      "status": "작업승인",
      "work_name": "살수차 작업"
    }
  ],
  "2026-08-20": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-20",
      "grade": "일상",
      "location": "BL.2,5,13,22,중로(집)3-14",
      "status": "작업승인",
      "work_name": "법면정리, 소할"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-20",
      "grade": "일상",
      "location": "BL03,05",
      "status": "작업승인",
      "work_name": "나무 집목 및 임목폐기물 운반"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-20",
      "grade": "일상A",
      "location": "BL.22 / BL.24",
      "status": "작업승인",
      "work_name": "임목 폐기물 파쇄"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-20",
      "grade": "일상",
      "location": "현장 내 전구역",
      "status": "작업승인",
      "work_name": "살수차 작업"
    }
  ],
  "2026-08-21": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-21",
      "grade": "일상",
      "location": "BL.2,중로(집)3-14,중로(집)3-14",
      "status": "작업승인",
      "work_name": "법면정리, 소할"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-21",
      "grade": "일상",
      "location": "BL03,05",
      "status": "작업승인",
      "work_name": "나무 집목 및 임목폐기물 운반"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-21",
      "grade": "일상A",
      "location": "BL.22 / BL.24",
      "status": "작업승인",
      "work_name": "임목 폐기물 파쇄"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-21",
      "grade": "일상",
      "location": "현장 내 전구역",
      "status": "작업승인",
      "work_name": "살수차 작업"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-21",
      "grade": "일상A",
      "location": "BL.12",
      "status": "작업승인",
      "work_name": "임시 침사지 안전난간대 설치"
    }
  ],
  "2026-08-24": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-24",
      "grade": "일상",
      "location": "중로(집)3-16,BL.2,13",
      "status": "작업승인",
      "work_name": "법면정리, 침사지 가배수로 터파기"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-24",
      "grade": "일상",
      "location": "현장 내 전구역",
      "status": "작업승인",
      "work_name": "살수차 작업"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-24",
      "grade": "일상A",
      "location": "BL.22 / BL.24",
      "status": "작업승인",
      "work_name": "임목 폐기물 파쇄"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-24",
      "grade": "일상A",
      "location": "BL.12 , 사면부",
      "status": "작업승인",
      "work_name": "임시 침사지 안전난간대 설치 및 사면정리작업"
    }
  ],
  "2026-08-25": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-25",
      "grade": "일상",
      "location": "중로(집)3-16,BL.2,13",
      "status": "작업승인",
      "work_name": "법면정리, 가배수로 터파기"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-25",
      "grade": "일상",
      "location": "현장 내 전구역",
      "status": "작업승인",
      "work_name": "살수차 작업"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-25",
      "grade": "일상A",
      "location": "BL.22 / BL.24",
      "status": "작업승인",
      "work_name": "임목 폐기물 파쇄"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-25",
      "grade": "일상A",
      "location": "BL.12 , 사면부",
      "status": "작업승인",
      "work_name": "임시 침사지 안전난간대 설치 및 사면정리작업"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-25",
      "grade": "일상",
      "location": "기존하천",
      "status": "작업승인",
      "work_name": "하천 준설및가배수로 작업"
    }
  ],
  "2026-08-26": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-26",
      "grade": "일상",
      "location": "중로(집)3-16,BL.2",
      "status": "작업승인",
      "work_name": "법면정리, 배수로정비"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-26",
      "grade": "일상",
      "location": "현장 내 전구역",
      "status": "작업승인",
      "work_name": "살수차 작업"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-26",
      "grade": "일상A",
      "location": "BL.22 / BL.24",
      "status": "작업승인",
      "work_name": "임목 폐기물 파쇄"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-26",
      "grade": "일상A",
      "location": "BL.12 , 사면부",
      "status": "작업승인",
      "work_name": "임시 침사지 안전난간대 설치 및 사면정리작업"
    }
  ],
  "2026-08-27": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-27",
      "grade": "일상",
      "location": "중로(집)3-16,BL.2",
      "status": "작업승인",
      "work_name": "법면정리, 표토제거"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-27",
      "grade": "일상",
      "location": "현장 내 전구역",
      "status": "작업승인",
      "work_name": "살수차 작업"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-27",
      "grade": "일상A",
      "location": "BL.22 / BL.24",
      "status": "작업승인",
      "work_name": "임목 폐기물 파쇄"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-27",
      "grade": "일상A",
      "location": "BL.12 , 사면부",
      "status": "작업승인",
      "work_name": "임시 침사지 안전난간대 설치 및 사면정리작업"
    }
  ],
  "2026-08-28": [
    {
      "company": "토우산업(주)",
      "date": "2026-08-28",
      "grade": "일상",
      "location": "중로(집)3-16,BL.2",
      "status": "작업승인",
      "work_name": "법면정리, 표토제거"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-28",
      "grade": "일상",
      "location": "현장 내 전구역",
      "status": "작업승인",
      "work_name": "살수차 작업"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-28",
      "grade": "일상A",
      "location": "BL.22 / BL.24",
      "status": "작업승인",
      "work_name": "임목 폐기물 파쇄"
    },
    {
      "company": "토우건설㈜",
      "date": "2026-08-28",
      "grade": "일상A",
      "location": "BL.12 , 사면부",
      "status": "작업승인",
      "work_name": "임시 침사지 안전난간대 설치 및 사면정리작업"
    }
  ]
};
