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

/***/ "./src/components/Filter.tsx":
/*!***********************************!*\
  !*** ./src/components/Filter.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Filter\": function() { return /* binding */ Filter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownMenu */ \"./src/components/DropdownMenu.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Filter = ()=>{\n    _s();\n    const [genres, setGenres] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const getData = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8080/api/moviegenres\", {\n            pageSize: 1,\n            limit: 10\n        }).then((res)=>{\n            setGenres(res.data.result);\n            console.log(res.data.result);\n        }).catch((err)=>console.log(err));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData();\n    }, []);\n    const filterMenus = [\n        {\n            name: \"Sort\",\n            data: [\n                {\n                    id: 1,\n                    text: \"Most Popular\"\n                },\n                {\n                    id: 2,\n                    text: \"New\"\n                },\n                {\n                    id: 3,\n                    text: \"A-Z\"\n                },\n                {\n                    id: 4,\n                    text: \"TOMATOMETER\\xae (HIGHEST)\"\n                },\n                {\n                    id: 5,\n                    text: \"TOMATOMETER\\xae (LOWEST)\"\n                }\n            ]\n        },\n        {\n            name: \"Genre\",\n            data: genres\n        },\n        {\n            name: \"Rating\",\n            data: []\n        },\n        {\n            name: \"Audience score\",\n            data: [\n                {\n                    id: 1,\n                    text: \"FRESH At least 60% of reviews for a movie or TV show are positive\"\n                },\n                {\n                    id: 2,\n                    text: \"ROTTEN Less than 60% of reviews for a movie or TV show are positive.\"\n                }\n            ]\n        },\n        {\n            name: \"Tomatometer\",\n            data: [\n                {\n                    id: 1,\n                    text: \"CERTIFIED FRESH - A special distinction awarded to the best reviewed movies and TV Shows.\"\n                },\n                {\n                    id: 2,\n                    text: \"FRESH - At least 60% of reviews for a movie or TV show are positive.\"\n                }\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center py-2\",\n        children: filterMenus.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {\n                list: item.data,\n                menuText: item.name\n            }, void 0, false, {\n                fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Filter.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Filter.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Filter, \"eEfMfp1Cbh4LS6RBfGZzD1vkYUA=\");\n_c = Filter;\nvar _c;\n$RefreshReg$(_c, \"Filter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWx0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNKO0FBQ3BCO0FBT25CLE1BQU1LLFNBQVMsSUFBTTs7SUFFMUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQTtJQUVwQyxNQUFNTSxVQUFVLElBQU07UUFDcEJKLGtEQUNPLENBQUMseUNBQXlDO1lBQUVNLFVBQVU7WUFBR0MsT0FBTztRQUFHLEdBQ3ZFQyxJQUFJLENBQUMsQ0FBQ0MsTUFBUTtZQUFDTixVQUFVTSxJQUFJQyxJQUFJLENBQUNDLE1BQU07WUFDdkNDLFFBQVFDLEdBQUcsQ0FBQ0osSUFBSUMsSUFBSSxDQUFDQyxNQUFNO1FBQzdCLEdBRUNHLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS0gsUUFBUUMsR0FBRyxDQUFDRTtJQUU1QjtJQUVBbEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkTztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1ZLGNBQWM7UUFDbEI7WUFDRUMsTUFBTTtZQUNOUCxNQUFNO2dCQUNKO29CQUFFUSxJQUFJO29CQUFHQyxNQUFNO2dCQUFlO2dCQUM5QjtvQkFBRUQsSUFBSTtvQkFBR0MsTUFBTTtnQkFBTTtnQkFDckI7b0JBQUVELElBQUk7b0JBQUdDLE1BQU07Z0JBQU07Z0JBQ3JCO29CQUFFRCxJQUFJO29CQUFHQyxNQUFNO2dCQUF5QjtnQkFDeEM7b0JBQUVELElBQUk7b0JBQUdDLE1BQU07Z0JBQXdCO2FBQ3hDO1FBQ0g7UUFDQTtZQUNFRixNQUFNO1lBQ05QLE1BQU1SO1FBQ1I7UUFDQTtZQUNFZSxNQUFNO1lBQ05QLE1BQU0sRUFBRTtRQUNWO1FBQ0E7WUFDRU8sTUFBTTtZQUNOUCxNQUFNO2dCQUNKO29CQUNFUSxJQUFJO29CQUNKQyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRCxJQUFJO29CQUNKQyxNQUFNO2dCQUNSO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VGLE1BQU07WUFDTlAsTUFBTTtnQkFDSjtvQkFDRVEsSUFBSTtvQkFDSkMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsSUFBSTtvQkFDSkMsTUFBTTtnQkFDUjthQUNEO1FBQ0g7S0FDRDtJQUVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaTCxZQUFZTSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3RCLDhEQUFDekIsdURBQVlBO2dCQUFDMEIsTUFBTUYsS0FBS2IsSUFBSTtnQkFBRWdCLFVBQVVILEtBQUtOLElBQUk7Ozs7Ozs7Ozs7O0FBSTFELEVBQUM7R0F6RVloQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXIudHN4P2QwMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmludGVyZmFjZSBJR2VucmUge1xuICBfaWQ6IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IEZpbHRlciA9ICgpID0+IHtcblxuICBjb25zdCBbZ2VucmVzLCBzZXRHZW5yZXNdID0gdXNlU3RhdGU8W0lHZW5yZV0+KCk7XG5cbiAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL21vdmllZ2VucmVzXCIsIHsgcGFnZVNpemU6IDEsIGxpbWl0OiAxMCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge3NldEdlbnJlcyhyZXMuZGF0YS5yZXN1bHQpIFxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5yZXN1bHQpO1xuICAgICAgfVxuICAgICAgKVxuICAgICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKVxuICAgICAgKVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YSgpXG4gIH0sIFtdKTtcblxuICBjb25zdCBmaWx0ZXJNZW51cyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlNvcnRcIixcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgeyBpZDogMSwgdGV4dDogXCJNb3N0IFBvcHVsYXJcIiB9LFxuICAgICAgICB7IGlkOiAyLCB0ZXh0OiBcIk5ld1wiIH0sXG4gICAgICAgIHsgaWQ6IDMsIHRleHQ6IFwiQS1aXCIgfSxcbiAgICAgICAgeyBpZDogNCwgdGV4dDogXCJUT01BVE9NRVRFUsKuIChISUdIRVNUKVwiIH0sXG4gICAgICAgIHsgaWQ6IDUsIHRleHQ6IFwiVE9NQVRPTUVURVLCriAoTE9XRVNUKVwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJHZW5yZVwiLFxuICAgICAgZGF0YTogZ2VucmVzXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlJhdGluZ1wiLFxuICAgICAgZGF0YTogW11cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXVkaWVuY2Ugc2NvcmVcIixcbiAgICAgIGRhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIHRleHQ6IFwiRlJFU0ggQXQgbGVhc3QgNjAlIG9mIHJldmlld3MgZm9yIGEgbW92aWUgb3IgVFYgc2hvdyBhcmUgcG9zaXRpdmVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIHRleHQ6IFwiUk9UVEVOIExlc3MgdGhhbiA2MCUgb2YgcmV2aWV3cyBmb3IgYSBtb3ZpZSBvciBUViBzaG93IGFyZSBwb3NpdGl2ZS5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlRvbWF0b21ldGVyXCIsXG4gICAgICBkYXRhOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0ZXh0OiBcIkNFUlRJRklFRCBGUkVTSCAtIEEgc3BlY2lhbCBkaXN0aW5jdGlvbiBhd2FyZGVkIHRvIHRoZSBiZXN0IHJldmlld2VkIG1vdmllcyBhbmQgVFYgU2hvd3MuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICB0ZXh0OiBcIkZSRVNIIC0gQXQgbGVhc3QgNjAlIG9mIHJldmlld3MgZm9yIGEgbW92aWUgb3IgVFYgc2hvdyBhcmUgcG9zaXRpdmUuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgcHktMic+XG4gICAgICB7ZmlsdGVyTWVudXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8RHJvcGRvd25NZW51IGxpc3Q9e2l0ZW0uZGF0YX0gbWVudVRleHQ9e2l0ZW0ubmFtZX0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duTWVudSIsImF4aW9zIiwiRmlsdGVyIiwiZ2VucmVzIiwic2V0R2VucmVzIiwiZ2V0RGF0YSIsInBvc3QiLCJwYWdlU2l6ZSIsImxpbWl0IiwidGhlbiIsInJlcyIsImRhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJmaWx0ZXJNZW51cyIsIm5hbWUiLCJpZCIsInRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaXN0IiwibWVudVRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Filter.tsx\n"));

/***/ })

});