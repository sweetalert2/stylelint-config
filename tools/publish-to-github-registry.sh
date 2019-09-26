#!/bin/sh
echo '//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}' > .npmrc

npm i -g json
json -I -f package.json -e 'this.publishConfig={}'
json -I -f package.json -e 'this.publishConfig.registry="https://npm.pkg.github.com/"'

npm publish