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

/***/ "./src/components/Pagination.tsx":
/*!***************************************!*\
  !*** ./src/components/Pagination.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagination\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Pagination = ({ rowCount , pageSize  })=>{\n    const page = Math.floor(rowCount / 30);\n    const pageData = new Array(10).fill(0);\n    const activeClass = {\n        active: \"relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n        other: \"relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        \"aria-label\": \"Page navigation example\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"inline-flex items-center -space-x-px\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                \"aria-hidden\": \"true\",\n                                className: \"w-5 h-5\",\n                                fill: \"currentColor\",\n                                viewBox: \"0 0 20 20\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"fill-rule\": \"evenodd\",\n                                    d: \"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z\",\n                                    \"clip-rule\": \"evenodd\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 128\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 5\n                }, undefined),\n                pageData.map((e, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: {\n                            pathname: \"/movie\",\n                            query: {\n                                pageSize: i + 1\n                            }\n                        },\n                        \"aria-current\": \"page\",\n                        className: pageSize == i + 1 ? activeClass.active : activeClass.other,\n                        children: i + 1\n                    }, i, false, {\n                        fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"sr-only\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                \"aria-hidden\": \"true\",\n                                className: \"w-5 h-5\",\n                                fill: \"currentColor\",\n                                viewBox: \"0 0 20 20\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"fill-rule\": \"evenodd\",\n                                    d: \"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\",\n                                    \"clip-rule\": \"evenodd\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 128\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n            lineNumber: 24,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Pagination.tsx\",\n        lineNumber: 23,\n        columnNumber: 1\n    }, undefined);\n};\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQztBQUNSO0FBSXRCLE1BQU1FLGFBQWEsQ0FBQyxFQUMxQkMsU0FBUSxFQUNSQyxTQUFRLEVBSVIsR0FBSztJQUNKLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0osV0FBVztJQUVuQyxNQUFNSyxXQUFXLElBQUlDLE1BQU0sSUFBSUMsSUFBSSxDQUFDO0lBRXBDLE1BQU1DLGNBQWM7UUFDbEJDLFFBQVE7UUFDUkMsT0FBUTtJQUNWO0lBQ0EscUJBRUYsOERBQUNDO1FBQUlDLGNBQVc7a0JBQ2QsNEVBQUNDO1lBQUdDLFdBQVU7OzhCQUNaLDhEQUFDQzs4QkFDQyw0RUFBQ0M7d0JBQUVDLE1BQUs7d0JBQUlILFdBQVU7OzBDQUNwQiw4REFBQ0k7Z0NBQUtKLFdBQVU7MENBQVU7Ozs7OzswQ0FDMUIsOERBQUNLO2dDQUFJQyxlQUFZO2dDQUFPTixXQUFVO2dDQUFVUCxNQUFLO2dDQUFlYyxTQUFRO2dDQUFZQyxPQUFNOzBDQUE2Qiw0RUFBQ0M7b0NBQUtDLGFBQVU7b0NBQVVDLEdBQUU7b0NBQW9IQyxhQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUlyUnJCLFNBQVNzQixHQUFHLENBQUMsQ0FBQ0MsR0FBR0MsSUFBSTtvQkFDbkIscUJBQ0ksOERBQUMvQixrREFBSUE7d0JBRUxtQixNQUFNOzRCQUFDYSxVQUFVOzRCQUNqQkMsT0FBTztnQ0FDTDlCLFVBQVU0QixJQUFFOzRCQUNkO3dCQUFDO3dCQUNERyxnQkFBYTt3QkFDYmxCLFdBQ0ViLFlBQVk0QixJQUFJLElBQUlyQixZQUFZQyxNQUFNLEdBQUdELFlBQVlFLEtBQUs7a0NBR3pEbUIsSUFBRTt1QkFWQUE7Ozs7O2dCQWFYOzhCQUVBLDhEQUFDZDs4QkFDQyw0RUFBQ0M7d0JBQUVDLE1BQUs7d0JBQUlILFdBQVU7OzBDQUNwQiw4REFBQ0k7Z0NBQUtKLFdBQVU7MENBQVU7Ozs7OzswQ0FDMUIsOERBQUNLO2dDQUFJQyxlQUFZO2dDQUFPTixXQUFVO2dDQUFVUCxNQUFLO2dDQUFlYyxTQUFRO2dDQUFZQyxPQUFNOzBDQUE2Qiw0RUFBQ0M7b0NBQUtDLGFBQVU7b0NBQVVDLEdBQUU7b0NBQXFIQyxhQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMVIsRUFBQztLQXREWTNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4PzgxNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5cbmV4cG9ydCBjb25zdCBQYWdpbmF0aW9uID0gKHtcbiByb3dDb3VudCxcbiBwYWdlU2l6ZVxufToge1xuICByb3dDb3VudDogbnVtYmVyO1xuICBwYWdlU2l6ZTogbnVtYmVyXG59KSA9PiB7XG4gIGNvbnN0IHBhZ2UgPSBNYXRoLmZsb29yKHJvd0NvdW50IC8gMzApOyBcblxuICBjb25zdCBwYWdlRGF0YSA9IG5ldyBBcnJheSgxMCkuZmlsbCgwKTtcblxuICBjb25zdCBhY3RpdmVDbGFzcyA9IHtcbiAgICBhY3RpdmU6IFwicmVsYXRpdmUgei0xMCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgYmctaW5kaWdvLTYwMCBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgZm9jdXM6ei0yMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCIsXG4gICAgb3RoZXI6ICBcInJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTUwIGZvY3VzOnotMjAgZm9jdXM6b3V0bGluZS1vZmZzZXQtMFwiXG4gIH1cbiAgcmV0dXJuIChcbiAgICBcbjxuYXYgYXJpYS1sYWJlbD1cIlBhZ2UgbmF2aWdhdGlvbiBleGFtcGxlXCI+XG4gIDx1bCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgLXNwYWNlLXgtcHhcIj5cbiAgICA8bGk+XG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB4LTMgcHktMiBtbC0wIGxlYWRpbmctdGlnaHQgdGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbC1sZyBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuNzA3IDUuMjkzYTEgMSAwIDAxMCAxLjQxNEw5LjQxNCAxMGwzLjI5MyAzLjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNGwtNC00YTEgMSAwIDAxMC0xLjQxNGw0LTRhMSAxIDAgMDExLjQxNCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+PC9zdmc+XG4gICAgICA8L2E+XG4gICAgPC9saT5cbiAgIHtcbiAgICBwYWdlRGF0YS5tYXAoKGUsIGkpPT57XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIGhyZWY9e3twYXRobmFtZTogXCIvbW92aWVcIixcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgcGFnZVNpemU6IGkrMVxuICAgICAgICAgIH19fVxuICAgICAgICAgIGFyaWEtY3VycmVudD1cInBhZ2VcIlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBwYWdlU2l6ZSA9PSBpICsgMSA/IGFjdGl2ZUNsYXNzLmFjdGl2ZSA6IGFjdGl2ZUNsYXNzLm90aGVyXG4gICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpKzF9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgKTtcbiAgICB9KVxuICAgfVxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHgtMyBweS0yIGxlYWRpbmctdGlnaHQgdGV4dC1ncmF5LTUwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtci1sZyBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctNSBoLTVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk03LjI5MyAxNC43MDdhMSAxIDAgMDEwLTEuNDE0TDEwLjU4NiAxMCA3LjI5MyA2LjcwN2ExIDEgMCAwMTEuNDE0LTEuNDE0bDQgNGExIDEgMCAwMTAgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+PC9zdmc+XG4gICAgICA8L2E+XG4gICAgPC9saT5cbiAgPC91bD5cbjwvbmF2PlxuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJQYWdpbmF0aW9uIiwicm93Q291bnQiLCJwYWdlU2l6ZSIsInBhZ2UiLCJNYXRoIiwiZmxvb3IiLCJwYWdlRGF0YSIsIkFycmF5IiwiZmlsbCIsImFjdGl2ZUNsYXNzIiwiYWN0aXZlIiwib3RoZXIiLCJuYXYiLCJhcmlhLWxhYmVsIiwidWwiLCJjbGFzc05hbWUiLCJsaSIsImEiLCJocmVmIiwic3BhbiIsInN2ZyIsImFyaWEtaGlkZGVuIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImZpbGwtcnVsZSIsImQiLCJjbGlwLXJ1bGUiLCJtYXAiLCJlIiwiaSIsInBhdGhuYW1lIiwicXVlcnkiLCJhcmlhLWN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pagination.tsx\n"));

/***/ })

});