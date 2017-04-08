$('document').ready(function(){

var browser = ($.browser.safari) ? 'webkit' : ($.browser.mozilla) ? 'ff' : '';
var os = (navigator.appVersion.indexOf("Win")!=-1) ? 'windows' : 'probably-osx';
$('html').addClass(browser).addClass(os);

})

