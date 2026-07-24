@echo off
REM ============================================================
REM Windows 작업 스케줄러에 이 배치파일을 등록하세요.
REM (auto_update.ps1과 반드시 같은 폴더에 있어야 합니다)
REM ============================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0auto_update.ps1"
