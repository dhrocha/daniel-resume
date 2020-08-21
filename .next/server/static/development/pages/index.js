module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/dhrocha/workspace/devPleno/daniel-resume/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Index = props => {\n  return __jsx(\"div\", {\n    className: \"container mx-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-5xl\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, \"Ol\\xE1, eu sou o Daniel\"), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, props.currentData), __jsx(\"h2\", {\n    className: \"text-bold text-3xl\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Meus repos no Github\"), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, props.repos.map(repo => {\n    return __jsx(\"div\", {\n      key: repo.id,\n      className: \"rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }\n    }, __jsx(\"h3\", {\n      className: \"font-bold\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, repo.full_name), __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 15\n      }\n    }, \"Language: \", repo.language, \" / Stars: \", repo.stargazers_count), __jsx(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 15\n      }\n    }, \"Fork: \", repo.fork));\n  })));\n}; // Renderiza props no server via NextJS\n\n\nasync function getServerSideProps(context) {\n  const resRepos = await fetch(\"https://api.github.com/users/tuliofaria/repos?sort=updated\");\n  const originalRepos = await resRepos.json();\n  const dontShowRepos = [\"tuliofaria/acesso-bds-\"];\n\n  const isNotFork = repo => !repo.fork;\n\n  const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1;\n\n  const extractData = repo => ({\n    id: repo.id,\n    full_name: repo.full_name,\n    language: repo.language,\n    stargazers_count: repo.stargazers_count\n  });\n\n  const repos = originalRepos.filter(isNotFork).filter(dontShowFilter).map(extractData);\n  return {\n    props: {\n      currentData: new Date().toString(),\n      repos\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n/*\nsetInterval(function () {\n  console.log(\"waiting...\");\n  let ultimoLogin = document.getElementById(\"L_UltimoLogin_41948\").innerHTML;\n  let sec =\n    document.getElementById(\"L_ContDown_1_41948\").innerHTML +\n    document.getElementById(\"L_ContDown_2_41948\").innerHTML;\n\n  if (ultimoLogin !== \"henrybh\" && sec === \"02\") {\n    ExecutarLance(\"41948\");\n    console.log(\"lance\");\n  }\n}, 1000);\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJjdXJyZW50RGF0YSIsInJlcG9zIiwibWFwIiwicmVwbyIsImlkIiwiZnVsbF9uYW1lIiwibGFuZ3VhZ2UiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiZm9yayIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXNSZXBvcyIsImZldGNoIiwib3JpZ2luYWxSZXBvcyIsImpzb24iLCJkb250U2hvd1JlcG9zIiwiaXNOb3RGb3JrIiwiZG9udFNob3dGaWx0ZXIiLCJpbmRleE9mIiwiZXh0cmFjdERhdGEiLCJmaWx0ZXIiLCJEYXRlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLE1BQU1BLEtBQUssR0FBSUMsS0FBRCxJQUFXO0FBQ3ZCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUEsS0FBSyxDQUFDQyxXQUFaLENBRkYsRUFHRTtBQUFJLGFBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsR0FBWixDQUFpQkMsSUFBRCxJQUFVO0FBQ3pCLFdBQ0U7QUFDRSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFEWjtBQUVFLGVBQVMsRUFBQyxnREFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUU7QUFBSSxlQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJCRCxJQUFJLENBQUNFLFNBQWhDLENBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNhRixJQUFJLENBQUNHLFFBRGxCLGdCQUNzQ0gsSUFBSSxDQUFDSSxnQkFEM0MsQ0FMRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVVKLElBQUksQ0FBQ0ssSUFBZixDQVJGLENBREY7QUFZRCxHQWJBLENBREgsQ0FKRixDQURGO0FBdUJELENBeEJELEMsQ0EwQkE7OztBQUNPLGVBQWVDLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUMxQiw0REFEMEIsQ0FBNUI7QUFHQSxRQUFNQyxhQUFhLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQTVCO0FBRUEsUUFBTUMsYUFBYSxHQUFHLENBQUMsd0JBQUQsQ0FBdEI7O0FBQ0EsUUFBTUMsU0FBUyxHQUFJYixJQUFELElBQVUsQ0FBQ0EsSUFBSSxDQUFDSyxJQUFsQzs7QUFDQSxRQUFNUyxjQUFjLEdBQUlkLElBQUQsSUFBVVksYUFBYSxDQUFDRyxPQUFkLENBQXNCZixJQUFJLENBQUNFLFNBQTNCLE1BQTBDLENBQUMsQ0FBNUU7O0FBRUEsUUFBTWMsV0FBVyxHQUFJaEIsSUFBRCxLQUFXO0FBQzdCQyxNQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFEb0I7QUFFN0JDLGFBQVMsRUFBRUYsSUFBSSxDQUFDRSxTQUZhO0FBRzdCQyxZQUFRLEVBQUVILElBQUksQ0FBQ0csUUFIYztBQUk3QkMsb0JBQWdCLEVBQUVKLElBQUksQ0FBQ0k7QUFKTSxHQUFYLENBQXBCOztBQU1BLFFBQU1OLEtBQUssR0FBR1ksYUFBYSxDQUN4Qk8sTUFEVyxDQUNKSixTQURJLEVBRVhJLE1BRlcsQ0FFSkgsY0FGSSxFQUdYZixHQUhXLENBR1BpQixXQUhPLENBQWQ7QUFLQSxTQUFPO0FBQ0xwQixTQUFLLEVBQUU7QUFDTEMsaUJBQVcsRUFBRSxJQUFJcUIsSUFBSixHQUFXQyxRQUFYLEVBRFI7QUFFTHJCO0FBRks7QUFERixHQUFQO0FBTUQ7QUFDY0gsb0VBQWY7QUFFQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bFwiPk9sw6EsIGV1IHNvdSBvIERhbmllbDwvaDE+XG4gICAgICA8ZGl2Pntwcm9wcy5jdXJyZW50RGF0YX08L2Rpdj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJvbGQgdGV4dC0zeGxcIj5NZXVzIHJlcG9zIG5vIEdpdGh1YjwvaDI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7cHJvcHMucmVwb3MubWFwKChyZXBvKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtyZXBvLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIGJnLWdyYXktMjAwIG14LTggbXktNCBwLTQgaG92ZXI6c2hhZG93XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntyZXBvLmZ1bGxfbmFtZX08L2gzPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBMYW5ndWFnZToge3JlcG8ubGFuZ3VhZ2V9IC8gU3RhcnM6IHtyZXBvLnN0YXJnYXplcnNfY291bnR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+Rm9yazoge3JlcG8uZm9ya308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gUmVuZGVyaXphIHByb3BzIG5vIHNlcnZlciB2aWEgTmV4dEpTXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcmVzUmVwb3MgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvdHVsaW9mYXJpYS9yZXBvcz9zb3J0PXVwZGF0ZWRcIlxuICApO1xuICBjb25zdCBvcmlnaW5hbFJlcG9zID0gYXdhaXQgcmVzUmVwb3MuanNvbigpO1xuXG4gIGNvbnN0IGRvbnRTaG93UmVwb3MgPSBbXCJ0dWxpb2ZhcmlhL2FjZXNzby1iZHMtXCJdO1xuICBjb25zdCBpc05vdEZvcmsgPSAocmVwbykgPT4gIXJlcG8uZm9yaztcbiAgY29uc3QgZG9udFNob3dGaWx0ZXIgPSAocmVwbykgPT4gZG9udFNob3dSZXBvcy5pbmRleE9mKHJlcG8uZnVsbF9uYW1lKSA9PT0gLTE7XG5cbiAgY29uc3QgZXh0cmFjdERhdGEgPSAocmVwbykgPT4gKHtcbiAgICBpZDogcmVwby5pZCxcbiAgICBmdWxsX25hbWU6IHJlcG8uZnVsbF9uYW1lLFxuICAgIGxhbmd1YWdlOiByZXBvLmxhbmd1YWdlLFxuICAgIHN0YXJnYXplcnNfY291bnQ6IHJlcG8uc3RhcmdhemVyc19jb3VudCxcbiAgfSk7XG4gIGNvbnN0IHJlcG9zID0gb3JpZ2luYWxSZXBvc1xuICAgIC5maWx0ZXIoaXNOb3RGb3JrKVxuICAgIC5maWx0ZXIoZG9udFNob3dGaWx0ZXIpXG4gICAgLm1hcChleHRyYWN0RGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY3VycmVudERhdGE6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbiAgICAgIHJlcG9zLFxuICAgIH0sXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuLypcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coXCJ3YWl0aW5nLi4uXCIpO1xuICBsZXQgdWx0aW1vTG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxfVWx0aW1vTG9naW5fNDE5NDhcIikuaW5uZXJIVE1MO1xuICBsZXQgc2VjID1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxfQ29udERvd25fMV80MTk0OFwiKS5pbm5lckhUTUwgK1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTF9Db250RG93bl8yXzQxOTQ4XCIpLmlubmVySFRNTDtcblxuICBpZiAodWx0aW1vTG9naW4gIT09IFwiaGVucnliaFwiICYmIHNlYyA9PT0gXCIwMlwiKSB7XG4gICAgRXhlY3V0YXJMYW5jZShcIjQxOTQ4XCIpO1xuICAgIGNvbnNvbGUubG9nKFwibGFuY2VcIik7XG4gIH1cbn0sIDEwMDApO1xuKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dhrocha/workspace/devPleno/daniel-resume/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });