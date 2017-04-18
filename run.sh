#1/usr/bin/env bash

command="update"
d=`date '+%Y-%m-%d %H:%M'`

git pull

node update.js

git add -A
git commit -m "AUTO: Changes for $d"
git push
