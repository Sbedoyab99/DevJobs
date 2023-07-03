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

/***/ "./src/js/skills.js":
/*!**************************!*\
  !*** ./src/js/skills.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  skillsSeleccionados()\r\n})\r\n\r\nconst skills = document.querySelectorAll('.skill')\r\nconst skillsSet = new Set()\r\nconst skillsCampo = document.querySelector('#skills')\r\n\r\nskills.forEach(skill => {\r\n  skill.addEventListener('click', agregarSkills)\r\n})\r\n\r\nfunction agregarSkills (e) {\r\n  if (e.target.classList.contains('activo')) {\r\n    skillsSet.delete(e.target.textContent)\r\n    e.target.classList.remove('activo')\r\n  } else {\r\n    skillsSet.add(e.target.textContent)\r\n    e.target.classList.add('activo')\r\n  }\r\n  const skillsArray = [...skillsSet]\r\n  skillsCampo.value = skillsArray\r\n}\r\n\r\nfunction skillsSeleccionados () {\r\n  const seleccionadas = Array.from(document.querySelectorAll('.activo'))\r\n  seleccionadas.forEach(seleccionada => {\r\n    skillsSet.add(seleccionada.textContent)\r\n  })\r\n  const skillsArray = [...skillsSet]\r\n  skillsCampo.value = skillsArray\r\n}\r\n\n\n//# sourceURL=webpack://devjobs/./src/js/skills.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/skills.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;