#!/bin/bash

# create symlinks for distributions in react example
cd examples/react-app/public/assets/
ln -s ../../../../dist/sample-import-bundle.js sample-import-bundle.js 
ln -s ../../../../dist/sample-import-bundle.css sample-import-bundle.css
ln -s ../../../../dist/config-import-bundle.js config-import-bundle.js


# create symlinks for distributions in angular example
cd ../../../../examples/angular-app/src/assets/plugins/
ln -s ../../../../../dist/sample-import-bundle.js sample-import-bundle.js 
ln -s ../../../../../dist/sample-import-bundle.css sample-import-bundle.css
ln -s ../../../../../dist/config-import-bundle.js config-import-bundle.js

cd ../../../../../


