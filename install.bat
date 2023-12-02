@echo off
chcp 65001 > nul

color 0D
title GameHourBoost

mode con: cols=75 lines=11

type "src\utils\art.txt"
echo.

where node > nul 2>&1
if %errorlevel% equ 0 (
echo           +---------------------------------------------+
echo                     Installing Dependencies...        
echo           +---------------------------------------------+ 
echo.
    
    npm install steam-user --no-fund > nul
    npm install steam-totp --no-fund > nul
    npm install fs --no-fund > nul
    
cls
color 0A
mode con: cols=65 lines=5
echo. 
echo           +---------------------------------------------+
echo                      Installation Completed!        
echo           +---------------------------------------------+ 
    
    timeout /t 3 > nul
    
) else (
cls
color 0C
mode con: cols=65 lines=5
echo.
echo  +------------------------------------------------------------+
echo                  Node.js is not installed. 
echo         Please install Node.js to continue.        
echo  +------------------------------------------------------------+
    pause > nul
)
