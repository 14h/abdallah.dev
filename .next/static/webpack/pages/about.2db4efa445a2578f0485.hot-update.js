webpackHotUpdate_N_E("pages/about",{

/***/ "./components/canvas.js":
/*!******************************!*\
  !*** ./components/canvas.js ***!
  \******************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/14h/Documents/void/abdallah.dev/components/canvas.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nvar Canvas = function Canvas(props) {\n  _s();\n\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var draw = function draw(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    ctx.fillStyle = '#000000';\n    ctx.beginPath();\n    console.log('frameCount', frameCount);\n    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 20 * Math.pow(Math.sin(frameCount * 0.05), 2), 0, 2 * Math.PI);\n    ctx.fill();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var canvas = canvasRef.current;\n    var context = canvas.getContext('2d');\n    var frameCount = 0;\n    console.log(frameCount);\n    var animationFrameId; //Our draw came here\n\n    var render = function render() {\n      frameCount++;\n      draw(context, frameCount);\n      animationFrameId = window.requestAnimationFrame(render);\n    };\n\n    render();\n    return function () {\n      window.cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw]);\n  return __jsx(\"canvas\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: canvasRef\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 12\n    }\n  }));\n};\n\n_s(Canvas, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n\n_c = Canvas;\n\nvar _c;\n\n$RefreshReg$(_c, \"Canvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYW52YXMuanM/ZWRhYyJdLCJuYW1lcyI6WyJDYW52YXMiLCJwcm9wcyIsImNhbnZhc1JlZiIsInVzZVJlZiIsImRyYXciLCJjdHgiLCJmcmFtZUNvdW50IiwiY2xlYXJSZWN0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJjb25zb2xlIiwibG9nIiwiYXJjIiwiTWF0aCIsInNpbiIsIlBJIiwiZmlsbCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImFuaW1hdGlvbkZyYW1lSWQiLCJyZW5kZXIiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFFM0IsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxVQUFOLEVBQXFCO0FBQzlCRCxPQUFHLENBQUNFLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CRixHQUFHLENBQUNHLE1BQUosQ0FBV0MsS0FBL0IsRUFBc0NKLEdBQUcsQ0FBQ0csTUFBSixDQUFXRSxNQUFqRDtBQUNBTCxPQUFHLENBQUNNLFNBQUosR0FBZ0IsU0FBaEI7QUFDQU4sT0FBRyxDQUFDTyxTQUFKO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJSLFVBQTFCO0FBQ0FELE9BQUcsQ0FBQ1UsR0FBSixDQUNJVixHQUFHLENBQUNHLE1BQUosQ0FBV0MsS0FBWCxHQUFtQixDQUR2QixFQUVJSixHQUFHLENBQUNHLE1BQUosQ0FBV0UsTUFBWCxHQUFvQixDQUZ4QixFQUdJLGNBQUtNLElBQUksQ0FBQ0MsR0FBTCxDQUFTWCxVQUFVLEdBQUcsSUFBdEIsQ0FBTCxFQUFvQyxDQUFwQyxDQUhKLEVBSUksQ0FKSixFQUtJLElBQUlVLElBQUksQ0FBQ0UsRUFMYjtBQU9BYixPQUFHLENBQUNjLElBQUo7QUFDSCxHQWJEOztBQWVBQyx5REFBUyxDQUFDLFlBQU07QUFFWixRQUFNWixNQUFNLEdBQUdOLFNBQVMsQ0FBQ21CLE9BQXpCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHZCxNQUFNLENBQUNlLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFDQSxRQUFJakIsVUFBVSxHQUFHLENBQWpCO0FBQ0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixVQUFaO0FBQ0EsUUFBSWtCLGdCQUFKLENBTlksQ0FRWjs7QUFDQSxRQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCbkIsZ0JBQVU7QUFDVkYsVUFBSSxDQUFDa0IsT0FBRCxFQUFVaEIsVUFBVixDQUFKO0FBQ0FrQixzQkFBZ0IsR0FBR0UsTUFBTSxDQUFDQyxxQkFBUCxDQUE2QkYsTUFBN0IsQ0FBbkI7QUFDSCxLQUpEOztBQUtBQSxVQUFNO0FBRU4sV0FBTyxZQUFNO0FBQ1RDLFlBQU0sQ0FBQ0Usb0JBQVAsQ0FBNEJKLGdCQUE1QjtBQUNILEtBRkQ7QUFHSCxHQW5CUSxFQW1CTixDQUFDcEIsSUFBRCxDQW5CTSxDQUFUO0FBcUJBLFNBQU87QUFBUSxPQUFHLEVBQUVGO0FBQWIsS0FBNEJELEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNILENBekNNOztHQUFNRCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYW52YXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDYW52YXMgPSBwcm9wcyA9PiB7XG5cbiAgICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBkcmF3ID0gKGN0eCwgZnJhbWVDb3VudCkgPT4ge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnZnJhbWVDb3VudCcsIGZyYW1lQ291bnQpXG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICBjdHguY2FudmFzLndpZHRoIC8gMixcbiAgICAgICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIDIwICogTWF0aC5zaW4oZnJhbWVDb3VudCAqIDAuMDUpICoqIDIsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGxldCBmcmFtZUNvdW50ID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coZnJhbWVDb3VudClcbiAgICAgICAgbGV0IGFuaW1hdGlvbkZyYW1lSWQ7XG5cbiAgICAgICAgLy9PdXIgZHJhdyBjYW1lIGhlcmVcbiAgICAgICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgZnJhbWVDb3VudCsrO1xuICAgICAgICAgICAgZHJhdyhjb250ZXh0LCBmcmFtZUNvdW50KTtcbiAgICAgICAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICAgICAgfTtcbiAgICB9LCBbZHJhd10pO1xuXG4gICAgcmV0dXJuIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IHsuLi5wcm9wc30vPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/canvas.js\n");

/***/ })

})