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
/******/ 	return __webpack_require__(__webpack_require__.s = 191);
/******/ })
/************************************************************************/
/******/ ({

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
__webpack_require__(81);
__webpack_require__(85);
__webpack_require__(82);
__webpack_require__(83);
module.exports = __webpack_require__(84);


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function (d) {
  function e(a) {
    var b = a || window.event,
        c = [].slice.call(arguments, 1),
        f = 0,
        e = 0,
        g = 0,
        a = d.event.fix(b);a.type = "mousewheel";b.wheelDelta && (f = b.wheelDelta / 120);b.detail && (f = -b.detail / 3);g = f;b.axis !== void 0 && b.axis === b.HORIZONTAL_AXIS && (g = 0, e = -1 * f);b.wheelDeltaY !== void 0 && (g = b.wheelDeltaY / 120);b.wheelDeltaX !== void 0 && (e = -1 * b.wheelDeltaX / 120);c.unshift(a, f, e, g);return (d.event.dispatch || d.event.handle).apply(this, c);
  }var c = ["DOMMouseScroll", "mousewheel"];if (d.event.fixHooks) for (var h = c.length; h;) {
    d.event.fixHooks[c[--h]] = d.event.mouseHooks;
  }d.event.special.mousewheel = { setup: function setup() {
      if (this.addEventListener) for (var a = c.length; a;) {
        this.addEventListener(c[--a], e, false);
      } else this.onmousewheel = e;
    }, teardown: function teardown() {
      if (this.removeEventListener) for (var a = c.length; a;) {
        this.removeEventListener(c[--a], e, false);
      } else this.onmousewheel = null;
    } };d.fn.extend({ mousewheel: function mousewheel(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    }, unmousewheel: function unmousewheel(a) {
      return this.unbind("mousewheel", a);
    } });
})(jQuery);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
* Buttons helper for fancyBox
* version: 1.0.2
* @requires fancyBox v2.0 or later
*
* Usage: 
*     $(".fancybox").fancybox({
*         buttons: {
*             position : 'top'
*         }
*     });
* 
* Options:
*     tpl - HTML template
*     position - 'top' or 'bottom'
* 
*/
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.buttons = {
		tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>',
		list: null,
		buttons: {},

		update: function update() {
			var toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');

			//Size toggle button
			if (F.current.canShrink) {
				toggle.addClass('btnToggleOn');
			} else if (!F.current.canExpand) {
				toggle.addClass('btnDisabled');
			}
		},

		beforeLoad: function beforeLoad(opts) {
			//Remove self if gallery do not have at least two items
			if (F.group.length < 2) {
				F.coming.helpers.buttons = false;
				F.coming.closeBtn = true;

				return;
			}

			//Increase top margin to give space for buttons
			F.coming.margin[opts.position === 'bottom' ? 2 : 0] += 30;
		},

		onPlayStart: function onPlayStart() {
			if (this.list) {
				this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
			}
		},

		onPlayEnd: function onPlayEnd() {
			if (this.list) {
				this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
			}
		},

		afterShow: function afterShow(opts) {
			var buttons;

			if (!this.list) {
				this.list = $(opts.tpl || this.tpl).addClass(opts.position || 'top').appendTo('body');

				this.buttons = {
					prev: this.list.find('.btnPrev').click(F.prev),
					next: this.list.find('.btnNext').click(F.next),
					play: this.list.find('.btnPlay').click(F.play),
					toggle: this.list.find('.btnToggle').click(F.toggle)
				};
			}

			buttons = this.buttons;

			//Prev
			if (F.current.index > 0 || F.current.loop) {
				buttons.prev.removeClass('btnDisabled');
			} else {
				buttons.prev.addClass('btnDisabled');
			}

			//Next / Play
			if (F.current.loop || F.current.index < F.group.length - 1) {
				buttons.next.removeClass('btnDisabled');
				buttons.play.removeClass('btnDisabled');
			} else {
				buttons.next.addClass('btnDisabled');
				buttons.play.addClass('btnDisabled');
			}

			this.update();
		},

		onUpdate: function onUpdate() {
			this.update();
		},

		beforeClose: function beforeClose() {
			if (this.list) {
				this.list.remove();
			}

			this.list = null;
			this.buttons = {};
		}
	};
})(jQuery);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
* Media helper for fancyBox
* version: 1.0.0
* @requires fancyBox v2.0 or later
*
* Usage:
*     $(".fancybox").fancybox({
*         media: {}
*     });
*
*  Supports:
*      Youtube
*          http://www.youtube.com/watch?v=opj24KnzrWo
*          http://youtu.be/opj24KnzrWo
*      Vimeo
*          http://vimeo.com/25634903
*      Metacafe
*          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
*          http://www.metacafe.com/watch/7635964/
*      Dailymotion
*          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
*      Twitvid
*          http://twitvid.com/QY7MD
*      Twitpic
*          http://twitpic.com/7p93st
*      Instagram
*          http://instagr.am/p/IejkuUGxQn/
*          http://instagram.com/p/IejkuUGxQn/
*      Google maps
*          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
*          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
*          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
*/
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.media = {
		beforeLoad: function beforeLoad(opts, obj) {
			var href = obj.href || '',
			    type = false,
			    rez;

			if (rez = href.match(/(youtube\.com|youtu\.be)\/(v\/|u\/|embed\/|watch\?v=)?([^#\&\?]*).*/i)) {
				href = '//www.youtube.com/embed/' + rez[3] + '?autoplay=1&autohide=1&fs=1&rel=0&enablejsapi=1';
				type = 'iframe';
			} else if (rez = href.match(/vimeo.com\/(\d+)\/?(.*)/)) {
				href = '//player.vimeo.com/video/' + rez[1] + '?hd=1&autoplay=1&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1';
				type = 'iframe';
			} else if (rez = href.match(/metacafe.com\/watch\/(\d+)\/?(.*)/)) {
				href = '//www.metacafe.com/fplayer/' + rez[1] + '/.swf?playerVars=autoPlay=yes';
				type = 'swf';
			} else if (rez = href.match(/dailymotion.com\/video\/(.*)\/?(.*)/)) {
				href = '//www.dailymotion.com/swf/video/' + rez[1] + '?additionalInfos=0&autoStart=1';
				type = 'swf';
			} else if (rez = href.match(/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i)) {
				href = '//www.twitvid.com/embed.php?autoplay=0&guid=' + rez[1];
				type = 'iframe';
			} else if (rez = href.match(/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i)) {
				href = '//twitpic.com/show/full/' + rez[1];
				type = 'image';
			} else if (rez = href.match(/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i)) {
				href = '//' + rez[1] + '/p/' + rez[2] + '/media/?size=l';
				type = 'image';
			} else if (rez = href.match(/maps\.google\.com\/(\?ll=|maps\/?\?q=)(.*)/i)) {
				href = '//maps.google.com/' + rez[1] + '' + rez[2] + '&output=' + (rez[2].indexOf('layer=c') ? 'svembed' : 'embed');
				type = 'iframe';
			}

			if (type) {
				obj.href = href;
				obj.type = type;
			}
		}
	};
})(jQuery);

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
* Thumbnail helper for fancyBox
* version: 1.0.4
* @requires fancyBox v2.0 or later
*
* Usage:
*     $(".fancybox").fancybox({
*         thumbs: {
*             width  : 50,
*             height : 50
*         }
*     });
*
* Options:
*     width - thumbnail width
*     height - thumbnail height
*     source - function to obtain the URL of the thumbnail image
*     position - 'top' or 'bottom'
*
*/
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.thumbs = {
		wrap: null,
		list: null,
		width: 0,

		//Default function to obtain the URL of the thumbnail image
		source: function source(el) {
			var img;

			if ($.type(el) === 'string') {
				return el;
			}

			img = $(el).find('a');

			return img.length ? img.attr('href') : el.href;
		},

		init: function init(opts) {
			var that = this,
			    list,
			    thumbWidth = opts.width || 50,
			    thumbHeight = opts.height || 50,
			    thumbSource = opts.source || this.source;

			//Build list structure
			list = '';

			for (var n = 0; n < F.group.length; n++) {
				list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
			}

			this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position || 'bottom').appendTo('body');
			this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);

			//Load each thumbnail
			$.each(F.group, function (i) {
				$("<img />").load(function () {
					var width = this.width,
					    height = this.height,
					    widthRatio,
					    heightRatio,
					    parent;

					if (!that.list || !width || !height) {
						return;
					}

					//Calculate thumbnail width/height and center it
					widthRatio = width / thumbWidth;
					heightRatio = height / thumbHeight;
					parent = that.list.children().eq(i).find('a');

					if (widthRatio >= 1 && heightRatio >= 1) {
						if (widthRatio > heightRatio) {
							width = Math.floor(width / heightRatio);
							height = thumbHeight;
						} else {
							width = thumbWidth;
							height = Math.floor(height / widthRatio);
						}
					}

					$(this).css({
						width: width,
						height: height,
						top: Math.floor(thumbHeight / 2 - height / 2),
						left: Math.floor(thumbWidth / 2 - width / 2)
					});

					parent.width(thumbWidth).height(thumbHeight);

					$(this).hide().appendTo(parent).fadeIn(300);
				}).attr('src', thumbSource(F.group[i]));
			});

			//Set initial width
			this.width = this.list.children().eq(0).outerWidth(true);

			this.list.width(this.width * (F.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (F.current.index * this.width + this.width * 0.5)));
		},

		//Center list
		update: function update(opts) {
			if (this.list) {
				this.list.stop(true).animate({
					'left': Math.floor($(window).width() * 0.5 - (F.current.index * this.width + this.width * 0.5))
				}, 150);
			}
		},

		beforeLoad: function beforeLoad(opts) {
			//Remove self if gallery do not have at least two items
			if (F.group.length < 2) {
				F.coming.helpers.thumbs = false;

				return;
			}

			//Increase bottom margin to give space for thumbs
			F.coming.margin[opts.position === 'top' ? 0 : 2] = opts.height + 30;
		},

		afterShow: function afterShow(opts) {
			//Check if exists and create or update list
			if (this.list) {
				this.update(opts);
			} else {
				this.init(opts);
			}

			//Set active element
			this.list.children().removeClass('active').eq(F.current.index).addClass('active');
		},

		onUpdate: function onUpdate() {
			this.update();
		},

		beforeClose: function beforeClose() {
			if (this.wrap) {
				this.wrap.remove();
			}

			this.wrap = null;
			this.list = null;
			this.width = 0;
		}
	};
})(jQuery);

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! fancyBox v2.0.6 fancyapps.com | fancyapps.com/fancybox/#license */
(function (s, l, d, t) {
  var m = d(s),
      q = d(l),
      a = d.fancybox = function () {
    a.open.apply(this, arguments);
  },
      u = !1,
      k = l.createTouch !== t,
      o = function o(a) {
    return "string" === d.type(a);
  },
      n = function n(b, c) {
    c && o(b) && 0 < b.indexOf("%") && (b = a.getViewport()[c] / 100 * parseInt(b, 10));return Math.round(b) + "px";
  };d.extend(a, { version: "2.0.5", defaults: { padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, autoSize: !0, autoResize: !k, autoCenter: !k, fitToView: !0, aspectRatio: !1, topRatio: 0.5, fixed: !1, scrolling: "auto",
      wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, keys: { next: [13, 32, 34, 39, 40], prev: [8, 33, 37, 38], close: [27] }, tpl: { wrap: '<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"' + (d.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>", swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>', error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>', next: '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>' }, openEffect: "fade", openSpeed: 300, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 300, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 300, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic",
      prevSpeed: 300, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: { speedIn: 0, speedOut: 300, opacity: 0.8, css: { cursor: "pointer" }, closeClick: !0 }, title: { type: "float" } } }, group: {}, opts: {}, coming: null, current: null, isOpen: !1, isOpened: !1, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function open(b, c) {
      a.close(!0);b && !d.isArray(b) && (b = b instanceof d ? d(b).get() : [b]);a.isActive = !0;a.opts = d.extend(!0, {}, a.defaults, c);d.isPlainObject(c) && c.keys !== t && (a.opts.keys = c.keys ? d.extend({}, a.defaults.keys, c.keys) : !1);a.group = b;a._start(a.opts.index || 0);
    }, cancel: function cancel() {
      a.coming && !1 === a.trigger("onCancel") || (a.coming = null, a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onabort = a.imgPreload.onerror = null));
    }, close: function close(b) {
      a.cancel();a.current && !1 !== a.trigger("beforeClose") && (a.unbindEvents(), !a.isOpen || b && !0 === b[0] ? (d(".fancybox-wrap").stop().trigger("onReset").remove(), a._afterZoomOut()) : (a.isOpen = a.isOpened = !1, d(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), a.transitions[a.current.closeMethod]()));
    }, play: function play(b) {
      var c = function c() {
        clearTimeout(a.player.timer);
      },
          e = function e() {
        c();a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed));
      },
          f = function f() {
        c();d("body").unbind(".player");a.player.isActive = !1;a.trigger("onPlayEnd");
      };if (a.player.isActive || b && !1 === b[0]) f();else if (a.current && (a.current.loop || a.current.index < a.group.length - 1)) a.player.isActive = !0, d("body").bind({ "afterShow.player onUpdate.player": e, "onCancel.player beforeClose.player": f, "beforeLoad.player": c }), e(), a.trigger("onPlayStart");
    }, next: function next() {
      a.current && a.jumpto(a.current.index + 1);
    }, prev: function prev() {
      a.current && a.jumpto(a.current.index - 1);
    }, jumpto: function jumpto(b) {
      a.current && (b = parseInt(b, 10), 1 < a.group.length && a.current.loop && (b >= a.group.length ? b = 0 : 0 > b && (b = a.group.length - 1)), a.group[b] !== t && (a.cancel(), a._start(b)));
    }, reposition: function reposition(b, c) {
      var e;a.isOpen && (e = a._getPosition(c), b && "scroll" === b.type ? (delete e.position, a.wrap.stop(!0, !0).animate(e, 200)) : a.wrap.css(e));
    }, update: function update(b) {
      a.isOpen && (u || setTimeout(function () {
        var c = a.current,
            e = !b || b && "orientationchange" === b.type;if (u && (u = !1, c)) {
          if (!b || "scroll" !== b.type || e) c.autoSize && "iframe" !== c.type && (a.inner.height("auto"), c.height = a.inner.height()), (c.autoResize || e) && a._setDimension(), c.canGrow && "iframe" !== c.type && a.inner.height("auto");(c.autoCenter || e) && a.reposition(b);a.trigger("onUpdate");
        }
      }, 200), u = !0);
    }, toggle: function toggle() {
      a.isOpen && (a.current.fitToView = !a.current.fitToView, a.update());
    }, hideLoading: function hideLoading() {
      q.unbind("keypress.fb");d("#fancybox-loading").remove();
    }, showLoading: function showLoading() {
      a.hideLoading();q.bind("keypress.fb", function (b) {
        27 === b.keyCode && (b.preventDefault(), a.cancel());
      });d('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body");
    }, getViewport: function getViewport() {
      return { x: m.scrollLeft(), y: m.scrollTop(), w: k && s.innerWidth ? s.innerWidth : m.width(), h: k && s.innerHeight ? s.innerHeight : m.height() };
    }, unbindEvents: function unbindEvents() {
      a.wrap && a.wrap.unbind(".fb");q.unbind(".fb");m.unbind(".fb");
    }, bindEvents: function bindEvents() {
      var b = a.current,
          c = b.keys;b && (m.bind("resize.fb orientationchange.fb" + (b.autoCenter && !b.fixed ? " scroll.fb" : ""), a.update), c && q.bind("keydown.fb", function (b) {
        var f;f = b.target || b.srcElement;if (!b.ctrlKey && !b.altKey && !b.shiftKey && !b.metaKey && (!f || !f.type && !d(f).is("[contenteditable]"))) f = b.keyCode, -1 < d.inArray(f, c.close) ? (a.close(), b.preventDefault()) : -1 < d.inArray(f, c.next) ? (a.next(), b.preventDefault()) : -1 < d.inArray(f, c.prev) && (a.prev(), b.preventDefault());
      }), d.fn.mousewheel && b.mouseWheel && 1 < a.group.length && a.wrap.bind("mousewheel.fb", function (b, c) {
        var d = b.target || null;if (0 !== c && (!d || 0 === d.clientHeight || d.scrollHeight === d.clientHeight && d.scrollWidth === d.clientWidth)) b.preventDefault(), a[0 < c ? "prev" : "next"]();
      }));
    }, trigger: function trigger(b, c) {
      var e,
          f = c || a[-1 < d.inArray(b, ["onCancel", "beforeLoad", "afterLoad"]) ? "coming" : "current"];if (f) {
        d.isFunction(f[b]) && (e = f[b].apply(f, Array.prototype.slice.call(arguments, 1)));if (!1 === e) return !1;f.helpers && d.each(f.helpers, function (c, e) {
          if (e && d.isPlainObject(a.helpers[c]) && d.isFunction(a.helpers[c][b])) a.helpers[c][b](e, f);
        });d.event.trigger(b + ".fb");
      }
    }, isImage: function isImage(a) {
      return o(a) && a.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i);
    }, isSWF: function isSWF(a) {
      return o(a) && a.match(/\.(swf)((\?|#).*)?$/i);
    }, _start: function _start(b) {
      var c = {},
          e = a.group[b] || null,
          f,
          g,
          i;if (e && (e.nodeType || e instanceof d)) f = !0, d.metadata && (c = d(e).metadata());c = d.extend(!0, {}, a.opts, { index: b, element: e }, d.isPlainObject(e) ? e : c);d.each(["href", "title", "content", "type"], function (b, g) {
        c[g] = a.opts[g] || f && d(e).attr(g) || c[g] || null;
      });"number" === typeof c.margin && (c.margin = [c.margin, c.margin, c.margin, c.margin]);c.modal && d.extend(!0, c, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { css: { cursor: "auto" }, closeClick: !1 } } });a.coming = c;if (!1 === a.trigger("beforeLoad")) a.coming = null;else {
        g = c.type;b = c.href || e;g || (f && (g = d(e).data("fancybox-type"), g || (g = (g = e.className.match(/fancybox\.(\w+)/)) ? g[1] : null)), !g && o(b) && (a.isImage(b) ? g = "image" : a.isSWF(b) ? g = "swf" : b.match(/^#/) && (g = "inline")), g || (g = f ? "inline" : "html"), c.type = g);if ("inline" === g || "html" === g) {
          if (c.content || (c.content = "inline" === g ? d(o(b) ? b.replace(/.*(?=#[^\s]+$)/, "") : b) : e), !c.content || !c.content.length) g = null;
        } else b || (g = null);"ajax" === g && o(b) && (i = b.split(/\s+/, 2), b = i.shift(), c.selector = i.shift());c.href = b;c.group = a.group;c.isDom = f;switch (g) {case "image":
            a._loadImage();break;case "ajax":
            a._loadAjax();break;case "inline":case "iframe":case "swf":case "html":
            a._afterLoad();
            break;default:
            a._error("type");}
      }
    }, _error: function _error(b) {
      a.hideLoading();d.extend(a.coming, { type: "html", autoSize: !0, minWidth: 0, minHeight: 0, padding: 15, hasError: b, content: a.coming.tpl.error });a._afterLoad();
    }, _loadImage: function _loadImage() {
      var b = a.imgPreload = new Image();b.onload = function () {
        this.onload = this.onerror = null;a.coming.width = this.width;a.coming.height = this.height;a._afterLoad();
      };b.onerror = function () {
        this.onload = this.onerror = null;a._error("image");
      };b.src = a.coming.href;(b.complete === t || !b.complete) && a.showLoading();
    },
    _loadAjax: function _loadAjax() {
      a.showLoading();a.ajaxLoad = d.ajax(d.extend({}, a.coming.ajax, { url: a.coming.href, error: function error(b, c) {
          a.coming && "abort" !== c ? a._error("ajax", b) : a.hideLoading();
        }, success: function success(b, c) {
          "success" === c && (a.coming.content = b, a._afterLoad());
        } }));
    }, _preloadImages: function _preloadImages() {
      var b = a.group,
          c = a.current,
          e = b.length,
          f,
          g,
          i,
          h = Math.min(c.preload, e - 1);if (c.preload && !(2 > b.length)) for (i = 1; i <= h; i += 1) {
        if (f = b[(c.index + i) % e], g = f.href || d(f).attr("href") || f, "image" === f.type || a.isImage(g)) new Image().src = g;
      }
    }, _afterLoad: function _afterLoad() {
      a.hideLoading();
      !a.coming || !1 === a.trigger("afterLoad", a.current) ? a.coming = !1 : (a.isOpened ? (d(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), a.transitions[a.current.prevMethod]()) : (d(".fancybox-wrap").stop().trigger("onReset").remove(), a.trigger("afterClose")), a.unbindEvents(), a.isOpen = !1, a.current = a.coming, a.wrap = d(a.current.tpl.wrap).addClass("fancybox-" + (k ? "mobile" : "desktop") + " fancybox-type-" + a.current.type + " fancybox-tmp " + a.current.wrapCSS).appendTo("body"), a.skin = d(".fancybox-skin", a.wrap).css("padding", n(a.current.padding)), a.outer = d(".fancybox-outer", a.wrap), a.inner = d(".fancybox-inner", a.wrap), a._setContent());
    }, _setContent: function _setContent() {
      var b = a.current,
          c = b.content,
          e = b.type,
          f = b.minWidth,
          g = b.minHeight,
          i = b.maxWidth,
          h = b.maxHeight;switch (e) {case "inline":case "ajax":case "html":
          b.selector ? c = d("<div>").html(c).find(b.selector) : c instanceof d && (c.parent().hasClass("fancybox-inner") && c.parents(".fancybox-wrap").unbind("onReset"), c = c.show().detach(), d(a.wrap).bind("onReset", function () {
            c.appendTo("body").hide();
          }));b.autoSize && (f = d('<div class="fancybox-wrap ' + a.current.wrapCSS + ' fancybox-tmp"></div>').appendTo("body").css({ minWidth: n(f, "w"), minHeight: n(g, "h"), maxWidth: n(i, "w"), maxHeight: n(h, "h") }).append(c), b.width = f.width(), b.height = f.height(), f.width(a.current.width), f.height() > b.height && (f.width(b.width + 1), b.width = f.width(), b.height = f.height()), c = f.contents().detach(), f.remove());break;case "image":
          c = b.tpl.image.replace("{href}", b.href);b.aspectRatio = !0;break;case "swf":
          c = b.tpl.swf.replace(/\{width\}/g, b.width).replace(/\{height\}/g, b.height).replace(/\{href\}/g, b.href);break;case "iframe":
          c = d(b.tpl.iframe.replace("{rnd}", new Date().getTime())).attr("scrolling", b.scrolling).attr("src", b.href), b.scrolling = k ? "scroll" : "auto";}if ("image" === e || "swf" === e) b.autoSize = !1, b.scrolling = "visible";"iframe" === e && b.autoSize ? (a.showLoading(), a._setDimension(), a.inner.css("overflow", b.scrolling), c.bind({ onCancel: function onCancel() {
          d(this).unbind();a._afterZoomOut();
        }, load: function load() {
          a.hideLoading();
          try {
            this.contentWindow.document.location && (a.current.height = d(this).contents().find("body").height());
          } catch (b) {
            a.current.autoSize = !1;
          }a[a.isOpen ? "_afterZoomIn" : "_beforeShow"]();
        } }).appendTo(a.inner)) : (a.inner.append(c), a._beforeShow());
    }, _beforeShow: function _beforeShow() {
      a.coming = null;a.trigger("beforeShow");a._setDimension();a.wrap.hide().removeClass("fancybox-tmp");a.bindEvents();a._preloadImages();a.transitions[a.isOpened ? a.current.nextMethod : a.current.openMethod]();
    }, _setDimension: function _setDimension() {
      var b = a.wrap,
          c = a.inner,
          e = a.current,
          f = a.getViewport(),
          g = e.margin,
          i = 2 * e.padding,
          h = e.width,
          j = e.height,
          r = e.maxWidth + i,
          k = e.maxHeight + i,
          l = e.minWidth + i,
          m = e.minHeight + i,
          p;f.w -= g[1] + g[3];f.h -= g[0] + g[2];o(h) && 0 < h.indexOf("%") && (h = (f.w - i) * parseFloat(h) / 100);o(j) && 0 < j.indexOf("%") && (j = (f.h - i) * parseFloat(j) / 100);g = h / j;h += i;j += i;e.fitToView && (r = Math.min(f.w, r), k = Math.min(f.h, k));if (e.aspectRatio) {
        if (h > r && (h = r, j = (h - i) / g + i), j > k && (j = k, h = (j - i) * g + i), h < l && (h = l, j = (h - i) / g + i), j < m) j = m, h = (j - i) * g + i;
      } else h = Math.max(l, Math.min(h, r)), j = Math.max(m, Math.min(j, k));h = Math.round(h);j = Math.round(j);d(b.add(c)).width("auto").height("auto");c.width(h - i).height(j - i);b.width(h);p = b.height();if (h > r || p > k) for (; (h > r || p > k) && h > l && p > m;) {
        j -= 10, e.aspectRatio ? (h = Math.round((j - i) * g + i), h < l && (h = l, j = (h - i) / g + i)) : h -= 10, c.width(h - i).height(j - i), b.width(h), p = b.height();
      }e.dim = { width: n(h), height: n(p) };e.canGrow = e.autoSize && j > m && j < k;e.canShrink = !1;e.canExpand = !1;if (h - i < e.width || j - i < e.height) e.canExpand = !0;else if ((h > f.w || p > f.h) && h > l && j > m) e.canShrink = !0;a.innerSpace = p - i - c.height();
    }, _getPosition: function _getPosition(b) {
      var c = a.current,
          e = a.getViewport(),
          f = c.margin,
          d = a.wrap.width() + f[1] + f[3],
          i = a.wrap.height() + f[0] + f[2],
          h = { position: "absolute", top: f[0] + e.y, left: f[3] + e.x };c.autoCenter && c.fixed && !b && i <= e.h && d <= e.w && (h = { position: "fixed", top: f[0], left: f[3] });h.top = n(Math.max(h.top, h.top + (e.h - i) * c.topRatio));h.left = n(Math.max(h.left, h.left + 0.5 * (e.w - d)));return h;
    }, _afterZoomIn: function _afterZoomIn() {
      var b = a.current,
          c = b ? b.scrolling : "no";if (b && (a.isOpen = a.isOpened = !0, a.wrap.addClass("fancybox-opened"), a.inner.css("overflow", "yes" === c ? "scroll" : "no" === c ? "hidden" : c), a.trigger("afterShow"), a.update(), (b.closeClick || b.nextClick) && a.inner.css("cursor", "pointer").bind("click.fb", function (c) {
        if (!d(c.target).is("a") && !d(c.target).parent().is("a")) a[b.closeClick ? "close" : "next"]();
      }), b.closeBtn && d(b.tpl.closeBtn).appendTo(a.skin).bind("click.fb", a.close), b.arrows && 1 < a.group.length && ((b.loop || 0 < b.index) && d(b.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (b.loop || b.index < a.group.length - 1) && d(b.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.opts.autoPlay && !a.player.isActive)) a.opts.autoPlay = !1, a.play();
    }, _afterZoomOut: function _afterZoomOut() {
      var b = a.current;a.wrap.trigger("onReset").remove();d.extend(a, { group: {}, opts: {}, current: null, isActive: !1, isOpened: !1, isOpen: !1, wrap: null, skin: null, outer: null, inner: null });a.trigger("afterClose", b);
    } });a.transitions = { getOrigPosition: function getOrigPosition() {
      var b = a.current,
          c = b.element,
          e = b.padding,
          f = d(b.orig),
          g = {},
          i = 50,
          h = 50;!f.length && b.isDom && d(c).is(":visible") && (f = d(c).find("img:first"), f.length || (f = d(c)));f.length ? (g = f.offset(), f.is("img") && (i = f.outerWidth(), h = f.outerHeight())) : (b = a.getViewport(), g.top = b.y + 0.5 * (b.h - h), g.left = b.x + 0.5 * (b.w - i));return g = { top: n(g.top - e), left: n(g.left - e), width: n(i + 2 * e), height: n(h + 2 * e) };
    }, step: function step(b, c) {
      var e = c.prop,
          d,
          g;if ("width" === e || "height" === e) d = Math.ceil(b - 2 * a.current.padding), "height" === e && (g = (b - c.start) / (c.end - c.start), c.start > c.end && (g = 1 - g), d -= a.innerSpace * g), a.inner[e](d);
    }, zoomIn: function zoomIn() {
      var b = a.wrap,
          c = a.current,
          e = c.openEffect,
          f = "elastic" === e,
          g = d.extend({}, c.dim, a._getPosition(f)),
          i = d.extend({ opacity: 1 }, g);delete i.position;f ? (g = this.getOrigPosition(), c.openOpacity && (g.opacity = 0), a.outer.add(a.inner).width("auto").height("auto")) : "fade" === e && (g.opacity = 0);b.css(g).show().animate(i, { duration: "none" === e ? 0 : c.openSpeed, easing: c.openEasing, step: f ? this.step : null, complete: a._afterZoomIn });
    }, zoomOut: function zoomOut() {
      var b = a.wrap,
          c = a.current,
          d = c.openEffect,
          f = "elastic" === d,
          g = { opacity: 0 };f && ("fixed" === b.css("position") && b.css(a._getPosition(!0)), g = this.getOrigPosition(), c.closeOpacity && (g.opacity = 0));b.animate(g, { duration: "none" === d ? 0 : c.closeSpeed, easing: c.closeEasing, step: f ? this.step : null, complete: a._afterZoomOut });
    }, changeIn: function changeIn() {
      var b = a.wrap,
          c = a.current,
          d = c.nextEffect,
          f = "elastic" === d,
          g = a._getPosition(f),
          i = { opacity: 1 };g.opacity = 0;f && (g.top = n(parseInt(g.top, 10) - 200), i.top = "+=200px");b.css(g).show().animate(i, { duration: "none" === d ? 0 : c.nextSpeed, easing: c.nextEasing, complete: a._afterZoomIn });
    }, changeOut: function changeOut() {
      var b = a.wrap,
          c = a.current,
          e = c.prevEffect,
          f = { opacity: 0 };b.removeClass("fancybox-opened");
      "elastic" === e && (f.top = "+=200px");b.animate(f, { duration: "none" === e ? 0 : c.prevSpeed, easing: c.prevEasing, complete: function complete() {
          d(this).trigger("onReset").remove();
        } });
    } };a.helpers.overlay = { overlay: null, update: function update() {
      var a, c;this.overlay.width("100%").height("100%");d.browser.msie || k ? (a = Math.max(l.documentElement.scrollWidth, l.body.scrollWidth), c = Math.max(l.documentElement.offsetWidth, l.body.offsetWidth), a = a < c ? m.width() : a) : a = q.width();this.overlay.width(a).height(q.height());
    }, beforeShow: function beforeShow(b) {
      this.overlay || (b = d.extend(!0, {}, a.defaults.helpers.overlay, b), this.overlay = d('<div id="fancybox-overlay"></div>').css(b.css).appendTo("body"), b.closeClick && this.overlay.bind("click.fb", a.close), a.current.fixed && !k ? this.overlay.addClass("overlay-fixed") : (this.update(), this.onUpdate = function () {
        this.update();
      }), this.overlay.fadeTo(b.speedIn, b.opacity));
    }, afterClose: function afterClose(a) {
      this.overlay && this.overlay.fadeOut(a.speedOut || 0, function () {
        d(this).remove();
      });this.overlay = null;
    } };a.helpers.title = { beforeShow: function beforeShow(b) {
      var c;
      if (c = a.current.title) c = d('<div class="fancybox-title fancybox-title-' + b.type + '-wrap">' + c + "</div>").appendTo("body"), "float" === b.type && (c.width(c.width()), c.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(parseInt(c.css("margin-bottom"), 10))), c.appendTo("over" === b.type ? a.inner : "outside" === b.type ? a.wrap : a.skin);
    } };d.fn.fancybox = function (b) {
    var c = d(this),
        e = this.selector || "",
        f,
        g = function g(_g) {
      var h = this,
          j = f,
          k;!_g.ctrlKey && !_g.altKey && !_g.shiftKey && !_g.metaKey && !d(h).is(".fancybox-wrap") && (_g.preventDefault(), _g = b.groupAttr || "data-fancybox-group", k = d(h).attr(_g), k || (_g = "rel", k = h[_g]), k && "" !== k && "nofollow" !== k && (h = e.length ? d(e) : c, h = h.filter("[" + _g + '="' + k + '"]'), j = h.index(this)), b.index = j, a.open(h, b));
    },
        b = b || {};f = b.index || 0;e ? q.undelegate(e, "click.fb-start").delegate(e, "click.fb-start", g) : c.unbind("click.fb-start").bind("click.fb-start", g);return this;
  };d(l).ready(function () {
    a.defaults.fixed = d.support.fixedPosition || !(d.browser.msie && 6 >= d.browser.version) && !k;
  });
})(window, document, jQuery);

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//EASING
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright � 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad',
	swing: function swing(x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function easeInQuad(x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function easeOutQuad(x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * (--t * (t - 2) - 1) + b;
	},
	easeInCubic: function easeInCubic(x, t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeOutCubic: function easeOutCubic(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInQuart: function easeInQuart(x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutQuart: function easeOutQuart(x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInQuint: function easeInQuint(x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeOutQuint: function easeOutQuint(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInSine: function easeInSine(x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeOutSine: function easeOutSine(x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeInOutSine: function easeInOutSine(x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInExpo: function easeInExpo(x, t, b, c, d) {
		return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeOutExpo: function easeOutExpo(x, t, b, c, d) {
		return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function easeInCirc(x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeOutCirc: function easeOutCirc(x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInElastic: function easeInElastic(x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeOutElastic: function easeOutElastic(x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d / 2) == 2) return b + c;if (!p) p = d * (.3 * 1.5);
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	easeInBack: function easeInBack(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutBack: function easeOutBack(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	},
	easeInBounce: function easeInBounce(x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	},
	easeOutBounce: function easeOutBounce(x, t, b, c, d) {
		if ((t /= d) < 1 / 2.75) {
			return c * (7.5625 * t * t) + b;
		} else if (t < 2 / 2.75) {
			return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
		} else if (t < 2.5 / 2.75) {
			return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
		} else {
			return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
		}
	},
	easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright � 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/***/ })

/******/ });