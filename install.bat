@echo off

color 06
title CS-ItemAlert by LKzinxYz

mode con: cols=65 lines=8
echo.
where node > nul 2>&1
if %errorlevel% equ 0 (
echo           +---------------------------------------------+
echo                     Installing Dependencies...        
echo           +---------------------------------------------+ 
echo.
echo                   CS-ItemAlert by LKzinxYz
echo.
    
  npm install steam-user --no-fund > nul
  npm install steam-totp --no-fund > nul
  npm install fs --no-fund > nul
    
cls
color 0A
mode con: cols=65 lines=5
echo. 
echo           +---------------------------------------------+
echo                     finish installation!        
echo           +---------------------------------------------+ 
    
    timeout /t 3 > nul
    
) else (
cls
color 0C
mode con: cols=65 lines=5
echo.
echo  +------------------------------------------------------------+
echo                  Node.js is not installed. 
echo             Please install Node.js to continue.        
echo  +------------------------------------------------------------+
    pause > nul
)
