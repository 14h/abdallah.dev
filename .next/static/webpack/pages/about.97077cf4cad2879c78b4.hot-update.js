webpackHotUpdate_N_E("pages/about",{

/***/ "./components/canvas.js":
/*!******************************!*\
  !*** ./components/canvas.js ***!
  \******************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/14h/Documents/void/abdallah.dev/components/canvas.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nvar Canvas = function Canvas(props) {\n  _s();\n\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var draw = function draw(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    ctx.fillStyle = '#000000';\n    ctx.beginPath();\n    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 400 * Math.pow(Math.sin(frameCount * 0.02), 2), 0, 2 * Math.PI); // ctx.fill();\n\n    ctx.stroke();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var canvas = canvasRef.current;\n    var context = canvas.getContext('2d');\n    var frameCount = 0;\n    var animationFrameId; //Our draw came here\n\n    var render = function render() {\n      frameCount++;\n      draw(context, frameCount);\n      animationFrameId = window.requestAnimationFrame(render);\n    };\n\n    render();\n    return function () {\n      window.cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw]);\n  return __jsx(\"canvas\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: canvasRef\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 12\n    }\n  }));\n};\n\n_s(Canvas, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n\n_c = Canvas;\n\nvar _c;\n\n$RefreshReg$(_c, \"Canvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYW52YXMuanM/ZWRhYyJdLCJuYW1lcyI6WyJDYW52YXMiLCJwcm9wcyIsImNhbnZhc1JlZiIsInVzZVJlZiIsImRyYXciLCJjdHgiLCJmcmFtZUNvdW50IiwiY2xlYXJSZWN0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwic2luIiwiUEkiLCJzdHJva2UiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJhbmltYXRpb25GcmFtZUlkIiwicmVuZGVyIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBRTNCLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCOztBQUVBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEdBQUQsRUFBTUMsVUFBTixFQUFxQjtBQUM5QkQsT0FBRyxDQUFDRSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQkYsR0FBRyxDQUFDRyxNQUFKLENBQVdDLEtBQS9CLEVBQXNDSixHQUFHLENBQUNHLE1BQUosQ0FBV0UsTUFBakQ7QUFDQUwsT0FBRyxDQUFDTSxTQUFKLEdBQWdCLFNBQWhCO0FBQ0FOLE9BQUcsQ0FBQ08sU0FBSjtBQUNBUCxPQUFHLENBQUNRLEdBQUosQ0FDSVIsR0FBRyxDQUFDRyxNQUFKLENBQVdDLEtBQVgsR0FBbUIsQ0FEdkIsRUFFSUosR0FBRyxDQUFDRyxNQUFKLENBQVdFLE1BQVgsR0FBb0IsQ0FGeEIsRUFHSSxlQUFNSSxJQUFJLENBQUNDLEdBQUwsQ0FBU1QsVUFBVSxHQUFHLElBQXRCLENBQU4sRUFBcUMsQ0FBckMsQ0FISixFQUlJLENBSkosRUFLSSxJQUFJUSxJQUFJLENBQUNFLEVBTGIsRUFKOEIsQ0FXOUI7O0FBQ0FYLE9BQUcsQ0FBQ1ksTUFBSjtBQUNILEdBYkQ7O0FBZUFDLHlEQUFTLENBQUMsWUFBTTtBQUVaLFFBQU1WLE1BQU0sR0FBR04sU0FBUyxDQUFDaUIsT0FBekI7QUFDQSxRQUFNQyxPQUFPLEdBQUdaLE1BQU0sQ0FBQ2EsVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUNBLFFBQUlmLFVBQVUsR0FBRyxDQUFqQjtBQUNBLFFBQUlnQixnQkFBSixDQUxZLENBT1o7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQmpCLGdCQUFVO0FBQ1ZGLFVBQUksQ0FBQ2dCLE9BQUQsRUFBVWQsVUFBVixDQUFKO0FBQ0FnQixzQkFBZ0IsR0FBR0UsTUFBTSxDQUFDQyxxQkFBUCxDQUE2QkYsTUFBN0IsQ0FBbkI7QUFDSCxLQUpEOztBQUtBQSxVQUFNO0FBRU4sV0FBTyxZQUFNO0FBQ1RDLFlBQU0sQ0FBQ0Usb0JBQVAsQ0FBNEJKLGdCQUE1QjtBQUNILEtBRkQ7QUFHSCxHQWxCUSxFQWtCTixDQUFDbEIsSUFBRCxDQWxCTSxDQUFUO0FBb0JBLFNBQU87QUFBUSxPQUFHLEVBQUVGO0FBQWIsS0FBNEJELEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNILENBeENNOztHQUFNRCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYW52YXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDYW52YXMgPSBwcm9wcyA9PiB7XG5cbiAgICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBkcmF3ID0gKGN0eCwgZnJhbWVDb3VudCkgPT4ge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgY3R4LmNhbnZhcy53aWR0aCAvIDIsXG4gICAgICAgICAgICBjdHguY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICAgICAgICA0MDAgKiBNYXRoLnNpbihmcmFtZUNvdW50ICogMC4wMikgKiogMixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICApO1xuICAgICAgICAvLyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBsZXQgZnJhbWVDb3VudCA9IDA7XG4gICAgICAgIGxldCBhbmltYXRpb25GcmFtZUlkO1xuXG4gICAgICAgIC8vT3VyIGRyYXcgY2FtZSBoZXJlXG4gICAgICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGZyYW1lQ291bnQrKztcbiAgICAgICAgICAgIGRyYXcoY29udGV4dCwgZnJhbWVDb3VudCk7XG4gICAgICAgICAgICBhbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCk7XG4gICAgICAgIH07XG4gICAgfSwgW2RyYXddKTtcblxuICAgIHJldHVybiA8Y2FudmFzIHJlZj17Y2FudmFzUmVmfSB7Li4ucHJvcHN9Lz47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/canvas.js\n");

/***/ })

})