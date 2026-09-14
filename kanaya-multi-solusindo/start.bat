@echo off
title PT Kanaya Multi Solusindo - Local Web Server
echo ========================================================
echo   Menjalankan Website PT Kanaya Multi Solusindo...
echo ========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
