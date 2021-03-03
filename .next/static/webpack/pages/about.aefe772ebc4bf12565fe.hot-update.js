webpackHotUpdate_N_E("pages/about",{

/***/ "./components/canvas.js":
/*!******************************!*\
  !*** ./components/canvas.js ***!
  \******************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/14h/Documents/void/abdallah.dev/components/canvas.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nvar Canvas = function Canvas(props) {\n  _s();\n\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var draw = function draw(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    ctx.fillStyle = '#000000'; // ctx.beginPath();\n\n    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 800 * Math.pow(Math.sin(frameCount * 0.005), 2), 0, 2 * Math.PI); // ctx.fill();\n\n    ctx.stroke();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var canvas = canvasRef.current;\n    var context = canvas.getContext('2d');\n    var frameCount = 0;\n    var animationFrameId; //Our draw came here\n\n    var render = function render() {\n      frameCount++;\n      draw(context, frameCount);\n      animationFrameId = window.requestAnimationFrame(render);\n    };\n\n    render();\n    return function () {\n      window.cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw]);\n  return __jsx(\"canvas\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: canvasRef\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 12\n    }\n  }));\n};\n\n_s(Canvas, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n\n_c = Canvas;\n\nvar _c;\n\n$RefreshReg$(_c, \"Canvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYW52YXMuanM/ZWRhYyJdLCJuYW1lcyI6WyJDYW52YXMiLCJwcm9wcyIsImNhbnZhc1JlZiIsInVzZVJlZiIsImRyYXciLCJjdHgiLCJmcmFtZUNvdW50IiwiY2xlYXJSZWN0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJhcmMiLCJNYXRoIiwic2luIiwiUEkiLCJzdHJva2UiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJhbmltYXRpb25GcmFtZUlkIiwicmVuZGVyIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBRTNCLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCOztBQUVBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEdBQUQsRUFBTUMsVUFBTixFQUFxQjtBQUM5QkQsT0FBRyxDQUFDRSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQkYsR0FBRyxDQUFDRyxNQUFKLENBQVdDLEtBQS9CLEVBQXNDSixHQUFHLENBQUNHLE1BQUosQ0FBV0UsTUFBakQ7QUFDQUwsT0FBRyxDQUFDTSxTQUFKLEdBQWdCLFNBQWhCLENBRjhCLENBRzlCOztBQUNBTixPQUFHLENBQUNPLEdBQUosQ0FDSVAsR0FBRyxDQUFDRyxNQUFKLENBQVdDLEtBQVgsR0FBbUIsQ0FEdkIsRUFFSUosR0FBRyxDQUFDRyxNQUFKLENBQVdFLE1BQVgsR0FBb0IsQ0FGeEIsRUFHSSxlQUFNRyxJQUFJLENBQUNDLEdBQUwsQ0FBU1IsVUFBVSxHQUFHLEtBQXRCLENBQU4sRUFBc0MsQ0FBdEMsQ0FISixFQUlJLENBSkosRUFLSSxJQUFJTyxJQUFJLENBQUNFLEVBTGIsRUFKOEIsQ0FXOUI7O0FBQ0FWLE9BQUcsQ0FBQ1csTUFBSjtBQUNILEdBYkQ7O0FBZUFDLHlEQUFTLENBQUMsWUFBTTtBQUVaLFFBQU1ULE1BQU0sR0FBR04sU0FBUyxDQUFDZ0IsT0FBekI7QUFDQSxRQUFNQyxPQUFPLEdBQUdYLE1BQU0sQ0FBQ1ksVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUNBLFFBQUlkLFVBQVUsR0FBRyxDQUFqQjtBQUNBLFFBQUllLGdCQUFKLENBTFksQ0FPWjs7QUFDQSxRQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCaEIsZ0JBQVU7QUFDVkYsVUFBSSxDQUFDZSxPQUFELEVBQVViLFVBQVYsQ0FBSjtBQUNBZSxzQkFBZ0IsR0FBR0UsTUFBTSxDQUFDQyxxQkFBUCxDQUE2QkYsTUFBN0IsQ0FBbkI7QUFDSCxLQUpEOztBQUtBQSxVQUFNO0FBRU4sV0FBTyxZQUFNO0FBQ1RDLFlBQU0sQ0FBQ0Usb0JBQVAsQ0FBNEJKLGdCQUE1QjtBQUNILEtBRkQ7QUFHSCxHQWxCUSxFQWtCTixDQUFDakIsSUFBRCxDQWxCTSxDQUFUO0FBb0JBLFNBQU87QUFBUSxPQUFHLEVBQUVGO0FBQWIsS0FBNEJELEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNILENBeENNOztHQUFNRCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYW52YXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDYW52YXMgPSBwcm9wcyA9PiB7XG5cbiAgICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBkcmF3ID0gKGN0eCwgZnJhbWVDb3VudCkgPT4ge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcbiAgICAgICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgY3R4LmNhbnZhcy53aWR0aCAvIDIsXG4gICAgICAgICAgICBjdHguY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICAgICAgICA4MDAgKiBNYXRoLnNpbihmcmFtZUNvdW50ICogMC4wMDUpICoqIDIsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgbGV0IGZyYW1lQ291bnQgPSAwO1xuICAgICAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZDtcblxuICAgICAgICAvL091ciBkcmF3IGNhbWUgaGVyZVxuICAgICAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBmcmFtZUNvdW50Kys7XG4gICAgICAgICAgICBkcmF3KGNvbnRleHQsIGZyYW1lQ291bnQpO1xuICAgICAgICAgICAgYW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpO1xuICAgICAgICB9O1xuICAgIH0sIFtkcmF3XSk7XG5cbiAgICByZXR1cm4gPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gey4uLnByb3BzfS8+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/canvas.js\n");

/***/ })

})