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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Contains all javascript logic for Dev Life theme
 */


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n@import 'main';\n^\n      File to import not found or unreadable: /home/vagrant/dev-life-ghost-theme/src/assets/css/main.scss.\nParent style sheet: stdin\n      in /home/vagrant/dev-life-ghost-theme/src/assets/css/screen.scss (line 12, column 1)\n    at /home/vagrant/dev-life-ghost-theme/node_modules/webpack/lib/NormalModule.js:192:19\n    at /home/vagrant/dev-life-ghost-theme/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/vagrant/dev-life-ghost-theme/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/home/vagrant/dev-life-ghost-theme/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/home/vagrant/dev-life-ghost-theme/node_modules/sass-loader/lib/loader.js:57:13)\n    at Object.<anonymous> (/home/vagrant/dev-life-ghost-theme/node_modules/sass-loader/node_modules/async/dist/async.js:2243:31)\n    at Object.callback (/home/vagrant/dev-life-ghost-theme/node_modules/sass-loader/node_modules/async/dist/async.js:906:16)\n    at options.error (/home/vagrant/dev-life-ghost-theme/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(0);

/***/ })
/******/ ]);