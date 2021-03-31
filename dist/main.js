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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectDomManager\": () => (/* binding */ projectDomManager),\n/* harmony export */   \"taskDomManger\": () => (/* binding */ taskDomManger)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\n\nfunction projectDomManager() {\n    function pushNewProjectToSidebar() {\n        const sidebar = document.getElementById('sidebar');\n        clearActiveProjects();\n        const newProject = createNewProjectDiv();\n        sidebar.appendChild(newProject);\n        newProject.firstElementChild.focus();\n    }\n    \n    const addNewProjectButton = document.getElementById('add-new-project');\n    addNewProjectButton.addEventListener('click', pushNewProjectToSidebar, false);\n\n    const allProjectsFolder = document.getElementById('all-projects');\n    allProjectsFolder.addEventListener('click', function() {\n        clearActiveProjects();\n        allProjectsFolder.classList.add('active');\n    }, false);\n}\n\n\n\nfunction createNewProjectDiv() { \n    const newProject = document.createElement('form');\n    newProject.classList.add('sidebar-element', 'created-sidebar-element', 'active');\n\n    const newProjectText = document.createElement('input');\n    newProjectText.type = 'text';\n    newProjectText.maxLength = 12;\n    newProject.appendChild(newProjectText);\n\n    const confirmButton = document.createElement('button');\n    confirmButton.type = 'submit';\n    confirmButton.classList.add('confirm-button');\n\n    const checkIcon = document.createElement('i');\n    checkIcon.classList.add('bi-check');\n    confirmButton.appendChild(checkIcon);\n\n    function cancelProjectCreate() {\n        const sidebar = document.getElementById('sidebar');\n        const textBoxParent = this.parentNode; \n        if (this.value === '') sidebar.removeChild(textBoxParent);\n    }\n\n    // newProject.addEventListener('focusout', deleteSelf, false)\n    newProjectText.addEventListener('focusout', cancelProjectCreate, false);\n\n    newProject.addEventListener('submit', function(event) {\n        // newProject.removeEventListener('focusout', deleteSelf, false);\n        newProjectText.removeEventListener('focusout', cancelProjectCreate, false);\n        \n        const text = newProjectText.value;\n        if (text === '') return;\n\n        _logic__WEBPACK_IMPORTED_MODULE_0__.projectTracker.add(new _logic__WEBPACK_IMPORTED_MODULE_0__.Project(text));\n        newProject.innerHTML = text;\n        event.preventDefault();\n    }, false);\n\n    newProject.appendChild(confirmButton);\n\n    newProject.addEventListener('click', function() {\n        clearActiveProjects();\n        newProject.classList.add('active');\n    }, false);\n\n    return newProject;\n}\n\nfunction clearActiveProjects() {\n    const projects = document.getElementsByClassName('sidebar-element');\n    Array.from(projects).forEach(elem => elem.classList.remove('active'));\n}\n\n\n\nfunction taskDomManger() {\n    const addTaskButton = document.getElementById('add-new-task');\n\n    addTaskButton.addEventListener('click', function() {\n        const addTaskForm = document.getElementById('task-form');\n        addTaskForm.style.display = 'block';\n\n        document.getElementById('form-title').value = '';\n        document.getElementById('form-description').value = '';\n        document.getElementById('form-due-date').value = '';\n        document.getElementById('form-notes').value = '';\n\n        const children = document.body.children;\n\n        for (let i = 0; i < children.length; i++) {\n            if (children[i].id !== 'task-form') children[i].classList.add('blur-filter');\n        }\n\n    });\n\n    function closeForm() {\n        document.getElementById('task-form').style.display = 'none';\n\n        const children = document.body.children;\n\n        for (let i = 0; i < children.length; i++) {\n            if (children[i].classList.contains('blur-filter')) children[i].classList.remove('blur-filter');\n        }\n    }\n\n    const submitFormButton = document.getElementById('btn-create');\n    submitFormButton.addEventListener('click', () => {\n        const rawInputs = document.getElementsByClassName('form-info');\n        const inputs = Array.from(rawInputs).map(x => x.value);\n        const currentProject = document.getElementsByClassName('sidebar-element active');\n        const newTask = new _logic__WEBPACK_IMPORTED_MODULE_0__.Task(inputs[0], inputs[1], inputs[2], inputs[3], inputs[4], currentProject.innerHTML);\n        const newTaskDiv = createNewTaskDiv(newTask);\n\n        _logic__WEBPACK_IMPORTED_MODULE_0__.projectTracker.add(newTask);\n\n        const main = document.getElementById('main');\n        main.appendChild(newTaskDiv);\n        closeForm();\n    })\n\n    const closeFormButton = document.getElementById('btn-cancel');\n    closeFormButton.addEventListener('click',closeForm);\n}\n\nfunction createNewTaskDiv(task) {\n    const newTask = document.createElement('div');\n    newTask.classList.add('task');\n    \n    const title = document.createElement('span');\n    title.classList.add('task-title','task-property');\n    title.innerHTML = task.title;\n    newTask.appendChild(title);\n\n    const description = document.createElement('span');\n    description.classList.add('task-description', 'task-property');\n    description.innerHTML = task.description;\n    newTask.appendChild(description);\n\n    const dueDate = document.createElement('span');\n    dueDate.classList.add('task-due-date', 'task-property');\n    dueDate.innerHTML = task.dueDate;\n    newTask.appendChild(dueDate);\n    \n    const priority = document.createElement('span');\n    priority.classList.add('task-priority', 'task-property');\n    priority.innerHTML = task.priority;\n    switch(task.priority) {\n        case 'High':\n            priority.style.color = '#eb8f8f';\n            break;\n        case 'Medium':\n            priority.style.color = '#faedb1';\n            break;\n        case 'Low':\n            priority.style.color = '#a7fcd9';\n    }\n    newTask.appendChild(priority);\n\n    return newTask;\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list-app/./src/dom-manager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manager */ \"./src/dom-manager.js\");\n\n\n(0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.projectDomManager)();\n(0,_dom_manager__WEBPACK_IMPORTED_MODULE_0__.taskDomManger)();\n\n//# sourceURL=webpack://todo-list-app/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"Tracker\": () => (/* binding */ Tracker),\n/* harmony export */   \"projectTracker\": () => (/* binding */ projectTracker),\n/* harmony export */   \"taskTracker\": () => (/* binding */ taskTracker)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n    }\n\n    setName(newName) {\n        this.name = newName;\n    }     \n}\n\nclass Task {\n    constructor (title, description, dueDate, priority, notes, project) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes || '';\n        this.project = project;\n    }\n}\n\nclass Tracker {\n    constructor() {\n        this.items = [];\n    }\n\n    add(item) {\n        this.items.push(item);\n    }\n\n    remove(item) {\n        this.items.splice(this.items.indexOf(item), 1);\n    }\n\n    getItems() {\n        return this.items;\n    }\n}\n\nlet projectTracker = new Tracker();\nlet taskTracker = new Tracker();\n\n\n\n//# sourceURL=webpack://todo-list-app/./src/logic.js?");

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