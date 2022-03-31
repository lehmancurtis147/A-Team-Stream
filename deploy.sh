#!/usr/bin/env bash
# abort on errors
set -e

# build
yarn build --fix

npx purifycss ./dist/css/*.css ./dist/js/main.js --min --info --out ./dist/css/index.css
uglifyjs dist/js/chunk-vendors.*.js -o chunk-vendors.*.min.js -c -m --source-map "filename='chunk-vendors.*.js.map'"

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lehmancurtis147/lehmancurtis147.github.io.git master
cd -
