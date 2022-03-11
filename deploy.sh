#!/usr/bin/env bash
# abort on errors
set -e

# build
yarn build

npx purifycss ./dist/css/*.css ./dist/js/main.js --min --info --out ./dist/css/index.css

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lehmancurtis147/lehmancurtis147.github.io.git master
cd -
