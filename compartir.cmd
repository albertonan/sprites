@echo off
rem Doble clic: arranca el servidor y el tunel publico.
rem La URL para compartir aparece abajo en un recuadro (cambia en cada arranque).
cd /d "%~dp0"
start "sprites-server" /min node serve.js
cloudflared.exe tunnel --url http://localhost:8347 --no-autoupdate
