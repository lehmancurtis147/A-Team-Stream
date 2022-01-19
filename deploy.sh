#!/usr/bin/env bash
# abort on errors
set -e

# build
yarn build

#workbox generateSW workbox-config.js
# Build cache service worker
#workbox generateSW workbox-config.js
cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lehmancurtis147/lehmancurtis147.github.io.git master
cd -
