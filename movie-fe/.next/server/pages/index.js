"use strict";
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

/***/ "./src/components/Movie.tsx":
/*!**********************************!*\
  !*** ./src/components/Movie.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Movie\": () => (/* binding */ Movie)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MovieCard */ \"./src/components/MovieCard.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Movie = ()=>{\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData();\n    }, []);\n    const getData = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:9000/api/movie\").then((res)=>{\n            setMovies(res.data.result);\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Movies\"\n            }, void 0, false, {\n                fileName: \"/Users/moog/Desktop/movie/movie-fe/src/components/Movie.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row flex-wrap\",\n                children: movies.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieCard__WEBPACK_IMPORTED_MODULE_3__.MovieCard, {\n                        item: item\n                    }, index, false, {\n                        fileName: \"/Users/moog/Desktop/movie/movie-fe/src/components/Movie.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 18\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/moog/Desktop/movie/movie-fe/src/components/Movie.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/moog/Desktop/movie/movie-fe/src/components/Movie.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDeEI7QUFDYztBQWNqQyxNQUFNSyxRQUFRLElBQU07SUFFekIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFnQixFQUFFO0lBRXRERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsVUFBVSxJQUFNO1FBQ3BCTCxpREFDTSxDQUFDLG1DQUNKTyxJQUFJLENBQUMsQ0FBQ0MsTUFBUTtZQUNiSixVQUFVSSxJQUFJQyxJQUFJLENBQUNDLE1BQU07UUFDM0IsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEM7SUFFQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRDtnQkFBSUUsV0FBVTswQkFDWmQsT0FBT2UsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7b0JBQzNCLHFCQUFPLDhEQUFDbkIsaURBQVNBO3dCQUFha0IsTUFBTUE7dUJBQWJDOzs7OztnQkFDekI7Ozs7Ozs7Ozs7OztBQUtSLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZS1mZS8uL3NyYy9jb21wb25lbnRzL01vdmllLnRzeD82MDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBNb3ZpZUNhcmQgfSBmcm9tICcuL01vdmllQ2FyZCc7XG5cbmludGVyZmFjZSBJTW92aWUge1xuICBfaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgcG9zdGVyOiBzdHJpbmc7XG4gIHBsb3Q6IHN0cmluZztcbiAgaW1kYjoge1xuICAgIHJhdGluZzogbnVtYmVyO1xuICAgIHZvdGVzOiBudW1iZXJcbiAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBNb3ZpZSA9ICgpID0+IHtcblxuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGU8QXJyYXk8SU1vdmllPj4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9hcGkvbW92aWVcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0TW92aWVzKHJlcy5kYXRhLnJlc3VsdClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+TW92aWVzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCc+XG4gICAgICAgIHttb3ZpZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8TW92aWVDYXJkIGtleT17aW5kZXh9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTW92aWVDYXJkIiwiTW92aWUiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJnZXREYXRhIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJyZXN1bHQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Movie.tsx\n");

/***/ }),

/***/ "./src/components/MovieCard.tsx":
/*!**************************************!*\
  !*** ./src/components/MovieCard.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieCard\": () => (/* binding */ MovieCard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MovieCard = ({ item , key  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1 w-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: item.poster\n            }, void 0, false, {\n                fileName: \"/Users/moog/Desktop/movie/movie-fe/src/components/MovieCard.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: item.title\n            }, void 0, false, {\n                fileName: \"/Users/moog/Desktop/movie/movie-fe/src/components/MovieCard.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: item.plot\n            }, void 0, false, {\n                fileName: \"/Users/moog/Desktop/movie/movie-fe/src/components/MovieCard.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/moog/Desktop/movie/movie-fe/src/components/MovieCard.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb3ZpZUNhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQWtCbEIsTUFBTUMsWUFBWSxDQUFDLEVBQUVDLEtBQUksRUFBRUMsSUFBRyxFQUFtQixHQUFLO0lBQ3pELHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUlDLEtBQUtMLEtBQUtNLE1BQU07Ozs7OzswQkFDckIsOERBQUNDOzBCQUFJUCxLQUFLUSxLQUFLOzs7Ozs7MEJBQ2YsOERBQUNDOzBCQUFHVCxLQUFLVSxJQUFJOzs7Ozs7Ozs7Ozs7QUFHekIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLWZlLy4vc3JjL2NvbXBvbmVudHMvTW92aWVDYXJkLnRzeD9mYWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW50ZXJmYWNlIElNb3ZpZSB7XG4gICAgX2lkOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBwb3N0ZXI6IHN0cmluZztcbiAgICBwbG90OiBzdHJpbmc7XG4gICAgaW1kYjoge1xuICAgICAgICByYXRpbmc6IG51bWJlcjtcbiAgICAgICAgdm90ZXM6IG51bWJlclxuICAgIH1cbn1cblxuaW50ZXJmYWNlIElNb3ZpZUNhcmRQcm9wcyB7XG4gICAga2V5OiBudW1iZXI7XG4gICAgaXRlbTogSU1vdmllO1xufVxuXG5leHBvcnQgY29uc3QgTW92aWVDYXJkID0gKHsgaXRlbSwga2V5IH06IElNb3ZpZUNhcmRQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LTEgdy01MCc+XG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5wb3N0ZXJ9IC8+XG4gICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwPntpdGVtLnBsb3R9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNb3ZpZUNhcmQiLCJpdGVtIiwia2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicG9zdGVyIiwiaDMiLCJ0aXRsZSIsInAiLCJwbG90Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MovieCard.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Movie */ \"./src/components/Movie.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Movie__WEBPACK_IMPORTED_MODULE_1__]);\n_components_Movie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Movie__WEBPACK_IMPORTED_MODULE_1__.Movie, {}, void 0, false, {\n            fileName: \"/Users/moog/Desktop/movie/movie-fe/src/pages/index.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBTU1BO0FBRm9DO0FBSTNCLFNBQVNFLE9BQU87SUFDN0IscUJBQ0U7a0JBQ0UsNEVBQUNELG9EQUFLQTs7Ozs7O0FBR1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLWZlLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJ0AvY29tcG9uZW50cy9Nb3ZpZSdcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW92aWUgLz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiTW92aWUiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();