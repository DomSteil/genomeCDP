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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\genomeCDP\\components\\header.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/assets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Assets")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/wellness",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Wellness")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/cdps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "CDPs")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Dashboard")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2029816463",
    css: "a.jsx-2029816463{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:11px;margin-right:30px;padding-left:5px;color:#999;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;}.connected.jsx-2029816463{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;margin-right:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnZW5vbWVDRFBcXGNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ1ksQUFHcUksQUFVekgsV0FDRCxVQUNDLFdBQ1UscUJBQ0YsbUJBQ0EsbUJBQ0YsaUJBQ0EsaUJBQ2pCLE9BakJjLGNBQ0MsZUFDRyxrQkFDRCxpQkFDTixXQUNjLHlCQUNKLGtEQUFDIiwiZmlsZSI6IkM6XFxnZW5vbWVDRFBcXGNvbXBvbmVudHNcXGhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuXHJcblxyXG4gICAgPGhlYWQ+XHJcblxyXG4gICAgICAgIDwvaGVhZD5cclxuICA8YnIvPlxyXG5cclxuICAgICAgXHJcbiAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgPGE+SG9tZTwvYT5cclxuICAgIDwvTGluaz5cclxuXHJcbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvYXNzZXRzJz5cclxuICAgICAgPGE+QXNzZXRzPC9hPlxyXG4gICAgPC9MaW5rPlxyXG5cclxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy93ZWxsbmVzcyc+XHJcbiAgICAgIDxhPldlbGxuZXNzPC9hPlxyXG4gICAgPC9MaW5rPlxyXG5cclxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9jZHBzJz5cclxuICAgICAgPGE+Q0RQczwvYT5cclxuICAgIDwvTGluaz5cclxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9kYXNoYm9hcmQnPlxyXG4gICAgICA8YT5EYXNoYm9hcmQ8L2E+XHJcbiAgICA8L0xpbms+XHJcblxyXG5cclxuXHJcbjxzdHlsZSBqc3g+e2BcclxuYSB7XHJcbmZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxubWFyZ2luOiAxMHB4IDA7XHJcbmZvbnQtc2l6ZTogMTFweDtcclxubWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5wYWRkaW5nLWxlZnQ6IDVweDtcclxuY29sb3I6ICM5OTk7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uY29ubmVjdGVkIHtcclxuY29udGVudDogJyc7XHJcbndpZHRoOiA4cHg7XHJcbmhlaWdodDogOHB4O1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbmJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbmJhY2tncm91bmQ6ICM1MGUzYzI7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5tYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuYH08L3N0eWxlPlxyXG48L2Rpdj5cclxuXHJcbilcclxuIl19 */\n/*@ sourceURL=C:\\genomeCDP\\components\\header.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./pages/assets.js":
/*!*************************!*\
  !*** ./pages/assets.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
var _jsxFileName = "C:\\genomeCDP\\pages\\assets.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2995774628",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2995774628",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "GenomeCDP Platform"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-2995774628",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css",
    className: "jsx-2995774628",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2995774628",
    css: "body.jsx-2995774628{background-color:#FFF;text-align:center;}div.jsx-2995774628{background-color:#FFF;text-align:center;}a.jsx-2995774628{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:11px;margin-right:30px;padding-left:5px;color:#999;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;}img.jsx-2995774628{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:60px;width:60px;font-size:12px;text-align:center;}p.jsx-2995774628{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}.in.jsx-2995774628{margin-left:1200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnZW5vbWVDRFBcXHBhZ2VzXFxhc3NldHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJZLEFBSXVCLEFBS0EsQUFLOEcsQUFVQSxBQVFBLEFBVWpILG1CQUNuQixHQXRDa0IsQUFLQSxrQkFKbEIsQUFLQSw0RkFJYyxBQVVGLEFBUUUsWUFQSCxFQVZJLEFBa0JBLFNBUEEsTUFWRyxBQWtCQSxTQVBBLFNBVkQsQUFrQkEsU0FQakIsUUFWVyxBQWtCQSxXQWpCYyxBQWtCUCxrQkFDbEIsT0FsQnFCLGtEQUFDIiwiZmlsZSI6IkM6XFxnZW5vbWVDRFBcXHBhZ2VzXFxhc3NldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcblx0PGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+R2Vub21lQ0RQIFBsYXRmb3JtPC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMy4zL3NlbWFudGljLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICA8L0hlYWQ+XHJcblx0PEhlYWRlciAvPlxyXG5cclxuXHJcblxyXG5cclxuPHN0eWxlIGpzeD57YFxyXG5cclxuYm9keSB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2IHtcclxuYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5hIHtcclxuZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG5tYXJnaW46IDEwcHggMDtcclxuZm9udC1zaXplOiAxMXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbnBhZGRpbmctbGVmdDogNXB4O1xyXG5jb2xvcjogIzk5OTtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbmltZyB7XHJcbmZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuaGVpZ2h0OiA2MHB4O1xyXG53aWR0aDogNjBweDtcclxuZm9udC1zaXplOiAxMnB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgcCB7XHJcbmZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxubWFyZ2luOiAxMHB4IDA7XHJcbmZvbnQtc2l6ZTogMThweDtcclxubWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5wYWRkaW5nLWxlZnQ6IDVweDtcclxuY29sb3I6ICMwMDA7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmluIHtcclxubWFyZ2luLWxlZnQ6IDEyMDBweDtcclxufVxyXG5cclxuYH08L3N0eWxlPlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuKSJdfQ== */\n/*@ sourceURL=C:\\genomeCDP\\pages\\assets.js */",
    __self: this
  }));
});

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/assets.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/assets.js */"./pages/assets.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=assets.js.map