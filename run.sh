#!/usr/bin/env sh

d=`date '+%Y-%m-%d %H:%M'`
echo "$d"

git pull

npm install
node ./update.js
echo "Done\n"

git add -A
git commit -m "AUTO: Changes for $d"
git push
