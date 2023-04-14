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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Filter\": function() { return /* binding */ Filter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownMenu */ \"./src/components/DropdownMenu.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Filter = ()=>{\n    _s();\n    const [genres, setGenres] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const getData = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8080/api/movie\", {\n            pageSize: 1,\n            limit: 10\n        }).then((res)=>setGenres(res.data.result));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData();\n    }, []);\n    const filterMenus = [\n        {\n            name: \"Sort\",\n            data: [\n                {\n                    id: 1,\n                    text: \"Most Popular\"\n                },\n                {\n                    id: 2,\n                    text: \"New\"\n                },\n                {\n                    id: 3,\n                    text: \"A-Z\"\n                },\n                {\n                    id: 4,\n                    text: \"TOMATOMETER\\xae (HIGHEST)\"\n                },\n                {\n                    id: 5,\n                    text: \"TOMATOMETER\\xae (LOWEST)\"\n                }\n            ]\n        },\n        {\n            name: \"Genre\",\n            data: genres._id\n        },\n        {\n            name: \"Rating\",\n            data: []\n        },\n        {\n            name: \"Audience score\",\n            data: [\n                {\n                    id: 1,\n                    text: \"FRESH At least 60% of reviews for a movie or TV show are positive\"\n                },\n                {\n                    id: 2,\n                    text: \"ROTTEN Less than 60% of reviews for a movie or TV show are positive.\"\n                }\n            ]\n        },\n        {\n            name: \"Tomatometer\",\n            data: [\n                {\n                    id: 1,\n                    text: \"CERTIFIED FRESH - A special distinction awarded to the best reviewed movies and TV Shows.\"\n                },\n                {\n                    id: 2,\n                    text: \"FRESH - At least 60% of reviews for a movie or TV show are positive.\"\n                }\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center py-2\",\n        children: filterMenus.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {\n                list: item.data,\n                menuText: item.name\n            }, void 0, false, {\n                fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Filter.tsx\",\n                lineNumber: 75,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/morning/Desktop/MOVIE.NEXTJS/movie-fe/src/components/Filter.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Filter, \"eEfMfp1Cbh4LS6RBfGZzD1vkYUA=\");\n_c = Filter;\nvar _c;\n$RefreshReg$(_c, \"Filter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWx0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNKO0FBQ3BCO0FBT25CLE1BQU1LLFNBQVMsSUFBTTs7SUFFMUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQTtJQUVwQyxNQUFNTSxVQUFVLElBQUs7UUFDbkJKLGtEQUNLLENBQUMsbUNBQW1DO1lBQUNNLFVBQVU7WUFBR0MsT0FBTztRQUFFLEdBQy9EQyxJQUFJLENBQUMsQ0FBQ0MsTUFBT04sVUFBVU0sSUFBSUMsSUFBSSxDQUFDQyxNQUFNO0lBRXpDO0lBRUFkLGdEQUFTQSxDQUFDLElBQUk7UUFDWk87SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNUSxjQUFjO1FBQ2xCO1lBQ0VDLE1BQU07WUFDTkgsTUFBTTtnQkFDSjtvQkFBRUksSUFBSTtvQkFBR0MsTUFBTTtnQkFBZTtnQkFDOUI7b0JBQUVELElBQUk7b0JBQUdDLE1BQU07Z0JBQU07Z0JBQ3JCO29CQUFFRCxJQUFJO29CQUFHQyxNQUFNO2dCQUFNO2dCQUNyQjtvQkFBRUQsSUFBSTtvQkFBR0MsTUFBTTtnQkFBeUI7Z0JBQ3hDO29CQUFFRCxJQUFJO29CQUFHQyxNQUFNO2dCQUF3QjthQUN4QztRQUNIO1FBQ0E7WUFDRUYsTUFBTTtZQUNOSCxNQUFNUixPQUFPYyxHQUFHO1FBQ2xCO1FBQ0E7WUFDRUgsTUFBTTtZQUNOSCxNQUFNLEVBQUU7UUFDVjtRQUNBO1lBQ0VHLE1BQU07WUFDTkgsTUFBTTtnQkFDSjtvQkFDRUksSUFBSTtvQkFDSkMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsSUFBSTtvQkFDSkMsTUFBTTtnQkFDUjthQUNEO1FBQ0g7UUFDQTtZQUNFRixNQUFNO1lBQ05ILE1BQU07Z0JBQ0o7b0JBQ0VJLElBQUk7b0JBQ0pDLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELElBQUk7b0JBQ0pDLE1BQU07Z0JBQ1I7YUFDRDtRQUNIO0tBQ0Q7SUFFRCxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDWk4sWUFBWU8sR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNwQiw4REFBQ3RCLHVEQUFZQTtnQkFBQ3VCLE1BQU1GLEtBQUtWLElBQUk7Z0JBQUVhLFVBQVVILEtBQUtQLElBQUk7Ozs7Ozs7Ozs7O0FBSTVELEVBQUM7R0FyRVlaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlci50c3g/ZDAyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW50ZXJmYWNlIElHZW5yZSB7XG4gIF9pZDogc3RyaW5nO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgRmlsdGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtnZW5yZXMsIHNldEdlbnJlc10gPSB1c2VTdGF0ZTxbSUdlbnJlXT4oKTtcblxuICBjb25zdCBnZXREYXRhID0gKCkgPT57XG4gICAgYXhpb3NcbiAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvbW92aWVcIiwge3BhZ2VTaXplOiAxLCBsaW1pdDogMTB9KVxuICAgIC50aGVuKChyZXMpPT4gc2V0R2VucmVzKHJlcy5kYXRhLnJlc3VsdClcbiAgICApXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZ2V0RGF0YSgpXG4gIH0sIFtdKTtcbiAgXG4gIGNvbnN0IGZpbHRlck1lbnVzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiU29ydFwiLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7IGlkOiAxLCB0ZXh0OiBcIk1vc3QgUG9wdWxhclwiIH0sXG4gICAgICAgIHsgaWQ6IDIsIHRleHQ6IFwiTmV3XCIgfSxcbiAgICAgICAgeyBpZDogMywgdGV4dDogXCJBLVpcIiB9LFxuICAgICAgICB7IGlkOiA0LCB0ZXh0OiBcIlRPTUFUT01FVEVSwq4gKEhJR0hFU1QpXCIgfSxcbiAgICAgICAgeyBpZDogNSwgdGV4dDogXCJUT01BVE9NRVRFUsKuIChMT1dFU1QpXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkdlbnJlXCIsXG4gICAgICBkYXRhOiBnZW5yZXMuX2lkXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlJhdGluZ1wiLFxuICAgICAgZGF0YTogW11cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXVkaWVuY2Ugc2NvcmVcIixcbiAgICAgIGRhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIHRleHQ6IFwiRlJFU0ggQXQgbGVhc3QgNjAlIG9mIHJldmlld3MgZm9yIGEgbW92aWUgb3IgVFYgc2hvdyBhcmUgcG9zaXRpdmVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIHRleHQ6IFwiUk9UVEVOIExlc3MgdGhhbiA2MCUgb2YgcmV2aWV3cyBmb3IgYSBtb3ZpZSBvciBUViBzaG93IGFyZSBwb3NpdGl2ZS5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlRvbWF0b21ldGVyXCIsXG4gICAgICBkYXRhOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0ZXh0OiBcIkNFUlRJRklFRCBGUkVTSCAtIEEgc3BlY2lhbCBkaXN0aW5jdGlvbiBhd2FyZGVkIHRvIHRoZSBiZXN0IHJldmlld2VkIG1vdmllcyBhbmQgVFYgU2hvd3MuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICB0ZXh0OiBcIkZSRVNIIC0gQXQgbGVhc3QgNjAlIG9mIHJldmlld3MgZm9yIGEgbW92aWUgb3IgVFYgc2hvdyBhcmUgcG9zaXRpdmUuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBweS0yJz5cbiAgICAgIHtmaWx0ZXJNZW51cy5tYXAoKGl0ZW0sIGluZGV4KT0+KFxuICAgICAgICAgIDxEcm9wZG93bk1lbnUgbGlzdD17aXRlbS5kYXRhfSBtZW51VGV4dD17aXRlbS5uYW1lfS8+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duTWVudSIsImF4aW9zIiwiRmlsdGVyIiwiZ2VucmVzIiwic2V0R2VucmVzIiwiZ2V0RGF0YSIsInBvc3QiLCJwYWdlU2l6ZSIsImxpbWl0IiwidGhlbiIsInJlcyIsImRhdGEiLCJyZXN1bHQiLCJmaWx0ZXJNZW51cyIsIm5hbWUiLCJpZCIsInRleHQiLCJfaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaXN0IiwibWVudVRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Filter.tsx\n"));

/***/ })

});