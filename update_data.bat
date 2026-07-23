@echo off
echo ==================================================
echo  [XiteCore] Extracting Excel Data...
echo ==================================================
echo.

python extract.py

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Data extraction failed.
    echo Please check python installation and 'openpyxl' library.
    echo.
    pause
    exit /b %errorlevel%
)

echo.
echo ==================================================
echo  [XiteCore] Extracting Quality Test Data...
echo ==================================================
echo.

python extract_quality.py

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Quality data extraction failed.
    echo Please check that the '품질시험' folder contains the moisture/plate-load xlsx files.
    echo.
    pause
    exit /b %errorlevel%
)

echo.
echo ==================================================
echo  [SUCCESS] dailyData.js and qualityData.js have been updated!
echo ==================================================
echo.
echo Please upload the updated 'dailyData.js' and 'qualityData.js' to GitHub.
echo.
pause
