Set-Location examples/react-app/public/assets/
New-Item -Path sample-import-bundle.js -ItemType SymbolicLink -Value ../../../../dist/sample-import-bundle.js
New-Item -Path sample-import-bundle.css -ItemType SymbolicLink -Value ../../../../dist/sample-import-bundle.css
New-Item -Path config-import-bundle.js -ItemType SymbolicLink -Value ../../../../dist/config-import-bundle.js

Set-Location ../../../../examples/angular-app/src/assets/plugins/
New-Item -Path sample-import-bundle.js -ItemType SymbolicLink -Value ../../../../../dist/sample-import-bundle.js
New-Item -Path sample-import-bundle.css -ItemType SymbolicLink -Value ../../../../../dist/sample-import-bundle.css
New-Item -Path config-import-bundle.js -ItemType SymbolicLink -Value ../../../../../dist/config-import-bundle.js

Set-Location ../../../../../
