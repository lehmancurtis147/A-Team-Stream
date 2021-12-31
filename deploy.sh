#!/usr/bin/env bash
# abort on errors
set -e

# build
yarn build

#workbox generateSW workbox-config.js
# Build cache service worker
workbox generateSW workbox-config.js

cd dist

function ignore ()
{
  cat <<__EOM__
  .DS_Store

  /dist/index.html.gz

  /releases/index.json.gz

  /js/app.*.js.gz
  /js/chunk-vendors.*.js.gz

  /css/app.*.css.gz
  /css/chunk-vendors.*.css.gz
__EOM__
}

#if [ ! -e *.gitignore ]; then
#    ignore > ./.gitignore
#fi

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lehmancurtis147/lehmancurtis147.github.io.git master
cd -
