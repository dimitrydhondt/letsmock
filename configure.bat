REM bower install
del /F public\bowerjs\select.min.js
del /F public\bowercss\select.min.css
del /F public\bowerjs\angular-sanitize.min.js
del /F public\bowerjs\angular.min.js
del /F public\bowerjs\angular-ui-router.min.js
del /F public\bowerjs\angular-translate.min.js
del /F public\bowerjs\angular-animate.min.js
del /F public\bowerjs\ocLazyLoad.min.js
del /F public\bowerjs\ui-bootstrap-tpls.min.js
rmdir \S \Q .\public\bowerjs
rmdir \S \Q .\public\bowercss
mkdir .\public\bowercss
mkdir .\public\bowerjs
xcopy bower_components\angular-ui-select\dist\select.min.js public\bowerjs
xcopy bower_components\angular-ui-select\dist\select.min.css public\bowercss
xcopy bower_components\angular-sanitize\angular-sanitize.min.js public\bowerjs
xcopy bower_components\angular\angular.min.js public\bowerjs
xcopy bower_components\angular-ui-router\release\angular-ui-router.min.js public\bowerjs
xcopy bower_components\angular-translate\angular-translate.min.js public\bowerjs
xcopy bower_components\angular-animate\angular-animate.min.js public\bowerjs
xcopy bower_components\oclazyload\dist\ocLazyLoad.min.js public\bowerjs
xcopy bower_components\angular-bootstrap\ui-bootstrap-tpls.min.js public\bowerjs