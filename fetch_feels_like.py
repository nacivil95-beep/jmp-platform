"""
fetch_feels_like.py
--------------------------------------------------------------------
센소링크(sensolink.kr)에 로그인해서 스마트 체감온도계(getEquipVal.json)의
체감온도 값을 읽어와 feelsLikeData.js 파일로 저장합니다.

- 아이디/비밀번호는 이 스크립트와 같은 폴더의 sensolink_config.json 에서 읽습니다.
  (이 파일은 절대 GitHub에 올리면 안 됩니다 -> .gitignore에 반드시 추가하세요)
- 작업스케줄러에 5분 간격 트리거로 등록해서 사용하는 걸 전제로 작성했습니다.
- 값이 실제로 바뀐 경우에만 git add / commit / push 합니다
  (안 바뀌었으면 조용히 넘어가서 불필요한 커밋을 만들지 않습니다).

사전 준비 (최초 1회):
  1. 이 스크립트와 같은 폴더(jmp-platform)에 sensolink_config.json 파일을 만드세요.
     내용 예시:
       {
         "user_id": "ske_st03",
         "user_pw": "실제_비밀번호",
         "scn_id": "S000000197"
       }
  2. .gitignore 에 아래 한 줄을 추가하세요 (아직 없다면):
       sensolink_config.json
  3. pip install requests --break-system-packages
--------------------------------------------------------------------
"""

import os
import re
import json
import subprocess
import sys
from datetime import datetime

import requests

BASE_URL = "https://www.sensolink.kr"
LOGIN_URL = f"{BASE_URL}/login_proc.do"
EQUIP_VAL_URL = f"{BASE_URL}/main/getEquipVal.json"
MAIN_PAGE_URL = f"{BASE_URL}/main.do"

CONFIG_FILE = "sensolink_config.json"
OUTPUT_FILE = "feelsLikeData.js"
LOG_FILE = "fetch_feels_like.log"

HEADERS_COMMON = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36"
    ),
}


def log(msg):
    line = f"{datetime.now():%Y-%m-%d %H:%M:%S}  {msg}"
    print(line)
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(line + "\n")


def load_config():
    if not os.path.exists(CONFIG_FILE):
        log(f"에러: {CONFIG_FILE} 이 없습니다. 아이디/비밀번호/scnId를 담은 파일을 먼저 만들어주세요.")
        sys.exit(1)
    with open(CONFIG_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def login(session, user_id, user_pw):
    """센소링크에 로그인해서 세션(JSESSIONID)을 획득합니다."""
    # 로그인 전에 메인 페이지를 한 번 방문해 초기 쿠키를 받아둡니다 (사이트에 따라 필요할 수 있음)
    session.get(MAIN_PAGE_URL, headers=HEADERS_COMMON, timeout=15)

    resp = session.post(
        LOGIN_URL,
        data={"user_id": user_id, "user_pw": user_pw},
        headers={**HEADERS_COMMON, "Referer": MAIN_PAGE_URL},
        timeout=15,
        allow_redirects=True,
    )

    if "JSESSIONID" not in session.cookies.get_dict():
        raise RuntimeError(f"로그인 실패로 보입니다 (status={resp.status_code}). 아이디/비밀번호를 확인하세요.")

    log("로그인 성공, 세션 획득")


def fetch_feels_like(session, scn_id):
    """getEquipVal.json 을 호출해 체감온도(perceivedTemperature1)를 가져옵니다."""
    # 주의: 센소링크 서버는 scnId 값을 작은따옴표로 감싼 문자열 형태로 기대합니다
    # (브라우저 개발자도구로 확인한 실제 요청 payload: {"scnId": "'S000000197'"})
    payload = {"url": "main/getEquipVal.json", "scnId": f"'{scn_id}'"}
    resp = session.post(
        EQUIP_VAL_URL,
        json=payload,
        headers={
            **HEADERS_COMMON,
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/json; charset=utf-8",
            "X-Requested-With": "XMLHttpRequest",
            "Origin": BASE_URL,
            "Referer": MAIN_PAGE_URL,
        },
        timeout=15,
    )
    resp.raise_for_status()
    data = resp.json()

    try:
        wbgt = data["ev"][0]["wbgt"]
        feels_like = wbgt["perceivedTemperature1"]
    except (KeyError, IndexError, TypeError) as e:
        raise RuntimeError(f"응답 구조가 예상과 다릅니다: {data}") from e

    return feels_like


def load_existing_value():
    """기존 feelsLikeData.js에 저장된 값을 읽어옵니다 (변경 여부 비교용)."""
    if not os.path.exists(OUTPUT_FILE):
        return None
    try:
        with open(OUTPUT_FILE, "r", encoding="utf-8") as f:
            content = f.read()
        m = re.search(r"let FEELS_LIKE_DATA\s*=\s*(\{.*?\})\s*;", content, re.S)
        if not m:
            return None
        return json.loads(m.group(1)).get("feelsLike")
    except Exception:
        return None


def write_output(feels_like):
    payload = {
        "feelsLike": feels_like,
        "updatedAt": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "source": "sensolink (스마트 체감온도계)",
    }
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("/**\n")
        f.write(" * 센소링크 스마트 체감온도계 실시간 데이터\n")
        f.write(" * 생성 스크립트: fetch_feels_like.py (5분마다 자동 갱신)\n")
        f.write(" */\n")
        f.write("let FEELS_LIKE_DATA = ")
        json.dump(payload, f, ensure_ascii=False, indent=2)
        f.write(";\n")


def git_push_if_changed():
    """feelsLikeData.js 에 실제 변경이 있을 때만 commit & push 합니다."""
    status = subprocess.run(
        ["git", "status", "--porcelain", "--", OUTPUT_FILE],
        capture_output=True, text=True,
    )
    if not status.stdout.strip():
        log("변경사항 없음 - push 생략")
        return

    subprocess.run(["git", "pull", "--rebase"], check=False)
    subprocess.run(["git", "add", OUTPUT_FILE], check=True)
    subprocess.run(
        ["git", "commit", "-m", f"체감온도 자동 갱신 {datetime.now():%Y-%m-%d %H:%M}"],
        check=True,
    )
    subprocess.run(["git", "push", "origin", "main"], check=True)
    log("GitHub push 완료")


def main():
    log("===== 체감온도 자동 수집 시작 =====")
    config = load_config()

    session = requests.Session()
    try:
        login(session, config["user_id"], config["user_pw"])
        feels_like = fetch_feels_like(session, config["scn_id"])
    except Exception as e:
        log(f"오류 발생: {e}")
        log("===== 체감온도 자동 수집 실패 =====")
        sys.exit(1)

    log(f"체감온도 조회 결과: {feels_like}℃")

    previous = load_existing_value()
    write_output(feels_like)

    if previous == feels_like:
        log("이전 값과 동일 - push 생략")
    else:
        git_push_if_changed()

    log("===== 체감온도 자동 수집 완료 =====")


if __name__ == "__main__":
    main()
