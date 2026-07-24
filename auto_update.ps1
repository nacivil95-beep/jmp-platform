# ============================================================================
# XiteCore Smart Site Platform - 작업일보/품질시험 자동 업데이트 스크립트
# ----------------------------------------------------------------------------
# 매일 아침 정해진 시각에:
#   1) extract.py 실행         -> 작업일보 폴더의 엑셀을 dailyData.js로 변환
#   2) extract_quality.py 실행 -> 품질시험 폴더의 엑셀 2개를 qualityData.js로 변환
#   3) 변경된 파일만 GitHub에 자동 commit & push
#
# 전제: 매일 아래 두 폴더에 최신 엑셀 파일을 사용자가 직접 놓아둡니다.
#   작업일보 : C:\Users\jinhong\Desktop\구글안티그래비티(진천메가)\작업일보
#   품질시험 : C:\Users\jinhong\Desktop\구글안티그래비티(진천메가)\품질시험
# (이 스크립트, extract.py, extract_quality.py도 전부 같은 폴더에 있어야 합니다)
#
# ★ 최초 1회 준비 (직접 해주셔야 하는 것):
#   1. 이 폴더가 GitHub 저장소와 연결되어 있어야 합니다.
#      아직 아니라면: git clone https://github.com/nacivil95-beep/jmp-platform.git
#      로 새로 받은 뒤, 그 폴더를 "구글안티그래비티(진천메가)" 대신 사용하거나,
#      기존 폴더 안에서 git init 후 git remote add origin <저장소 주소> 로 연결하세요.
#   2. 한 번 수동으로 push 해보면서 GitHub 로그인 창이 뜨면
#      아이디 = GitHub 아이디, 비밀번호 = Personal Access Token(PAT) 입력
#      -> Windows 자격 증명 관리자에 저장되어, 이후 자동 실행 시 재입력 불필요
#   3. 아래 $branchName 이 실제 기본 브랜치명(main 또는 master)과 같은지 확인
# ============================================================================

$ErrorActionPreference = "Stop"

# ── 환경 설정 ────────────────────────────────────────────────────────────
$branchName = "main"   # 저장소 기본 브랜치명이 다르면 여기를 수정하세요

# 이 스크립트 파일이 있는 폴더 = git 저장소 루트라고 가정합니다
$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoRoot

$logFile = Join-Path $repoRoot "auto_update.log"
function Log($msg) {
    $line = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')  $msg"
    Write-Output $line
    Add-Content -Path $logFile -Value $line -Encoding UTF8
}

Log "===== 자동 업데이트 시작 ====="

try {
    # 1) 작업일보 엑셀 -> dailyData.js
    python extract.py
    if ($LASTEXITCODE -ne 0) { throw "extract.py 실행 실패 (종료 코드 $LASTEXITCODE)" }
    Log "dailyData.js 갱신 완료"

    # 2) 품질시험 엑셀(함수비/평판재하시험) -> qualityData.js
    #    두 엑셀 중 하나라도 없으면 스크립트가 자체적으로 qualityData.js를 건드리지 않고 건너뜁니다.
    python extract_quality.py
    if ($LASTEXITCODE -ne 0) { throw "extract_quality.py 실행 실패 (종료 코드 $LASTEXITCODE)" }
    Log "qualityData.js 처리 완료"

    # 3) 변경사항이 있을 때만 GitHub에 push
    $status = git status --porcelain -- dailyData.js qualityData.js
    if ([string]::IsNullOrWhiteSpace($status)) {
        Log "변경사항 없음 - push 생략"
    } else {
        git add dailyData.js
        if (Test-Path (Join-Path $repoRoot "qualityData.js")) {
            git add qualityData.js
        }
        git commit -m "작업일보/품질시험 자동 업데이트 $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
        git push origin $branchName
        Log "GitHub push 완료"
    }

    Log "===== 자동 업데이트 성공 ====="
}
catch {
    Log "오류 발생: $_"
    Log "===== 자동 업데이트 실패 ====="
    exit 1
}
