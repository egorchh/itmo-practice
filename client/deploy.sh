#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A -f
git commit -m 'deploy'

git push -f git@github.com:egorchh/itmo-practice.git main:gh-pages

cd -