/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/button/answer.module.css":
/*!*********************************************!*\
  !*** ./components/button/answer.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"button\": \"answer_button__ku7Gz\",\n\t\"form\": \"answer_form__j88bz\",\n\t\"yes\": \"answer_yes__dMTQ_\",\n\t\"no\": \"answer_no__yp2aQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi9hbnN3ZXIubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZWRpY2F0b3JuZXh0Ly4vY29tcG9uZW50cy9idXR0b24vYW5zd2VyLm1vZHVsZS5jc3M/MGY4NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJhbnN3ZXJfYnV0dG9uX19rdTdHelwiLFxuXHRcImZvcm1cIjogXCJhbnN3ZXJfZm9ybV9fajg4YnpcIixcblx0XCJ5ZXNcIjogXCJhbnN3ZXJfeWVzX19kTVRRX1wiLFxuXHRcIm5vXCI6IFwiYW5zd2VyX25vX195cDJhUVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/button/answer.module.css\n");

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"Home\": \"index_Home__Vk_zZ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJlZGljYXRvcm5leHQvLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzP2Q4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSG9tZVwiOiBcImluZGV4X0hvbWVfX1ZrX3paXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "./components/button/answer.js":
/*!*************************************!*\
  !*** ./components/button/answer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Answer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _answer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer.module.css */ \"./components/button/answer.module.css\");\n/* harmony import */ var _answer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_answer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Answer() {\n    const [predict, setPredict] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n        children: [\n            predict,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setPredict(\"yes\"),\n                        className: (_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().yes),\n                        children: \"Yes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\components\\\\button\\\\answer.js\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setPredict(\"no\"),\n                        className: (_answer_module_css__WEBPACK_IMPORTED_MODULE_2___default().no),\n                        children: \"No\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\components\\\\button\\\\answer.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\components\\\\button\\\\answer.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\components\\\\button\\\\answer.js\",\n        lineNumber: 9,\n        columnNumber: 12\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi9hbnN3ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBRWQ7QUFFWCxTQUFTRSxNQUFNLEdBQUc7SUFDN0IsTUFBTSxDQUFDQyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHSCxxREFBYyxDQUFDLEVBQUUsQ0FBQztJQUdoRCxxQkFBTyw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUVQLGtFQUFhOztZQUMvQkcsT0FBTzswQkFFUiw4REFBQ0csS0FBRztnQkFBQ0MsU0FBUyxFQUFFUCxnRUFBVzs7a0NBQ3ZCLDhEQUFDUSxRQUFNO3dCQUFDRSxPQUFPLEVBQUUsSUFBTU4sVUFBVSxDQUFDLEtBQUssQ0FBQzt3QkFBRUcsU0FBUyxFQUFFUCwrREFBVTtrQ0FBRyxLQUFHOzs7Ozs0QkFBUztrQ0FDOUUsOERBQUNRLFFBQU07d0JBQUNFLE9BQU8sRUFBRSxJQUFNTixVQUFVLENBQUMsSUFBSSxDQUFDO3dCQUFFRyxTQUFTLEVBQUVQLDhEQUFTO2tDQUFHLElBQUU7Ozs7OzRCQUFTOzs7Ozs7b0JBQ3pFOzs7Ozs7WUFHSjtDQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJlZGljYXRvcm5leHQvLi9jb21wb25lbnRzL2J1dHRvbi9hbnN3ZXIuanM/YjFjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vYW5zd2VyLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbnN3ZXIoKSB7XHJcbiAgICBjb25zdCBbcHJlZGljdCwgc2V0UHJlZGljdF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG5cclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgIHtwcmVkaWN0fVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFByZWRpY3QoXCJ5ZXNcIil9IGNsYXNzTmFtZT17c3R5bGVzLnllc30gPlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFByZWRpY3QoXCJub1wiKX0gY2xhc3NOYW1lPXtzdHlsZXMubm99ID5ObzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICBcclxuICAgIDwvZGl2PlxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwiQW5zd2VyIiwicHJlZGljdCIsInNldFByZWRpY3QiLCJ1c2VTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImZvcm0iLCJvbkNsaWNrIiwieWVzIiwibm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/button/answer.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomePage\": () => (/* binding */ HomePage),\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button_answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/button/answer */ \"./components/button/answer.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nclass HomePage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    constructor(props){\n        super(props);\n    }\n    static async getInitialProps(context) {\n        // const cookies = new Cookies(context.req, context.res)\n        // cookies.set(\"next-auth.callback-url\", \"http://localhost:3000/api/auth/callback/google\")\n        console.log(\"lol\");\n        const res = await fetch(\"http://localhost:3000/api/predict/\");\n        const json = await res.json();\n        return {\n            predict: json.ptdr\n        };\n    }\n}\nfunction Home() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Bangers&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().Home),\n                children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Dreivo will be the winner of the next fight?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\pages\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button_answer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\pages\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 72\n                        }, this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \" Connect you please :\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Louis\\\\Desktop\\\\Dreivo\\\\PredicatorNext\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFFZDtBQUN3QjtBQUNyQjtBQUNnQjtBQUtyQyxNQUFNSyxRQUFRLFNBQVNKLHdEQUFlO0lBR3pDTSxZQUFZQyxLQUFLLENBQUU7UUFDZixLQUFLLENBQUNBLEtBQUssQ0FBQztLQUNmO0lBRUQsYUFBYUMsZUFBZSxDQUFDQyxPQUFPLEVBQUU7UUFFbEMsd0RBQXdEO1FBQ3hELDBGQUEwRjtRQUUxRkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2xCLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsb0NBQW9DLENBQUM7UUFDN0QsTUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO1FBRzdCLE9BQU87WUFBRUMsT0FBTyxFQUFFRCxJQUFJLENBQUNFLElBQUk7U0FBRTtLQUVoQztDQUVKO0FBQ2MsU0FBU0MsSUFBSSxHQUFHO0lBRTNCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEdBQUUsR0FBR2hCLDJEQUFVLEVBQUU7SUFDdEMscUJBQVE7OzBCQUdKLDhEQUFDRCxrREFBSTs7a0NBQ0QsOERBQUNrQixNQUFJO3dCQUFDQyxHQUFHLEVBQUMsWUFBWTt3QkFBQ0MsSUFBSSxFQUFDLDhCQUE4Qjs7Ozs7NEJBQVE7a0NBQ2xFLDhEQUFDRixNQUFJO3dCQUFDQyxHQUFHLEVBQUMsWUFBWTt3QkFBQ0MsSUFBSSxFQUFDLDJCQUEyQjs7Ozs7NEJBQVE7a0NBQy9ELDhEQUFDRixNQUFJO3dCQUFDRSxJQUFJLEVBQUMsK0RBQStEO3dCQUFDRCxHQUFHLEVBQUMsWUFBWTs7Ozs7NEJBQVE7Ozs7OztvQkFDaEc7MEJBR1AsOERBQUNFLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRXpCLCtEQUFXOzBCQUd0Qm9CLE9BQU8saUJBQ0o7O3NDQUFFLDhEQUFDTSxJQUFFO3NDQUFDLDhDQUE0Qzs7Ozs7Z0NBQUs7c0NBQUEsOERBQUN4QixpRUFBTTs7OztnQ0FBVTs7Z0NBQUcsaUJBRzNFLDhEQUFDd0IsSUFBRTs4QkFBQyx1QkFBcUI7Ozs7O3dCQUFLOzs7OztvQkFJaEM7O29CQUVQLENBQUM7Q0FDUCIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZWRpY2F0b3JuZXh0Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFuc3dlciBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9hbnN3ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY29udGV4dCkge1xyXG5cclxuICAgICAgICAvLyBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoY29udGV4dC5yZXEsIGNvbnRleHQucmVzKVxyXG4gICAgICAgIC8vIGNvb2tpZXMuc2V0KFwibmV4dC1hdXRoLmNhbGxiYWNrLXVybFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXV0aC9jYWxsYmFjay9nb29nbGVcIilcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2xcIilcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcmVkaWN0LycpO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgcHJlZGljdDoganNvbi5wdGRyIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcclxuICAgIHJldHVybiAoPD5cclxuXHJcblxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIj48L2xpbms+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiPjwvbGluaz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFuZ2VycyZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSG9tZX0+XHJcblxyXG5cclxuICAgICAgICAgICAge3Nlc3Npb24gPyAoXHJcbiAgICAgICAgICAgICAgICA8PjxoMz5EcmVpdm8gd2lsbCBiZSB0aGUgd2lubmVyIG9mIHRoZSBuZXh0IGZpZ2h0PzwvaDM+PEFuc3dlcj48L0Fuc3dlcj48Lz5cclxuXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8aDM+IENvbm5lY3QgeW91IHBsZWFzZSA6PC9oMz5cclxuXHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvPilcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsIkFuc3dlciIsIkhlYWQiLCJ1c2VTZXNzaW9uIiwiSG9tZVBhZ2UiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcmVkaWN0IiwicHRkciIsIkhvbWUiLCJkYXRhIiwic2Vzc2lvbiIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();