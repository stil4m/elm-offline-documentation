#!/usr/bin/env bash

command="update"
d=`date '+%Y-%m-%d %H:%M'`
echo "$d"

git pull

/Users/stil4m/.nvm/versions/node/v7.6.0/bin/npm install
./update.js

git add -A
git commit -m "AUTO: Changes for $d"
git push
