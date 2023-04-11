"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Movie.tsx":
/*!**********************************!*\
  !*** ./src/components/Movie.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieCard */ \"./src/components/MovieCard.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Movie = ()=>{\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const getData = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8080/api/movie\", {\n            pageSize: 1,\n            limit: 10\n        }).then((res)=>setMovies(res.data.result));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between py-5\"\n            }, void 0, false, {\n                fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Movie.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between flex-wrap\",\n                children: movies?.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieCard__WEBPACK_IMPORTED_MODULE_2__.MovieCard, {\n                        item: item\n                    }, index, false, {\n                        fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Movie.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 16\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Movie.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Movie, \"DsXWz4eQ6qRZ9Cx7rzTltn/5uKY=\");\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ3hCO0FBQ2M7QUFJeEMsTUFBTUssUUFBUSxJQUFtQjs7SUFFL0IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQTtJQUVwQyxNQUFNTSxVQUFVLElBQUs7UUFDbkJMLGtEQUNLLENBQUMsbUNBQW1DO1lBQUNPLFVBQVU7WUFBR0MsT0FBTztRQUFFLEdBQy9EQyxJQUFJLENBQUMsQ0FBQ0MsTUFBT04sVUFBVU0sSUFBSUMsSUFBSSxDQUFDQyxNQUFNO0lBQ3pDO0lBRUFkLGdEQUFTQSxDQUFDLElBQUk7UUFDWk87SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0EsOERBQUNRO2dCQUFJQyxXQUFVOzs7Ozs7MEJBR2YsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaWCxRQUFRWSxJQUFJLENBQUNDLE1BQU1DLFFBQVU7b0JBQzVCLHFCQUFPLDhEQUFDaEIsaURBQVNBO3dCQUFDZSxNQUFNQTt1QkFBV0M7Ozs7O2dCQUNyQzs7Ozs7Ozs7QUFJTjtHQTFCTWY7S0FBQUE7QUE0Qk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW92aWUudHN4PzYwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IE1vdmllQ2FyZCB9IGZyb20gJy4vTW92aWVDYXJkJztcbmltcG9ydCB7IElNb3ZpZSB9IGZyb20gJy4vSU1vdmllJztcblxuXG5jb25zdCBNb3ZpZSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG5cbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPFtJTW92aWVdPigpO1xuXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PntcbiAgICBheGlvc1xuICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9tb3ZpZVwiLCB7cGFnZVNpemU6IDEsIGxpbWl0OiAxMH0pXG4gICAgLnRoZW4oKHJlcyk9PiBzZXRNb3ZpZXMocmVzLmRhdGEucmVzdWx0KSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBnZXREYXRhKClcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB5LTVcIj5cbiAgICAgIHsvKiA8aDY+VmlldyBBbGw8L2g2PiAqL31cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGZsZXgtd3JhcFwiPlxuICAgICAge21vdmllcz8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPE1vdmllQ2FyZCBpdGVtPXtpdGVtfSBrZXk9e2luZGV4fSAvPjtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTW92aWVDYXJkIiwiTW92aWUiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJnZXREYXRhIiwicG9zdCIsInBhZ2VTaXplIiwibGltaXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlc3VsdCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Movie.tsx\n"));

/***/ })

});