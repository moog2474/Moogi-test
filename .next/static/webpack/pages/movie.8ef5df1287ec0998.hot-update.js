"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie",{

/***/ "./src/components/Movie.tsx":
/*!**********************************!*\
  !*** ./src/components/Movie.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieCard */ \"./src/components/MovieCard.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Movie = ()=>{\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData();\n    }, []);\n    const getData = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:9000/api/movie\").then((res)=>{\n            setMovies(res.data.result);\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"NEW & UPCOMING MOVIES\"\n                    }, void 0, false, {\n                        fileName: \"/Users/morning/Desktop/moog/movie-fe/src/components/Movie.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        children: \"View All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/morning/Desktop/moog/movie-fe/src/components/Movie.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/morning/Desktop/moog/movie-fe/src/components/Movie.tsx\",\n                lineNumber: 72,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between flex-wrap w-100\",\n                children: movies?.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieCard__WEBPACK_IMPORTED_MODULE_2__.MovieCard, {\n                        item: item\n                    }, index, false, {\n                        fileName: \"/Users/morning/Desktop/moog/movie-fe/src/components/Movie.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 16\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/morning/Desktop/moog/movie-fe/src/components/Movie.tsx\",\n                lineNumber: 76,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Movie, \"MO6b3PSP3RIUqZ8gtSrBZBVtBbs=\");\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ3hCO0FBQ2M7QUFrRHhDLE1BQU1LLFFBQVEsSUFBbUI7O0lBRS9CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBZ0IsRUFBRTtJQUV0REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkTztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLFVBQVUsSUFBTTtRQUNwQkwsaURBQ00sQ0FBQyxtQ0FDSk8sSUFBSSxDQUFDLENBQUNDLE1BQVE7WUFDYkosVUFBVUksSUFBSUMsSUFBSSxDQUFDQyxNQUFNO1FBQzNCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxNQUFRQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hDO0lBRUEscUJBQ0U7OzBCQUNBLDhEQUFDRztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBRU4sOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNaYixRQUFRZ0IsSUFBSSxDQUFDQyxNQUFNQyxRQUFVO29CQUM1QixxQkFBTyw4REFBQ3BCLGlEQUFTQTt3QkFBQ21CLE1BQU1BO3VCQUFXQzs7Ozs7Z0JBQ3JDOzs7Ozs7OztBQUlOO0dBOUJNbkI7S0FBQUE7QUFnQ04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWUudHN4PzYwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IE1vdmllQ2FyZCB9IGZyb20gJy4vTW92aWVDYXJkJztcblxuZXhwb3J0IGludGVyZmFjZSBJTW92aWUge1xuICBfaWQ6IHN0cmluZztcbiAgcGxvdDogc3RyaW5nO1xuICBnZW5yZXM6IFtzdHJpbmddO1xuICBydW50aW1lOiBudW1iZXI7XG4gIGNhc3Q6IFtzdHJpbmddO1xuICBudW1fbWZsaXhfY29tbWVudHM6IG51bWJlcjtcbiAgcG9zdGVyOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGZ1bGxwbG90OiBzdHJpbmc7XG4gIGNvdW50cmllczogW3N0cmluZ107XG4gIHJlbGVhc2VkOiBzdHJpbmc7XG4gIGRpcmVjdG9yczogW3N0cmluZ107XG4gIHdyaXRlcnM6IFtzdHJpbmddO1xuICBhd2FyZHM6IHtcbiAgICAgIHdpbnM6IG51bWJlcjtcbiAgICAgIG5vbWluYXRpb25zOiBudW1iZXI7XG4gICAgICB0ZXh0OiBzdHJpbmdcbiAgfTtcbiAgbGFzdHVwZGF0ZWQ6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBpbWRiOiB7XG4gICAgICByYXRpbmc6IG51bWJlcjtcbiAgICAgIHZvdGVzOiBudW1iZXI7XG4gICAgICBpZDogbnVtYmVyXG4gIH1cbiAgeWVhcjogbnVtYmVyO1xuICB0b21hdG9lczoge1xuICAgICAgdmlld2VyOiB7XG4gICAgICAgICAgcmF0aW5nOiBudW1iZXI7XG4gICAgICAgICAgbnVtUmV2aWV3czogbnVtYmVyO1xuICAgICAgICAgIG1ldGVyOiBudW1iZXJcbiAgICAgIH07XG4gICAgICBmcmVzaDogbnVtYmVyO1xuICAgICAgY3JpdGljOiB7XG4gICAgICAgICAgcmF0aW5nOiBudW1iZXI7XG4gICAgICAgICAgbnVtUmV2aWV3czogbnVtYmVyO1xuICAgICAgICAgIG1ldGVyOiBudW1iZXJcbiAgICAgIH1cbiAgICAgIHJvdHRlbjogbnVtYmVyO1xuICAgICAgbGFzdFVQZGF0ZWQ6IG51bWJlclxuICB9O1xuICB0aGVhdGVySWQ6IHtcbiAgICB0eXBlOiBudW1iZXI7XG4gIH1cbn1cblxuXG5jb25zdCBNb3ZpZSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG5cbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPEFycmF5PElNb3ZpZT4+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjkwMDAvYXBpL21vdmllXCIpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldE1vdmllcyhyZXMuZGF0YS5yZXN1bHQpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHktNFwiPlxuICAgICAgPGgxPk5FVyAmIFVQQ09NSU5HIE1PVklFUzwvaDE+XG4gICAgICA8aDY+VmlldyBBbGw8L2g2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZmxleC13cmFwIHctMTAwXCI+XG4gICAgICB7bW92aWVzPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8TW92aWVDYXJkIGl0ZW09e2l0ZW19IGtleT17aW5kZXh9IC8+O1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJNb3ZpZUNhcmQiLCJNb3ZpZSIsIm1vdmllcyIsInNldE1vdmllcyIsImdldERhdGEiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlc3VsdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDYiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Movie.tsx\n"));

/***/ })

});