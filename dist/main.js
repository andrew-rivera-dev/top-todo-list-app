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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDomManager\": () => (/* binding */ projectDomManager),\n/* harmony export */   \"taskDomManger\": () => (/* binding */ taskDomManger)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\n\nconst projectDomManager = (() => {\n    const addNewProjectButton = document.getElementById('add-new-project');\n\n    addNewProjectButton.addEventListener('click', function() {\n        const sidebar = document.getElementById('sidebar');\n        clearActiveProjects();\n        const newProject = createNewProjectDiv();\n        console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.projectTracker.getItems());\n        sidebar.appendChild(newProject);\n    }, false);\n\n    const allProjectsFolder = document.getElementById('all-projects');\n    allProjectsFolder.addEventListener('click', function(element) {\n        clearActiveProjects();\n        element.classList.add('active');\n    }, false);\n})()\n\nconst createNewProjectDiv = () => {\n    //create new project box as form\n    const newProject = document.createElement('form');\n    newProject.classList.add('sidebar-element', 'created-sidebar-element', 'active');\n\n    //add text input\n    const newProjectText = document.createElement('input');\n    newProjectText.type = 'text';\n    newProjectText.maxLength = 12;\n    newProjectText.required = true;\n    newProject.appendChild(newProjectText);\n\n    const confirmButton = document.createElement('button');\n    confirmButton.type = 'submit';\n    confirmButton.classList.add('confirm-button');\n\n    const checkIcon = document.createElement('i');\n    checkIcon.classList.add('bi-check');\n    confirmButton.appendChild(checkIcon);\n\n    newProject.addEventListener('submit', function(event) {\n        let text = newProjectText.value;\n        console.log(text);\n        _logic__WEBPACK_IMPORTED_MODULE_0__.projectTracker.add(new _logic__WEBPACK_IMPORTED_MODULE_0__.Project(text));\n        newProject.innerHTML = text;\n        event.preventDefault();\n    }, false);\n\n    newProject.appendChild(confirmButton);\n\n    return newProject;\n}\n\nconst clearActiveProjects = () => {\n    const projects = document.getElementsByClassName('sidebar-element');\n    Array.from(projects).forEach(elem => elem.classList.remove('active'));\n}\n\nconst taskDomManger = (() => {\n    const addNewTaskButton = document.getElementById('add-new-task');\n\n    addNewTaskButton.addEventListener('click', function() {\n        const main = document.getElementById('main');\n\n        const newTask = document.createElement('div');\n        newTask.innerHTML = 'New Task';\n        newTask.classList.add('task');\n        main.appendChild(newTask);\n    });\n})()\n\n\n\n//# sourceURL=webpack://todo-list-app/./src/dom-manager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manager */ \"./src/dom-manager.js\");\n\n\n//# sourceURL=webpack://todo-list-app/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"Tracker\": () => (/* binding */ Tracker),\n/* harmony export */   \"projectTracker\": () => (/* binding */ projectTracker),\n/* harmony export */   \"taskTracker\": () => (/* binding */ taskTracker)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n    }\n\n    setName(newName) {\n        this.name = newName;\n    }     \n}\n\nclass Task {\n    constructor (title, description, dueDate, priority, project) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.project = project;\n    }\n}\n\nclass Tracker {\n    constructor() {\n        this.items = [];\n    }\n\n    add(item) {\n        this.items.push(item);\n    }\n\n    remove(item) {\n        this.items.splice(this.items.indexOf(item), 1);\n    }\n\n    getItems() {\n        return this.items;\n    }\n}\n\nlet projectTracker = new Tracker();\nlet taskTracker = new Tracker();\n\n\n\n//# sourceURL=webpack://todo-list-app/./src/logic.js?");

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