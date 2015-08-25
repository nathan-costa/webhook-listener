#!/bin/sh
cd ../costaclub-web
git pull https://nathan-costa:PDZAKT3b4@github.com/costacruise/costaclub-web.git master
phraseapp pull
var=( $(ls -t /www) )
gulp
sudo \cp --verbose src/resources/core/*.* /www/${var[0]}/resources/core

