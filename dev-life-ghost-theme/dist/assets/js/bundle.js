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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    'use strict';

    var $document = $(document);

    $document.ready(function () {
        var $postContent = $('.post-content');
        $postContent.fitVids();

        $('.scroll-down').arctic_scroll();

        $('.menu-button, .nav-cover, .nav-close').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('nav-opened nav-closed');
        });
    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {
        var defaults = {
            elem: this,
            $elem: $(this),
            speed: 500
        };
        var allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            var el = defaults.elem;
            var $this = defaults.$elem;
            var $htmlBody = $('html, body');
            var offset = $this.attr('data-offset') ? $this.attr('data-offset') : false;
            var position = $this.attr('data-position') ? $this.attr('data-position') : false;
            var toMove = void 0;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({ scrollTop: $(el.hash).offset().top + toMove }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({ scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({ scrollTop: $(el.hash).offset().top }, allOptions.speed);
            }
        });
    };
})(jQuery);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!./screen.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!./screen.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(1);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\n   Table of Contents\n   ========================================================================== */\n\n/*\n\n    0.  Normalize\n    1.  Icons\n    2.  General\n    3.  Utilities\n    4.  General\n    5.  Single Post\n    6.  Author Profile\n    7.  Read More\n    8.  Third Party Elements\n    9.  Pagination\n    10. Subscribe\n    11. Footer\n    12. Media Queries (Tablet)\n    13. Media Queries (Mobile)\n    14. Animations\n\n*/\n\n/* ==========================================================================\n   0. normalize.css v3.0.3 | MIT License | git.io/normalize | (minified)\n   ========================================================================== */\n\nhtml {\n    font-family: sans-serif;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%\n}\nbody { margin: 0; }\narticle, aside, details,\nfigcaption, figure,\nfooter, header,\nmain, menu, nav,\nsection, summary { display:block; }\naudio, canvas, progress, video {\n    display: inline-block;\n    vertical-align: baseline;\n}\naudio:not([controls]) { display: none; height: 0; }\n[hidden], template { display: none; }\na { background-color: transparent;}\na:active, a:hover { outline: 0; }\nabbr[title] { border-bottom: 1px dotted; }\nb, strong { font-weight: bold; }\ndfn { font-style: italic; }\nh1 { font-size: 2em; margin: 0.67em 0; }\nmark { background: #ff0; color: #000; }\nsmall { font-size: 80%; }\nsub, sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\nsup { top: -0.5em; }\nsub { bottom: -0.25em; }\nimg { border: 0; }\nsvg:not(:root) { overflow: hidden; }\nfigure { margin: 1em 40px; }\nhr { box-sizing: content-box; height: 0; }\npre { overflow: auto; }\ncode, kbd, pre, samp { font-family: monospace, monospace; font-size: 1em; }\nbutton, input, optgroup, select, textarea {\n    color: inherit;\n    font: inherit;\n    margin: 0;\n}\nbutton { overflow: visible; }\nbutton, select { text-transform: none; }\nbutton, html input[type=\"button\"],\ninput[type=\"reset\"], input[type=\"submit\"] {\n    -webkit-appearance: button;\n    cursor: pointer;\n}\nbutton[disabled], html input[disabled] { cursor: default; }\nbutton::-moz-focus-inner, input::-moz-focus-inner { border: 0; padding: 0; }\ninput { line-height: normal; }\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] { box-sizing: border-box; padding: 0; }\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button { height: auto; }\ninput[type=\"search\"] { -webkit-appearance: textfield; }\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration { -webkit-appearance: none; }\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\nlegend { border: 0; padding: 0; }\ntextarea { overflow: auto; }\noptgroup { font-weight: bold; }\ntable{ border-collapse: collapse; border-spacing: 0; }\ntd, th{ padding: 0; }\n\n\n/* ==========================================================================\n   1. Icons - Sets up the icon font and respective classes\n   ========================================================================== */\n\n/* Import the font file with the icons in it */\n@font-face {\n    font-family: \"casper-icons\";\n    src:url(" + __webpack_require__(0) + ");\n    src:url(" + __webpack_require__(0) + "#iefix) format(\"embedded-opentype\"),\n        url(" + __webpack_require__(10) + ") format(\"woff\"),\n        url(" + __webpack_require__(9) + ") format(\"truetype\"),\n        url(" + __webpack_require__(8) + "#icons) format(\"svg\");\n    font-weight: normal;\n    font-style: normal;\n}\n\n/* Apply these base styles to all icons */\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n    font-family: \"casper-icons\", \"Open Sans\", sans-serif;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    text-decoration: none !important;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n/* Each icon is created by inserting the correct character into the\n   content of the :before pseudo element. Like a boss. */\n.icon-ghost:before {\n    content: \"\\F600\";\n}\n.icon-feed:before {\n    content: \"\\F601\";\n}\n.icon-twitter:before {\n    content: \"\\F602\";\n    font-size: 1.1em;\n}\n.icon-google-plus:before {\n    content: \"\\F603\";\n}\n.icon-facebook:before {\n    content: \"\\F604\";\n}\n.icon-arrow-left:before {\n    content: \"\\F605\";\n}\n.icon-stats:before {\n    content: \"\\F606\";\n}\n.icon-location:before {\n    content: \"\\F607\";\n    margin-left: -3px; /* Tracking fix */\n}\n.icon-link:before {\n    content: \"\\F608\";\n}\n.icon-menu:before {\n    content: \"\\F609\";\n}\n/*\n    IMPORTANT: When making any changes to the icon font, be sure to increment\n    the version number by 1 in the @font-face rule. `?v=1` becomes `?v=2`\n    This forces browsers to download the new font file.\n*/\n\n\n/* ==========================================================================\n   2. General - Setting up some base styles\n   ========================================================================== */\n\nhtml {\n    height: 100%;\n    max-height: 100%;\n    font-size: 62.5%;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nbody {\n    height: 100%;\n    max-height: 100%;\n    font-family: \"Merriweather\", serif;\n    letter-spacing: 0.01rem;\n    font-size: 1.8rem;\n    line-height: 1.75em;\n    color: #3A4145;\n    -webkit-font-feature-settings: 'kern' 1;\n    -moz-font-feature-settings: 'kern' 1;\n    -o-font-feature-settings: 'kern' 1;\n    text-rendering: geometricPrecision;\n}\n\n::-moz-selection {\n    background: #D6EDFF;\n}\n\n::selection {\n    background: #D6EDFF;\n}\n\nh1, h2, h3,\nh4, h5, h6 {\n    -webkit-font-feature-settings: 'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1;\n    -moz-font-feature-settings: 'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1;\n    -o-font-feature-settings: 'dlig' 1, 'liga' 1, 'lnum' 1, 'kern' 1;\n    color: #2E2E2E;\n    line-height: 1.15em;\n    margin: 0 0 0.4em 0;\n    font-family: \"Open Sans\", sans-serif;\n    text-rendering: geometricPrecision;\n}\n\nh1 {\n    font-size: 5rem;\n    letter-spacing: -2px;\n    text-indent: -3px;\n}\n\nh2 {\n    font-size: 3.6rem;\n    letter-spacing: -1px;\n}\n\nh3 {\n    font-size: 3rem;\n    letter-spacing: -0.6px;\n}\n\nh4 {\n    font-size: 2.5rem;\n}\n\nh5 {\n    font-size: 2rem;\n}\n\nh6 {\n    font-size: 2rem;\n}\n\na {\n    color: #4A4A4A;\n    transition: color 0.3s ease;\n}\n\na:hover {\n    color: #111;\n}\n\np, ul, ol, dl {\n    -webkit-font-feature-settings: 'liga' 1, 'onum' 1, 'kern' 1;\n    -moz-font-feature-settings: 'liga' 1, 'onum' 1, 'kern' 1;\n    -o-font-feature-settings: 'liga' 1, 'onum' 1, 'kern' 1;\n    margin: 0 0 1.75em 0;\n    text-rendering: geometricPrecision;\n}\n\nol, ul {\n    padding-left: 3rem;\n}\n\nol ol, ul ul,\nul ol, ol ul {\n    margin: 0 0 0.4em 0;\n    padding-left: 2em;\n}\n\ndl dt {\n    float: left;\n    width: 180px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 700;\n    margin-bottom: 1em;\n}\n\ndl dd {\n    margin-left: 200px;\n    margin-bottom: 1em\n}\n\nli {\n    margin: 0.4em 0;\n}\n\nli li {\n    margin: 0;\n}\n\nli > p:last-of-type {\n    margin-bottom: 0;\n}\n\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: #EFEFEF 1px solid;\n    margin: 3.2em 0;\n    padding: 0;\n}\n\nblockquote {\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 1.75em 0 1.75em -2.2em;\n    padding: 0 0 0 1.75em;\n    border-left: #4A4A4A 0.4em solid;\n}\n\nblockquote p {\n    margin: 0.8em 0;\n    font-style: italic;\n}\n\nblockquote small {\n    display: inline-block;\n    margin: 0.8em 0 0.8em 1.5em;\n    font-size: 0.9em;\n    color: #CCC;\n}\n\nblockquote small:before { content: \"\\2014   \\A0\"; }\n\nblockquote cite {\n    font-weight: 700;\n}\n\nblockquote cite a { font-weight: normal; }\n\nmark {\n    background-color: #fdffb6;\n}\n\ncode, tt {\n    padding: 1px 3px;\n    font-family: Inconsolata, monospace, sans-serif;\n    font-size: 0.85em;\n    white-space: pre-wrap;\n    border: #E3EDF3 1px solid;\n    background: #F7FAFB;\n    border-radius: 2px;\n    -webkit-font-feature-settings: \"liga\" 0;\n    -moz-font-feature-settings: \"liga\" 0;\n    font-feature-settings: \"liga\" 0;\n}\n\npre {\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0 0 1.75em 0;\n    border: #E3EDF3 1px solid;\n    width: 100%;\n    padding: 10px;\n    font-family: Inconsolata, monospace, sans-serif;\n    font-size: 0.9em;\n    white-space: pre;\n    overflow: auto;\n    background: #F7FAFB;\n    border-radius: 3px;\n}\n\npre code, pre tt {\n    font-size: inherit;\n    white-space: pre-wrap;\n    background: transparent;\n    border: none;\n    padding: 0;\n}\n\nkbd {\n    display: inline-block;\n    margin-bottom: 0.4em;\n    padding: 1px 8px;\n    border: #CCC 1px solid;\n    color: #666;\n    text-shadow: #FFF 0 1px 0;\n    font-size: 0.9em;\n    font-weight: 700;\n    background: #F4F4F4;\n    border-radius: 4px;\n    box-shadow:\n        0 1px 0 rgba(0, 0, 0, 0.2),\n        0 1px 0 0 #fff inset;\n}\n\ntable {\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 1.75em 0;\n    width: 100%;\n    max-width: 100%;\n    background-color: transparent;\n}\n\ntable th,\ntable td {\n    padding: 8px;\n    line-height: 20px;\n    text-align: left;\n    vertical-align: top;\n    border-top: #EFEFEF 1px solid;\n}\n\ntable th { color: #000; }\n\ntable caption + thead tr:first-child th,\ntable caption + thead tr:first-child td,\ntable colgroup + thead tr:first-child th,\ntable colgroup + thead tr:first-child td,\ntable thead:first-child tr:first-child th,\ntable thead:first-child tr:first-child td {\n    border-top: 0;\n}\n\ntable tbody + tbody { border-top: #EFEFEF 2px solid; }\n\ntable table table { background-color: #FFF; }\n\ntable tbody > tr:nth-child(odd) > td,\ntable tbody > tr:nth-child(odd) > th {\n    background-color: #F6F6F6;\n}\n\ntable.plain tbody > tr:nth-child(odd) > td,\ntable.plain tbody > tr:nth-child(odd) > th {\n   background: transparent;\n}\n\niframe, .fluid-width-video-wrapper {\n    display: block;\n    margin: 1.75em 0;\n}\n\n/* When a video is inside the fitvids wrapper, drop the\nmargin on the iframe, cause it breaks stuff. */\n.fluid-width-video-wrapper iframe {\n    margin: 0;\n}\n\ntextarea, select, input {\n    width: 260px;\n    padding: 6px 9px;\n    margin: 0 0 5px 0;\n    outline: 0;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 1.6rem;\n    font-weight: 100;\n    line-height: 1.4em;\n    background: #fff;\n    border: #e7eef2 1px solid;\n    border-radius: 4px;\n    box-shadow: none;\n    -webkit-appearance: none;\n}\n\ntextarea {\n    width: 100%;\n    max-width: 340px;\n    min-width: 250px;\n    height: auto;\n    min-height: 80px;\n}\n\ninput[type=\"text\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ntextarea:focus {\n    border: #bbc7cc 1px solid;\n    background: #fff;\n    outline: none;\n    outline-width: 0;\n}\n\nselect {\n    width: 270px;\n    height: 30px;\n    line-height: 30px;\n}\n\nbutton {\n    min-height: 35px;\n    width: auto;\n    display: inline-block;\n    padding: 0.1rem 1.5rem;\n    cursor: pointer;\n    outline: none;\n    text-decoration: none;\n    color: #fff;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 11px; /* Hacks targeting Firefox. */\n    line-height: 13px; /* Hacks targeting Firefox. */\n    font-weight: 300;\n    text-align: center;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    text-shadow: none;\n    border-radius: 0.3rem;\n    border: rgba(0,0,0,0.05) 0.1em solid;\n    background: #5ba4e5;\n}\n\n\n/* ==========================================================================\n   3. Utilities - These things get used a lot\n   ========================================================================== */\n\n/* Clears shit */\n.clearfix:before,\n.clearfix:after {\n    content: \" \";\n    display: table;\n}\n.clearfix:after { clear: both; }\n.clearfix { zoom: 1; }\n\n/* Hides shit */\n.hidden {\n    text-indent: -9999px;\n    visibility: hidden;\n    display: none;\n}\n\n/* Creates a responsive wrapper that makes our content scale nicely */\n.inner {\n    position: relative;\n    width: 80%;\n    max-width: 710px;\n    margin: 0 auto;\n}\n\n/* Centres vertically yo. (IE8+) */\n.vertical {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n/* Wraps the main content & footer */\n.site-wrapper {\n    position: relative;\n    z-index: 10;\n    min-height: 100%;\n    background: #fff;\n    -webkit-transition: -webkit-transform 0.5s ease;\n            transition: transform 0.5s ease;\n}\n\nbody.nav-opened .site-wrapper {\n    overflow-x: hidden;\n    -webkit-transform: translate3D(-240px, 0, 0);\n        -ms-transform: translate3D(-240px, 0, 0);\n            transform: translate3D(-240px, 0, 0);\n    -webkit-transition: -webkit-transform 0.3s ease;\n            transition: transform 0.3s ease;\n}\n\n\n/* ==========================================================================\n   4. General - The main styles for the the theme\n   ========================================================================== */\n\n/* Big cover image on the home page */\n.main-header {\n    position: relative;\n    display: table;\n    width: 100%;\n    height: 100vh;\n    margin-bottom: 5rem;\n    text-align: center;\n    background: #222 no-repeat center center;\n    background-size: cover;\n    overflow: hidden;\n}\n\n.main-header .inner {\n    width: 80%;\n}\n\n.main-nav {\n    position: relative;\n    padding: 35px 40px;\n    margin: 0 0 30px 0;\n}\n\n.main-nav a {\n    text-decoration: none;\n    font-family: 'Open Sans', sans-serif;\n}\n\n/* Navigation */\nbody.nav-opened .nav-cover {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 240px;\n    bottom: 0;\n    z-index: 200;\n}\n\n.nav {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 5;\n    width: 240px;\n    opacity: 0;\n    background: #111;\n    margin-bottom: 0;\n    text-align: left;\n    overflow-y: auto;\n    -webkit-transition: -webkit-transform 0.5s ease,\n                        opacity 0.3s ease 0.7s;\n            transition: transform 0.5s ease,\n                        opacity 0.3s ease 0.7s;\n}\n\nbody.nav-closed .nav {\n    -webkit-transform: translate3D(97px, 0, 0);\n        -ms-transform: translate3D(97px, 0, 0);\n            transform: translate3D(97px, 0, 0);\n}\n\nbody.nav-opened .nav {\n    opacity: 1;\n    -webkit-transition: -webkit-transform 0.3s ease,\n                        opacity 0s ease 0s;\n            transition: transform 0.3s ease,\n                        opacity 0s ease 0s;\n    -webkit-transform: translate3D(0, 0, 0);\n        -ms-transform: translate3D(0, 0, 0);\n            transform: translate3D(0, 0, 0);\n}\n\n.nav-title {\n    position: absolute;\n    top: 45px;\n    left: 30px;\n    font-size: 16px;\n    font-weight: 100;\n    text-transform: uppercase;\n    color: #fff;\n}\n\n.nav-close {\n    position: absolute;\n    top: 38px;\n    right: 25px;\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    font-size: 10px;\n}\n\n.nav-close:focus {\n    outline: 0;\n}\n\n.nav-close:before,\n.nav-close:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    width: 20px;\n    height: 1px;\n    background: rgb(150,150,150);\n    top: 15px;\n    -webkit-transition: background 0.15s ease;\n            transition: background 0.15s ease;\n}\n\n.nav-close:before {\n    -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n\n.nav-close:after {\n    -webkit-transform: rotate(-45deg);\n        -ms-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n.nav-close:hover:before,\n.nav-close:hover:after {\n    background: rgb(255,255,255);\n}\n\n.nav ul {\n    padding: 90px 9% 5%;\n    list-style: none;\n    counter-reset: item;\n}\n\n.nav li:before {\n    display: block;\n    float: right;\n    padding-right: 4%;\n    padding-left: 5px;\n    text-align: right;\n    font-size: 1.2rem;\n    vertical-align: bottom;\n    color: #B8B8B8;\n    content: counter(item, lower-roman);\n    counter-increment: item;\n}\n.nav li {\n    margin: 0;\n}\n.nav li a {\n    text-decoration: none;\n    line-height: 1.4;\n    font-size: 1.4rem;\n    display: block;\n    padding: 0.6rem 4%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.nav li a:after {\n    display: inline-block;\n    content: \" .......................................................\";\n    color: rgba(255,255,255,0.2);\n    margin-left: 5px;\n}\n.nav .nav-current:before {\n    color: #fff;\n}\n.nav .nav-current a:after {\n    content: \" \";\n    border-bottom: rgba(255,255,255,0.5) 1px solid;\n    width: 100%;\n    height: 1px;\n}\n\n.nav a:link,\n.nav a:visited {\n    color: #B8B8B8;\n}\n\n.nav li.nav-current a,\n.nav a:hover,\n.nav a:active,\n.nav a:focus {\n    color: #fff;\n}\n\n.subscribe-button {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    bottom: 30px;\n    left: 30px;\n    right: 30px;\n    height: 38px;\n    padding: 0 20px;\n    color: #111 !important; /* Overides `.nav a:link, .nav a:visited` colour */\n    text-align: center;\n    font-size: 12px;\n    font-family: \"Open Sans\", sans-serif;\n    text-transform: uppercase;\n    text-decoration: none;\n    line-height: 35px;\n    border-radius: 3px;\n    background: #fff;\n    transition: all ease 0.3s;\n}\n.subscribe-button:before {\n    font-size: 9px;\n    margin-right: 6px;\n}\n\n\n/* Create a bouncing scroll-down arrow on homepage with cover image */\n.scroll-down {\n    display: block;\n    position: absolute;\n    z-index: 100;\n    bottom: 45px;\n    left: 50%;\n    margin-left: -16px;\n    width: 34px;\n    height: 34px;\n    font-size: 34px;\n    text-align: center;\n    text-decoration: none;\n    color: rgba(255,255,255,0.7);\n    -webkit-transform: rotate(-90deg);\n    -ms-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    -webkit-animation: bounce 4s 2s infinite;\n    animation: bounce 4s 2s infinite;\n}\n\n/* Stop it bouncing and increase contrast when hovered */\n.scroll-down:hover {\n    color: #fff;\n    -webkit-animation: none;\n    animation: none;\n}\n\n/* Put a semi-opaque radial gradient behind the icon to make it more visible\n   on photos which happen to have a light background. */\n.home-template .main-header:after {\n    display: block;\n    content: \" \";\n    width: 150px;\n    height: 130px;\n    border-radius: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    background: radial-gradient(ellipse at center,  rgba(0,0,0,0.15) 0%,rgba(0,0,0,0) 70%,rgba(0,0,0,0) 100%);\n}\n\n/* Hide when there's no cover image or on page2+ */\n.no-cover .scroll-down,\n.no-cover.main-header:after,\n.paged .scroll-down,\n.paged .main-header:after {\n    display: none\n}\n\n/* Appears in the top left corner of your home page */\n.blog-logo {\n    display: block;\n    float: left;\n    background: none !important; /* Makes sure there is never a background */\n    border: none !important; /* Makes sure there is never a border */\n}\n\n.blog-logo img {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    display: block;\n    height: 38px;\n    padding: 1px 0 5px 0;\n    width: auto;\n}\n\n.menu-button {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    display: inline-block;\n    float: right;\n    height: 38px;\n    padding: 0 15px;\n    border-style: solid;\n    border-width: 1px;\n    opacity: 1;\n    text-align: center;\n    font-size: 12px;\n    text-transform: uppercase;\n    line-height: 35px;\n    white-space: nowrap;\n    border-radius: 3px;\n    transition: all 0.5s ease;\n}\n.menu-button:before {\n    font-size: 12px;\n    font-weight: bold;\n    margin-right: 6px;\n    position: relative;\n    top: 1px;\n}\n.menu-button:hover {\n    background: #fff;\n}\n.menu-button:focus {\n    outline: 0;\n}\n\n/* When the navigation is closed */\n.nav-closed .menu-button {\n    color: #fff;\n    border-color: rgba(255, 255, 255, 0.6);\n}\n.nav-closed .menu-button:hover {\n    color: #222;\n}\n\n/* When the navigation is closed and there is no cover image */\n.nav-closed .no-cover .menu-button {\n    border-color: #BFC8CD;\n    color: #9EABB3;\n}\n.nav-closed .no-cover .menu-button:hover {\n    border-color: #555;\n    color: #555;\n}\n\n/* When the navigation is opened */\n.nav-opened .menu-button {\n    padding: 0 12px;\n    background: #111;\n    border-color: #111;\n    color: #fff;\n    -webkit-transform: translate3D(94px, 0, 0);\n        -ms-transform: translate3D(94px, 0, 0);\n            transform: translate3D(94px, 0, 0);\n    transition: all 0.3s ease;\n}\n\n.nav-opened .menu-button .word {\n    opacity: 0;\n    transition: all 0.3s ease;\n}\n\n/* Special styles when overlaid on an image*/\n.main-nav.overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 70px;\n    border: none;\n    background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 100%);\n}\n.no-cover .main-nav.overlay {\n    background: none;\n}\n\n/* The details of your blog. Defined in ghost/settings/ */\n.page-title {\n    margin: 10px 0 10px 0;\n    font-size: 5rem;\n    letter-spacing: -1px;\n    font-weight: 700;\n    font-family: \"Open Sans\", sans-serif;\n    color: #fff;\n}\n\n.page-description {\n    margin: 0;\n    font-size: 2rem;\n    line-height: 1.5em;\n    font-weight: 400;\n    font-family: \"Merriweather\", serif;\n    letter-spacing: 0.01rem;\n    color: rgba(255,255,255,0.8);\n}\n\n.no-cover.main-header {\n    min-height: 160px;\n    max-height: 40vh;\n    background: #f5f8fa;\n}\n\n.no-cover .page-title {\n    color: rgba(0,0,0,0.8);\n}\n\n.no-cover .page-description {\n    color: rgba(0,0,0,0.5);\n}\n\n/* Add subtle load-in animation for content on the home page */\n.home-template .page-title {\n    -webkit-animation: fade-in-down 0.6s;\n    animation: fade-in-down 0.6s both;\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n.home-template .page-description {\n    -webkit-animation: fade-in-down 0.9s;\n    animation: fade-in-down 0.9s both;\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n\n/* Every post, on every page, gets this style on its <article> tag */\n.post {\n    position: relative;\n    width: 80%;\n    max-width: 710px;\n    margin: 4rem auto;\n    padding-bottom: 4rem;\n    border-bottom: #EBF2F6 1px solid;\n    word-wrap: break-word;\n}\n\n/* Add a little circle in the middle of the border-bottom on our .post\n   just for the lolz and stylepoints. */\n.post:after {\n    display: block;\n    content: \"\";\n    width: 7px;\n    height: 7px;\n    border: #E7EEF2 1px solid;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    margin-left: -5px;\n    background: #FFF;\n    border-radius: 100%;\n    box-shadow: #FFF 0 0 0 5px;\n}\n\nbody:not(.post-template) .post-title {\n    font-size: 3.6rem;\n}\n\nbody.page-template .post-title {\n    font-size: 5rem;\n}\n\n.post-title a {\n    text-decoration: none;\n}\n\n.post-excerpt p {\n    margin: 0;\n    font-size: 0.9em;\n    line-height: 1.7em;\n}\n\n.read-more {\n    text-decoration: none;\n}\n\n.post-meta {\n    display: block;\n    margin: 1.75rem 0 0 0;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1.5rem;\n    line-height: 2.2rem;\n    color: #9EABB3;\n}\n\n.author-thumb {\n    width: 24px;\n    height: 24px;\n    float: left;\n    margin-right: 9px;\n    border-radius: 100%;\n}\n\n.post-meta a {\n    color: #9EABB3;\n    text-decoration: none;\n}\n\n.post-meta a:hover {\n    text-decoration: underline;\n}\n\n.user-meta {\n    position: relative;\n    padding: 0.3rem 40px 0 100px;\n    min-height: 77px;\n}\n\n.post-date {\n    display: inline-block;\n    margin-left: 8px;\n    padding-left: 12px;\n    border-left: #d5dbde 1px solid;\n    text-transform: uppercase;\n    font-size: 1.3rem;\n    white-space: nowrap;\n}\n\n.user-image {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.user-name {\n    display: block;\n    font-weight: 700;\n}\n\n.user-bio {\n    display: block;\n    max-width: 440px;\n    font-size: 1.4rem;\n    line-height: 1.5em;\n}\n\n.publish-meta {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 4.3rem 0 4rem 0;\n    text-align: right;\n}\n\n.publish-heading {\n    display: block;\n    font-weight: 700;\n}\n\n.publish-date {\n    display: block;\n    font-size: 1.4rem;\n    line-height: 1.5em;\n}\n\n\n/* ==========================================================================\n   5. Single Post - When you click on an individual post\n   ========================================================================== */\n\n.post-template .post-header,\n.page-template .post-header {\n   margin-bottom: 3.4rem;\n}\n\n.post-template .post-title,\n.page-template .post-title {\n    margin-bottom: 0;\n}\n\n.post-template .post-meta,\n.page-template .post-meta {\n    margin: 0;\n}\n\n.post-template .post-date,\n.page-template .post-date {\n    padding: 0;\n    margin: 0;\n    border: none;\n}\n\n/* Stop elements, such as img wider than the post content, from\n   creating horizontal scroll - slight hack due to imperfections\n   with browser width % calculations and rounding */\n.post-template .content,\n.page-template .content {\n    overflow: hidden;\n}\n\n/* Tweak the .post wrapper style */\n.post-template .post,\n.page-template .post {\n    margin-top: 0;\n    border-bottom: none;\n    padding-bottom: 0;\n}\n\n/* Kill that stylish little circle that was on the border, too */\n.post-template .post:after,\n.page-template .post:after {\n    display: none;\n}\n\n/* Keep images centered, and allow images wider than the main\n   text column to break out. */\n.post-content img {\n    display: block;\n    max-width: 126%;\n    height: auto;\n    padding: 0.6em 0;\n    /* Centers an image by (1) pushing its left edge to the\n       center of its container and (2) shifting the entire image\n       in the opposite direction by half its own width.\n       Works for images that are larger than their containers. */\n    position: relative;\n    left: 50%;\n    -webkit-transform: translateX(-50%); /* for Safari and iOS */\n    -ms-transform: translateX(-50%); /* for IE9 */\n    transform: translateX(-50%);\n}\n\n.footnotes {\n    font-style: italic;\n    font-size: 1.3rem;\n    line-height: 1.6em;\n}\n\n.footnotes li {\n    margin: 0.6rem 0;\n}\n\n.footnotes p {\n    margin: 0;\n}\n\n.footnotes p a:last-child {\n    text-decoration: none;\n}\n\n\n/* The author credit area after the post */\n.post-footer {\n    position: relative;\n    margin: 6rem 0 0 0;\n    padding: 3rem 0 0 0;\n    border-top: #EBF2F6 1px solid;\n}\n\n.post-footer h4 {\n    font-size: 1.8rem;\n    margin: 0;\n}\n\n.post-footer p {\n    margin: 1rem 0;\n    font-size: 1.4rem;\n    line-height: 1.75em;\n}\n\n/* list of author links - location / url */\n.author-meta {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    font-size: 1.4rem;\n    line-height: 1;\n    font-style: italic;\n    color: #9EABB3;\n}\n\n.author-meta a {\n    color: #9EABB3;\n}\n.author-meta a:hover {\n    color: #111;\n}\n\n/* Create some space to the right for the share links */\n.post-footer .author {\n    margin-right: 180px;\n}\n\n.post-footer h4 a {\n    color: #2e2e2e;\n    text-decoration: none;\n}\n\n.post-footer h4 a:hover {\n    text-decoration: underline;\n}\n\n/* Drop the share links in the space to the right.\n   Doing it like this means it's easier for the author bio\n   to be flexible at smaller screen sizes while the share\n   links remain at a fixed width the whole time */\n.post-footer .share {\n    position: absolute;\n    top: 3rem;\n    right: 0;\n    width: 140px;\n}\n\n.post-footer .share a {\n    font-size: 1.8rem;\n    display: inline-block;\n    margin: 1rem 1.6rem 1.6rem 0;\n    color: #BBC7CC;\n    text-decoration: none;\n}\n\n.post-footer .share .icon-twitter:hover {\n    color: #55acee;\n}\n.post-footer .share .icon-facebook:hover {\n    color: #3b5998;\n}\n.post-footer .share .icon-google-plus:hover {\n    color: #dd4b39;\n}\n\n\n/* ==========================================================================\n   6. Author profile\n   ========================================================================== */\n\n.post-head.main-header {\n    height: 65vh;\n    min-height: 180px;\n}\n\n.no-cover.post-head.main-header {\n    height: 85px;\n    min-height: 0;\n    margin-bottom: 0;\n    background: transparent;\n}\n\n.tag-head.main-header {\n    height: 40vh;\n    min-height: 180px;\n}\n\n.author-head.main-header {\n    height: 40vh;\n    min-height: 180px;\n}\n\n.no-cover.author-head.main-header {\n    height: 10vh;\n    min-height: 100px;\n    background: transparent;\n}\n\n.author-profile {\n    padding: 0 15px 5rem 15px;\n    border-bottom: #EBF2F6 1px solid;\n    text-align: center;\n}\n\n/* Add a little circle in the middle of the border-bottom */\n.author-profile:after {\n    display: block;\n    content: \"\";\n    width: 7px;\n    height: 7px;\n    border: #E7EEF2 1px solid;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    margin-left: -5px;\n    background: #FFF;\n    border-radius: 100%;\n    box-shadow: #FFF 0 0 0 5px;\n}\n\n.author-image {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    top: -40px;\n    left: 50%;\n    margin-left: -40px;\n    width: 80px;\n    height: 80px;\n    border-radius: 100%;\n    overflow: hidden;\n    padding: 6px;\n    background: #fff;\n    z-index: 2;\n    box-shadow: #E7EEF2 0 0 0 1px;\n}\n\n.author-image .img {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center center;\n    border-radius: 100%;\n}\n\n.author-profile .author-image {\n    position: relative;\n    left: auto;\n    top: auto;\n    width: 120px;\n    height: 120px;\n    padding: 3px;\n    margin: -100px auto 0 auto;\n    box-shadow: none;\n}\n\n.author-title {\n    margin: 1.5rem 0 1rem;\n}\n\n.author-bio {\n    font-size: 1.8rem;\n    line-height: 1.5em;\n    font-weight: 200;\n    color: #50585D;\n    letter-spacing: 0;\n    text-indent: 0;\n}\n\n.author-meta {\n    margin: 1.6rem 0;\n}\n/* Location, website, and link */\n.author-profile .author-meta {\n    margin: 2rem 0;\n    font-family: \"Merriweather\", serif;\n    letter-spacing: 0.01rem;\n    font-size: 1.7rem;\n}\n.author-meta span {\n    display: inline-block;\n    margin: 0 2rem 1rem 0;\n    word-wrap: break-word;\n}\n.author-meta a {\n    text-decoration: none;\n}\n\n/* Turn off meta for page2+ to make room for extra\n   pagination prev/next links */\n.paged .author-profile .author-meta {\n    display: none;\n}\n\n\n/* ==========================================================================\n   7. Read More - Next/Prev Post Links\n   ========================================================================== */\n\n.read-next {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    margin-top: 10rem;\n}\n\n.read-next-story {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    min-width: 50%;\n    text-decoration: none;\n    position: relative;\n    text-align: center;\n    color: #fff;\n    background: #222 no-repeat center center;\n    background-size: cover;\n    overflow: hidden;\n}\n.read-next-story:hover:before {\n    background: rgba(0,0,0,0.8);\n    transition: all 0.2s ease;\n}\n.read-next-story:hover .post:before {\n    color: #222;\n    background: #fff;\n    transition: all 0.2s ease;\n}\n\n.read-next-story:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0,0,0,0.7);\n    transition: all 0.5s ease;\n}\n\n.read-next-story .post {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n}\n\n.read-next-story .post:before {\n    content: \"Read This Next\";\n    padding: 4px 10px 5px;\n    text-transform: uppercase;\n    font-size: 1.1rem;\n    font-family: \"Open Sans\", sans-serif;\n    color: rgba(255,255,255,0.8);\n    border: rgba(255,255,255,0.5) 1px solid;\n    border-radius: 4px;\n    transition: all 0.5s ease;\n}\n.read-next-story.prev .post:before {\n    content: \"You Might Enjoy\";\n}\n\n.read-next-story h2 {\n    margin-top: 1rem;\n    color: #fff;\n}\n\n.read-next-story p {\n    margin: 0;\n    color: rgba(255,255,255,0.8);\n}\n\n/* Special styles for posts with no cover images */\n.read-next-story.no-cover {\n    background: #f5f8fa;\n}\n\n.read-next-story.no-cover:before {\n    display: none;\n}\n\n.read-next-story.no-cover .post:before {\n    color: rgba(0,0,0,0.5);\n    border-color: rgba(0,0,0,0.2);\n}\n\n.read-next-story.no-cover h2 {\n    color: rgba(0,0,0,0.8);\n}\n\n.read-next-story.no-cover p {\n    color: rgba(0,0,0,0.5);\n}\n\n/* if there are two posts without covers, put a border between them */\n.read-next-story.no-cover + .read-next-story.no-cover {\n    border-left: rgba(0,0,100,0.04) 1px solid;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n/* Correctly position site-footer when next to the .read-next container */\n.read-next + .site-footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: 0;\n}\n\n/* ==========================================================================\n   8. Third Party Elements - Embeds from other services\n   ========================================================================== */\n\n/* Github */\n.gist table {\n    margin: 0;\n    font-size: 1.4rem;\n    text-rendering: auto;\n}\n.gist td {\n    line-height: 1.4;\n}\n.gist .line-number {\n    min-width: 25px;\n}\n\n/* Pastebin */\n.content .embedPastebin {\n    margin-bottom: 1.75em;\n}\n\n\n/* ==========================================================================\n   9. Pagination - Tools to let you flick between pages\n   ========================================================================== */\n\n/* The main wrapper for our pagination links */\n.pagination {\n    position: relative;\n    width: 80%;\n    max-width: 710px;\n    margin: 4rem auto;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1.3rem;\n    color: #9EABB3;\n    text-align: center;\n}\n\n.pagination a {\n    color: #9EABB3;\n    transition: all 0.2s ease;\n}\n\n/* Push the previous/next links out to the left/right */\n.older-posts,\n.newer-posts {\n    position: absolute;\n    display: inline-block;\n    padding: 0 15px;\n    border: #bfc8cd 1px solid;\n    text-decoration: none;\n    border-radius: 4px;\n    transition: border 0.3s ease;\n}\n\n.older-posts {\n    right: 0;\n}\n\n.page-number {\n    display: inline-block;\n    padding: 2px 0;\n    min-width: 100px;\n}\n\n.newer-posts {\n    left: 0;\n}\n\n.older-posts:hover,\n.newer-posts:hover {\n    color: #889093;\n    border-color: #98a0a4;\n}\n\n.extra-pagination {\n    display: none;\n    border-bottom: #EBF2F6 1px solid;\n}\n.extra-pagination:after {\n    display: block;\n    content: \"\";\n    width: 7px;\n    height: 7px;\n    border: #E7EEF2 1px solid;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    margin-left: -5px;\n    background: #FFF;\n    border-radius: 100%;\n    box-shadow: #FFF 0 0 0 5px;\n}\n.extra-pagination .pagination {\n    width: auto;\n}\n\n/* On page2+ make all the headers smaller */\n.paged .main-header {\n    max-height: 30vh;\n}\n\n/* On page2+ show extra pagination controls at the top of post list */\n.paged .extra-pagination {\n    display: block;\n}\n\n\n/* ==========================================================================\n   10. Subscribe - Generate those email subscribers\n   ========================================================================== */\n\n.gh-subscribe {\n    border: #e7eef2 1px solid;\n    padding: 3rem;\n    margin-top: 3rem;\n    text-align: center;\n    background: #f5f8fa;\n    border-radius: 5px;\n}\n\n.gh-subscribe-title {\n    margin-bottom: 0;\n    font-size: 2.4rem\n}\n\n.gh-subscribe p {\n    margin-top: 0;\n    font-size: 1.5rem;\n}\n\n.gh-subscribe form {\n    display: flex;\n    justify-content: center;\n    margin: 20px 0 0 0;\n}\n\n.gh-subscribe .form-group {\n    flex-grow: 1;\n    max-width: 300px;\n}\n\n.gh-subscribe .subscribe-email {\n    box-sizing: border-box;\n    width: 100%;\n    margin: 0;\n    border-radius: 4px 0 0 4px;\n    transition: all ease 0.5s;\n}\n\n.gh-subscribe .subscribe-email:focus {\n    border: #5ba4e5 1px solid;\n    transition: all ease 0.2s;\n}\n\n.gh-subscribe button {\n    margin-left: -1px;\n    border-radius: 0 4px 4px 0;\n}\n\n.gh-subscribe-rss {\n    font-family: 'Open Sans', sans-serif;\n    font-size: 1.2rem;\n    line-height: 1.4em;\n}\n\n/* ==========================================================================\n   11. Footer - The bottom of every page\n   ========================================================================== */\n\n.site-footer {\n    position: relative;\n    margin: 8rem 0 0 0;\n    padding: 1rem 15px;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1rem;\n    line-height: 1.75em;\n    color: #BBC7CC;\n}\n\n.site-footer a {\n    color: #BBC7CC;\n    text-decoration: none;\n    font-weight: bold;\n}\n\n.site-footer a:hover {\n    border-bottom: #bbc7cc 1px solid;\n}\n\n.poweredby {\n    display: block;\n    width: 45%;\n    float: right;\n    text-align: right;\n}\n\n.copyright {\n    display: block;\n    width: 45%;\n    float: left;\n}\n\n\n/* ==========================================================================\n   12. Media Queries - Smaller than 900px\n   ========================================================================== */\n\n@media only screen and (max-width: 900px) {\n\n    blockquote {\n        margin-left: 0;\n    }\n\n    .main-header {\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n        height: auto;\n        min-height: 240px;\n        height: 60vh;\n        padding: 15% 0;\n    }\n\n    .scroll-down,\n    .home-template .main-header:after { display: none; }\n\n    .paged .main-header {\n        min-height: 180px;\n        padding: 10% 0;\n    }\n\n    .blog-logo img {\n        padding: 4px 0;\n    }\n\n    .page-title {\n        font-size: 4rem;\n        letter-spacing: -1px;\n    }\n\n    .page-description {\n        font-size: 1.8rem;\n        line-height: 1.5em;\n    }\n\n    .post {\n        font-size: 0.95em\n    }\n\n    body:not(.post-template) .post-title {\n        font-size: 3.2rem;\n    }\n\n    body.page-template .post-title {\n        font-size: 4.5rem;\n    }\n\n    hr {\n        margin: 2.4em 0;\n    }\n\n    ol, ul {\n        padding-left: 2em;\n    }\n\n    h1 {\n        font-size: 4.5rem;\n        text-indent: -2px;\n    }\n\n    h2 {\n        font-size: 3.6rem;\n    }\n\n    h3 {\n        font-size: 3.1rem;\n    }\n\n    h4 {\n        font-size: 2.5rem;\n    }\n\n    h5 {\n        font-size: 2.2rem;\n    }\n\n    h6 {\n        font-size: 1.8rem;\n    }\n\n    .author-profile {\n        padding-bottom: 4rem;\n    }\n\n    .author-profile .author-bio {\n        font-size: 1.6rem;\n    }\n\n    .author-meta span {\n        display: block;\n        margin: 1.5rem 0;\n    }\n    .author-profile .author-meta span {\n        font-size: 1.6rem;\n    }\n\n    .post-head.main-header {\n        height:45vh;\n    }\n\n    .tag-head.main-header,\n    .author-head.main-header {\n        height: 30vh;\n    }\n\n    .no-cover.post-head.main-header {\n        height: 55px;\n        padding: 0;\n    }\n\n    .no-cover.author-head.main-header {\n        padding: 0;\n    }\n\n    .gh-subscribe {\n        padding: 2rem;\n    }\n\n    .gh-subscribe-title {\n        font-size: 2rem\n    }\n\n    .gh-subscribe p {\n        font-size: 1.4rem;\n    }\n\n    .read-next {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        margin-top: 4rem;\n    }\n\n    .read-next p {\n        display: none;\n    }\n\n    .read-next-story.no-cover + .read-next-story.no-cover {\n        border-top: rgba(0,0,100,0.06) 1px solid;\n        border-left: none;\n    }\n\n}\n\n\n/* ==========================================================================\n   13. Media Queries - Smaller than 500px\n   ========================================================================== */\n\n@media only screen and (max-width: 500px) {\n\n    .main-header {\n        margin-bottom: 15px;\n        height: 40vh;\n    }\n\n    .no-cover.main-header {\n        height: 30vh;\n    }\n\n    .paged .main-header {\n        max-height: 20vh;\n        min-height: 160px;\n        padding: 10% 0;\n    }\n\n    .main-nav {\n        padding: 5px;\n        margin-bottom: 2rem;\n    }\n\n    .blog-logo {\n        padding: 5px;\n    }\n\n    .blog-logo img {\n        height: 30px;\n    }\n\n    .menu-button {\n        padding: 0 5px;\n        border-radius: 0;\n        border-width: 0;\n        color: #2e2e2e;\n        background: transparent;\n    }\n    .menu-button:hover {\n        color: #2e2e2e;\n        border-color: transparent;\n        background: none;\n    }\n    body.nav-opened .menu-button {\n        background: none;\n        border: transparent;\n    }\n\n    .main-nav.overlay a:hover {\n        color: #fff;\n        border-color: transparent;\n        background: transparent;\n    }\n\n    .no-cover .main-nav.overlay {\n        background: none;\n    }\n    .no-cover .main-nav.overlay .menu-button {\n        border: none;\n    }\n\n    .main-nav.overlay .menu-button {\n        border-color: transparent;\n    }\n\n    .nav-title {\n        top: 25px;\n\n    }\n\n    .nav-close {\n        position: absolute;\n        top: 18px;\n    }\n\n    .nav ul {\n        padding: 60px 9% 5%;\n    }\n\n    .inner,\n    .pagination {\n        width: auto;\n        margin: 2rem auto;\n    }\n\n    .post {\n        width: auto;\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n        margin-left: 16px;\n        margin-right: 16px;\n        padding-bottom: 2rem;\n        line-height: 1.65em;\n    }\n\n    .post-date {\n        display: none;\n    }\n\n    .post-template .post-header,\n    .page-template .post-header {\n        margin-bottom: 2rem;\n    }\n\n    .post-template .post-date,\n    .page-template .post-date {\n        display: inline-block;\n    }\n\n    hr {\n        margin: 1.75em 0;\n    }\n\n    p, ul, ol, dl {\n        font-size: 0.95em;\n        margin: 0 0 2.5rem 0;\n    }\n\n    .page-title {\n        font-size: 3rem;\n    }\n\n    .post-excerpt p {\n        font-size: 0.85em;\n    }\n\n    .page-description {\n        font-size: 1.6rem;\n    }\n\n    h1, h2, h3,\n    h4, h5, h6 {\n        margin: 0 0 0.3em 0;\n    }\n\n    h1 {\n        font-size: 2.8rem;\n        letter-spacing: -1px;\n    }\n\n    h2 {\n        font-size: 2.4rem;\n        letter-spacing: 0;\n    }\n\n    h3 {\n        font-size: 2.1rem;\n    }\n\n    h4 {\n        font-size: 1.9rem;\n    }\n\n    h5 {\n        font-size: 1.8rem;\n    }\n\n    h6 {\n        font-size: 1.8rem;\n    }\n\n    body:not(.post-template) .post-title {\n        font-size: 2.5rem;\n    }\n\n    body.page-template .post-title {\n        font-size: 2.8rem;\n    }\n\n    .post-template .site-footer,\n    .page-template .site-footer {\n        margin-top: 0;\n    }\n\n    .post-content img {\n        padding: 0;\n        width: calc(100% + 32px); /* expand with to image + margins */\n        min-width: 0;\n        max-width: 112%; /* fallback when calc doesn't work */\n    }\n\n    .post-meta {\n        font-size: 1.3rem;\n        margin-top: 1rem;\n    }\n\n    .post-footer {\n        padding: 5rem 0 3rem 0;\n        text-align: center;\n    }\n\n    .post-footer .author {\n        margin: 0 0 2rem 0;\n        padding: 0 0 1.6rem 0;\n        border-bottom: #EBF2F6 1px dashed;\n    }\n\n    .post-footer .share {\n        position: static;\n        width: auto;\n    }\n\n    .post-footer .share a {\n        margin: 1.4rem 0.8rem 0 0.8rem;\n    }\n\n    .author-meta li {\n        float: none;\n        margin: 0;\n        line-height: 1.75em;\n    }\n\n    .author-meta li:before {\n        display: none;\n    }\n\n    .older-posts,\n    .newer-posts {\n        position: static;\n        margin: 10px 0;\n    }\n\n    .page-number {\n        display: block;\n    }\n\n    .site-footer {\n        margin-top: 3rem;\n    }\n\n    .author-profile {\n        padding-bottom: 2rem;\n    }\n\n    .post-head.main-header {\n        height: 30vh;\n    }\n\n    .tag-head.main-header,\n    .author-head.main-header {\n        height: 20vh;\n    }\n\n    .post-footer .author-image {\n        top: -60px;\n    }\n\n    .author-profile .author-image {\n        margin-top: -70px;\n    }\n\n    .author-profile .author-meta span {\n        font-size: 1.4rem;\n    }\n\n    .paged .main-header .page-description {\n        display: none;\n    }\n\n    .gh-subscribe {\n        padding: 15px;\n    }\n\n    .gh-subscribe form {\n        margin-top: 10px;\n    }\n\n    .read-next {\n        margin-top: 2rem;\n        margin-bottom: -37px;\n    }\n\n    .read-next .post {\n        width: 100%;\n    }\n\n}\n\n\n/* ==========================================================================\n   14. Animations\n   ========================================================================== */\n\n/* Used to fade in title/desc on the home page */\n@-webkit-keyframes fade-in-down {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(-10px);\n        transform: translateY(-10px);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n}\n@keyframes fade-in-down {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(-10px);\n        transform: translateY(-10px);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n}\n\n/* Used to bounce .scroll-down on home page */\n@-webkit-keyframes bounce {\n    0%, 10%, 25%, 40%, 50% {\n        -webkit-transform: translateY(0) rotate(-90deg);\n                transform: translateY(0) rotate(-90deg);\n    }\n    20% {\n        -webkit-transform: translateY(-10px) rotate(-90deg);\n                transform: translateY(-10px) rotate(-90deg);\n    }\n    30% {\n        -webkit-transform: translateY(-5px) rotate(-90deg);\n                transform: translateY(-5px) rotate(-90deg);\n    }\n}\n@keyframes bounce {\n    0%, 10%, 25%, 40%, 50% {\n        -webkit-transform: translateY(0) rotate(-90deg);\n                transform: translateY(0) rotate(-90deg);\n    }\n    20% {\n        -webkit-transform: translateY(-10px) rotate(-90deg);\n                transform: translateY(-10px) rotate(-90deg);\n    }\n    30% {\n        -webkit-transform: translateY(-5px) rotate(-90deg);\n                transform: translateY(-5px) rotate(-90deg);\n    }\n}\n\n\n/* ==========================================================================\n   End of file. Animations should be the last thing here. Do not add stuff\n   below this point, or it will probably fuck everything up.\n   ========================================================================== */\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ })
/******/ ]);