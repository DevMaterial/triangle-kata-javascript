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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./classifyTriangle.js":
/*!*****************************!*\
  !*** ./classifyTriangle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var validateTriangle = (sides) => {\n  if (sides.length < 3) {\n      throw new Error('You have less than 3 sides');\n  } else if (sides.length > 3) {\n      throw new Error('You have more than 3 sides');\n  }\n}\n\nvar classifyTriangle = (sides) => {\n  validateTriangle(sides);\n  if (sides[0] === sides[1] && sides[1] === sides[2]) {\n      return 'equilateral';\n  } else if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]) {\n      return 'isoceles';\n  }\n  return 'scalene';\n}\n\nmodule.exports = { classifyTriangle, validateTriangle }\n\n//# sourceURL=webpack:///./classifyTriangle.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { classifyTriangle } = __webpack_require__(/*! ./classifyTriangle */ \"./classifyTriangle.js\");\n\nconst triangleForm = document.forms.triangleForm;\nconst resultField = document.getElementById('result');\n\nconst submitHandler = (e) => {\n  e.preventDefault();\n  const ranges = Array.from(triangleForm.querySelectorAll('input[type=range]'));\n  let sides = [];\n\n  ranges.forEach((range) => { sides.push(range.value) });\n  resultField.innerHTML = classifyTriangle(sides);\n}\ntriangleForm.addEventListener('submit', submitHandler);\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ });