@echo off
rem Adds Node.js to PATH (the preview spawner doesn't inherit it) then starts the dev server.
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"
call npm run dev
