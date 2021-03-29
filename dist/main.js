/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom-manager.js":
/*!****************************!*\
  !*** ./src/dom-manager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDomManager\": () => (/* binding */ projectDomManager),\n/* harmony export */   \"taskDomManger\": () => (/* binding */ taskDomManger)\n/* harmony export */ });\n/* harmony import */ var _object_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-factory */ \"./src/object-factory.js\");\n\n\nconst projectDomManager = () => {\n    const addNewProjectButton = document.getElementById('add-new-project');\n\n    addNewProjectButton.addEventListener('click', function() {\n        const sidebar = document.getElementById('sidebar');\n        const projects = document.getElementsByClassName('sidebar-element');\n\n        Array.from(projects).forEach(elem => elem.classList.remove('active'));\n\n        const newProject = document.createElement('div');\n        newProject.innerHTML = 'test';\n        newProject.classList.add('sidebar-element', 'active');\n\n        sidebar.appendChild(newProject);\n    });\n}\n\n\nconst taskDomManger = () => {\n    const addNewProjectButton = document.getElementById('add-new-project');\n\n    addNewProjectButton.addEventListener('click', function() {\n        \n    });\n\n}\n\n\n\n//# sourceURL=webpack://todo-list-app/./src/dom-manager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manager */ \"./src/dom-manager.js\");\n\n\n(function() {\n    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.projectDomManager)();\n    (0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.taskDomManger)();\n})()\n\n//# sourceURL=webpack://todo-list-app/./src/index.js?");

/***/ }),

/***/ "./src/object-factory.js":
/*!*******************************!*\
  !*** ./src/object-factory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory),\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory)\n/* harmony export */ });\nconst projectFactory = (name) => {\n    return {\n        name\n    }\n}\n\n\nconst taskFactory = (title, description, dueDate, priority) => {\n    return {\n        title,\n        description,\n        dueDate,\n        priority\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list-app/./src/object-factory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;