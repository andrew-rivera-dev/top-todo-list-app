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

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo-list-app/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo-list-app/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo-list-app/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo-list-app/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo-list-app/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/dom-manager-2.js":
/*!******************************!*\
  !*** ./src/dom-manager-2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectManager\": () => (/* binding */ projectManager),\n/* harmony export */   \"taskManager\": () => (/* binding */ taskManager)\n/* harmony export */ });\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\n\nlet projectDictionary = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Tracker();\nlet allProjects = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Project('All Projects');\nallProjects.id = 'all-projects-default';\nprojectDictionary.add(allProjects.id, allProjects);\n\n\n//-----------------------Project Manager-----------------------//\n\n\nfunction projectManager() {\n\n    //Create new projects\n    \n    //Create new project element on button click\n    const addProjectForm = document.getElementById('add-project-form');\n    addProjectForm.addEventListener('submit', () => {\n        //Validate input\n        const addProjectInput = document.getElementById('add-project-input');\n        if (addProjectInput.value === '') return;\n    \n        //Store input\n        const newProjectName = addProjectInput.value;\n    \n        //Reset input\n        addProjectInput.value = '';\n    \n        //Create new project object\n        const newProjectObject = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Project(newProjectName);\n        projectDictionary.add(newProjectObject.id, newProjectObject);\n    \n        //Create new project element\n        const newProjectElement = createProjectElement(newProjectObject);\n    \n        //Add to project list\n        document.getElementById('sidebar');\n        sidebar.appendChild(newProjectElement);\n    });\n    \n    const allProjectsFolder = document.getElementById('all-projects-default');\n    allProjectsFolder.addEventListener('click', () => {\n        clearActiveProject();\n        allProjectsFolder.classList.add('active');\n        //renderAllTasks\n    })\n    \n    //--------------------Helper Functions--------------------//\n    \n    function createProjectElement(newProjectObject) {\n        clearActiveProject();\n        const newProjectElement = document.createElement('div');\n        newProjectElement.classList.add('sidebar-element', \n                                        'project-folder', \n                                        'active');\n        newProjectElement.id = newProjectObject.id;\n        \n        const newProjectText = document.createElement('div');\n        newProjectText.classList.add('project-text');\n        newProjectText.id = `projectText_${newProjectObject.id\n                                            .split('_')[1]}`;\n        newProjectText.innerHTML = newProjectObject.name;\n    \n        newProjectElement.appendChild(newProjectText);\n    \n        newProjectElement.addEventListener('click', () => {\n            clearActiveProject();\n            newProjectElement.classList.add('active');\n            //renderProjectTasks()\n        });\n    \n        const deleteButton = document.createElement('button');\n        deleteButton.type = 'button';\n        deleteButton.title = 'Delete project';\n        deleteButton.id = `deleteButton_${newProjectObject.id\n                                            .split('_')[1]}`;\n        deleteButton.classList.add('project-delete-button');\n    \n        const deleteIcon = document.createElement('i');\n        deleteIcon.id = `deleteIcon_${newProjectObject.id\n                                            .split('_')[1]}`;\n        deleteIcon.classList.add('bi-x-circle-fill', 'project-delete-icon');\n        deleteButton.appendChild(deleteIcon);\n        \n        deleteButton.addEventListener('click', deleteProject, false);\n    \n        newProjectElement.appendChild(deleteButton);\n    \n        return newProjectElement;\n    }\n    \n    function renderProjectTasks() {\n        const clickedProject = this;\n    }\n    \n    function clearActiveProject() {\n        const projects = document.getElementsByClassName('project-folder');\n        Array.from(projects).forEach(project => {\n            project.classList.remove('active');\n            // hideProjectButtons(project);\n        });\n    }\n    \n    function deleteProject() {\n        const clickedDeleteButton = this;\n        const projectToDelete = document.getElementById(`project_${clickedDeleteButton.id\n                                                                    .split('_')[1]}`);\n        projectDictionary.remove(projectToDelete.id);\n        const sidebar = document.getElementById('sidebar');\n        sidebar.removeChild(projectToDelete);\n    }\n    \n    /*\n    Maintain existing projects\n    \n    --Render all tasks when All Projects folder is clicked\n    --Render all tasks for a project when clicked\n    --On project delete, reassign it's tasks to default\n    */\n    \n}\n\n//-----------------------Task Manager-----------------------//\n\nfunction taskManager() {\n    //Add new task on button click (via form)\n    const addTaskButton = document.getElementById('add-task');\n\n    addTaskButton.addEventListener('click', function() {\n        const addTaskForm = document.getElementById('task-form');\n        addTaskForm.style.display = 'block';\n\n        document.getElementById('form-title').value = '';\n        document.getElementById('form-description').value = '';\n        document.getElementById('form-due-date').value = '';\n        document.getElementById('form-notes').value = '';\n\n        const children = document.body.children;\n\n        for (let i = 0; i < children.length; i++) {\n            if (children[i].id !== 'task-form') children[i].classList.add('blur-filter');\n        }\n\n    });\n\n    const submitFormButton = document.getElementById('btn-create');\n    submitFormButton.addEventListener('click', function() {\n        const rawInputs = document.getElementsByClassName('form-info');\n        const inputs = Array.from(rawInputs).map(x => x.value);\n        inputs.pop();\n        if (inputs.some(x => x === '')) return;\n        \n        //Create new task object\n        const currentProject = document.getElementsByClassName('sidebar-element active');\n        \n        //Store data in task object\n        const newTaskObject = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Task(inputs[0], inputs[1], inputs[2], inputs[3], currentProject[0].id, inputs[4]);\n\n        //Add task object to project object\n        const projectObject = projectDictionary.getItem(currentProject[0].id);\n        projectObject.addTask(newTaskObject)\n        \n        //Create task element\n        //const newTaskDiv = createNewTaskDiv(newTask);\n\n        // const main = document.getElementById('main');\n        // main.appendChild(newTaskDiv);\n        // closeForm();\n    })\n\n    const closeFormButton = document.getElementById('btn-cancel');\n    closeFormButton.addEventListener('click',closeForm)\n\n    \n\n    //Add to current project list\n\n    //--------------------Helper Functions--------------------//\n\n    function closeForm() {\n        document.getElementById('task-form').style.display = 'none';\n\n        const children = document.body.children;\n\n        for (let i = 0; i < children.length; i++) {\n            if (children[i].classList.contains('blur-filter')) children[i].classList.remove('blur-filter');\n        }\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list-app/./src/dom-manager-2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manager_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manager-2 */ \"./src/dom-manager-2.js\");\n\n\n(0,_dom_manager_2__WEBPACK_IMPORTED_MODULE_0__.projectManager)();\n(0,_dom_manager_2__WEBPACK_IMPORTED_MODULE_0__.taskManager)();\n\n//# sourceURL=webpack://todo-list-app/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"Tracker\": () => (/* binding */ Tracker)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.id = `project_${(0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)()}`;\n        this.tasks = [];\n    }\n    \n    addTask(task) {\n        this.tasks.push(task);\n    }\n}\n\nclass Task {\n    constructor (title, description, dueDate, priority, projectId, notes = '') {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.projectId = projectId;\n        this.id = `task_${(0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)()}`;\n        this.notes = notes;\n    }\n}\n\nclass Tracker {\n    constructor() {\n        this.items = {};\n    }\n\n    add(key, value) {\n        this.items[key] = value;\n    }\n\n    remove(key) {\n        delete this.items[key];\n    }\n\n    getItem(id) {\n        return this.items[`${id}`];\n    }\n\n    getItems() {\n        return this.items;\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list-app/./src/logic.js?");

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