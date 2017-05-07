/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ({

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMobile = {
    Android: function Android() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function Windows() {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function any() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows();
    }
};

module.exports = isMobile;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isMobile = __webpack_require__(86);

var _isMobile2 = _interopRequireDefault(_isMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function () {
    var nameInput = $('#input-name');
    var theUsername = "",
        theMessage = void 0,
        hideThis = void 0;

    function init() {
        insertStuff();
        bottomPadding();
        checkCookie();
        hideLoader();
        myPlugins();
        plugins();

        $("#input-name").keypress(function (e) {
            if (e.which == 13) {
                e.preventDefault();
                theUsername = $(this).val();
                checkCookie();
                $(this).val('').attr('readonly', 'readonly');
                $('.typeText').typeText('Thank you ' + theUsername + '. Click on the logo to navigate.');
                setInputWidth(0);
                hideThis = true;
            }
        });

        $('.typeText').typeText(theMessage);

        $(window).resize(function () {
            bottomPadding();
        });

        if (_isMobile2.default.any()) {
            $('.remove-hover').removeClass('remove-hover');
            $('#footer, #picard').css('padding-bottom', 0);
            $('.thumbnails, #picard').css('margin-bottom', 0);
        }
    }

    function myPlugins() {
        $.fn.typeText = function (theMessage) {
            var strValue = theMessage,
                parseItLetter = strValue.split(''),
                letterArray = [],
                l = void 0,
                i = 0;

            $(this).empty();

            for (var j = 0; j < parseItLetter.length; j++) {
                letterArray += parseItLetter[j];
            }

            l = letterArray.length;

            function f() {
                $('.typeText').append(letterArray[i]);
                i++;
                if (i < l) {
                    setTimeout(f, 40);
                } else {
                    if (hideThis != true) {
                        $('.loopThis').show().loopThis(600, 600, 0.4);
                    } else {
                        $('.loopThis').removeClass('loopThis');
                        nameInput.blur().hide();
                        $('body').animate({
                            scrollTop: 0
                        });
                    }
                    inputHere();
                }
            }
            f();
        };

        $.fn.loopThis = function (duration1, duration2, op) {
            var runThis = {
                repeatThis: function repeatThis() {
                    $('.loopThis').animate({
                        opacity: op
                    }, duration1, function () {
                        $(this).animate({
                            opacity: 1
                        }, duration2, runThis.repeatThis());
                    });
                }
            };
            runThis.repeatThis();
        };
    }

    function plugins() {
        $(".fancybox").fancybox({
            prevEffect: "none",
            nextEffect: "none",
            helpers: {
                title: {
                    type: "outside"
                },
                overlay: {
                    opacity: 0.8,
                    css: {
                        "background-color": "#000"
                    }
                },
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        });

        // ascensor options
        $('#ascensorBuilding').ascensor({
            AscensorName: 'ascensor',
            ChildType: 'section',
            AscensorFloorName: 'section1 | section2 | section3 | section4 | section5',
            Time: 1000,
            WindowsOn: 1,
            Direction: 'chocolate',
            AscensorMap: '1|1 & 1|2 & 2|1 & 2|2 & 3|1',
            Easing: 'easeInOutCubic',
            KeyNavigation: false
        });
    }

    function hideLoader() {
        $('#loader').hide();
    }

    function insertStuff() {
        $('#submit_btn').click(function () {
            var addStuff = {
                orderNum: parseInt($('#order_num').val()),
                projLink0: $('#proj_link_0').val(),
                projRel: $('#proj_rel').val(),
                projTitle: $('#proj_title').val(),
                projRole: $('#proj_role').val(),
                projThumb: $('#proj_thumb').val(),
                projHeader: $('#proj_header').val(),
                projDesc: $('#proj_desc').val(),
                projLink1: $('#proj_link_1').val(),
                projLink1Title: $('#proj_link_1_title').val(),
                projLink1Role: $('#proj_link_1_role').val(),
                projLink2: $('#proj_link_2').val(),
                projLink2Title: $('#proj_link_2_title').val(),
                projLink2Role: $('#proj_link_2_role').val(),
                projLink3: $('#proj_link_3').val(),
                projLink3Title: $('#proj_link_3_title').val(),
                projLink3Role: $('#proj_link_3_role').val(),
                workRadio: $('#work_radio').prop("checked"),
                artRadio: $('#art_radio').prop("checked"),
                picsRadio: $('#pics_radio').prop("checked"),
                urlCheck: $('#url_check').prop("checked"),
                iframeCheck: $('#iframe_check').prop("checked"),
                newLineCheck: $('#new_line_check').prop("checked")
            };

            $.ajax({
                url: "/",
                type: "POST",
                contentType: "application/json",
                processData: false,
                data: JSON.stringify(addStuff),
                success: function success(data) {
                    alert("Data inputed successfully.");
                    location.reload();
                }
            });
        });
    }

    function inputHere() {
        $('#name-form h1').click(function () {
            nameInput.removeAttr('readonly');
            $('.loopThis').stop();
            $(this).hide();
            nameInput.focus();
        });
        nameInput.blur(function () {
            if ($(this).val() == '') {
                $('.loopThis').show().loopThis(600, 600, 0.4);
            }
        });
    }

    function bottomPadding() {
        if (!_isMobile2.default.any() && $(window).width() > 767) {
            $('.thumbnails li:last-child').css({
                'padding-bottom': '200px'
            });
            $('#qual-box').css('padding-bottom', '400px');
        } else {
            $('#ascensorFloor2 .thumbnails li:last-child, #ascensorFloor3 .thumbnails li:first-child, #qual-box').css({
                'padding-bottom': 0
            });
        }
    }

    function setInputWidth(multiple) {
        if (nameInput.val()) {
            var inputText = nameInput.val(),
                inputTextLength;

            if (inputText.length < 20) {
                inputTextLength = inputText.length + 2;
            } else {
                inputTextLength = inputText.length + 1;
            }
            nameInput.width(inputTextLength * multiple);
        }
    }

    // Cookie
    function getCookie(c_name) {
        var i,
            x,
            y,
            ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return unescape(y);
            }
        }
    }

    function setCookie(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    }

    function checkCookie() {
        var username = getCookie("username");
        if (username) {
            theMessage = "Welcome back " + username + ". Click on the logo to navigate.";
            setInputWidth(0);
            nameInput.attr('readonly', 'readonly');
            hideThis = true;
        } else {
            theMessage = "Welcome. Please state your name.";
            username = theUsername;
            if (username !== null && username !== "") {
                setCookie("username", username, 365);
            }
        }
    }

    return {
        init: init
    };
}();

$(function () {
    Main.init();

    $(".fancybox").fancybox({
        prevEffect: "none",
        nextEffect: "none",
        helpers: {
            title: {
                type: "outside"
            },
            overlay: {
                opacity: 0.8,
                css: {
                    "background-color": "#000"
                }
            },
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });
});

/***/ })

/******/ });