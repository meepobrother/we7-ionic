#!/usr/bin/env bash
readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
rm -rf dist
$(npm bin)/ng-packagr -p ./src/app/we7-ionic/package.json
