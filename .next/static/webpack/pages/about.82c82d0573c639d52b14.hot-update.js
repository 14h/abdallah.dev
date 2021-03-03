webpackHotUpdate_N_E("pages/about",{

/***/ "./components/canvas.js":
/*!******************************!*\
  !*** ./components/canvas.js ***!
  \******************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$(),\n    _this = undefined,\n    _jsxFileName = \"/Users/14h/Documents/void/abdallah.dev/components/canvas.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar useWindowSize = function useWindowSize() {\n  _s();\n\n  // Initialize state with undefined width/height so server and client renders match\n  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    width: undefined,\n    height: undefined\n  }),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // only execute all the code below in client side\n    if (true) {\n      // Handler to call on window resize\n      var handleResize = function handleResize() {\n        // Set window width/height to state\n        setWindowSize({\n          width: window.innerWidth,\n          height: window.innerHeight\n        });\n      }; // Add event listener\n\n\n      window.addEventListener(\"resize\", handleResize); // Call handler right away so state gets updated with initial window size\n\n      handleResize(); // Remove event listener on cleanup\n\n      return function () {\n        return window.removeEventListener(\"resize\", handleResize);\n      };\n    }\n  }, []); // Empty array ensures that effect is only run on mount\n\n  return windowSize;\n};\n\n_s(useWindowSize, \"Lx6dFCJt7Ze4WyzsCH5RzM+GN9Y=\");\n\nvar Canvas = function Canvas(props) {\n  _s2();\n\n  var _windowSize$width, _windowSize$height;\n\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var windowSize = useWindowSize();\n  console.log(windowSize);\n\n  var draw = function draw(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    ctx.fillStyle = '#000000'; // ctx.beginPath();\n\n    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 1300 * Math.pow(Math.sin(frameCount * 0.01), 2), 0, 2 * Math.PI); // ctx.fill();\n\n    ctx.stroke();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var canvas = canvasRef.current;\n    var context = canvas.getContext('2d');\n    var frameCount = 0;\n    var animationFrameId; //Our draw came here\n\n    var render = function render() {\n      frameCount++;\n      draw(context, frameCount);\n      animationFrameId = window.requestAnimationFrame(render);\n    };\n\n    render();\n    return function () {\n      window.cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw]);\n  return __jsx(\"canvas\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: canvasRef,\n    width: \"\".concat((_windowSize$width = windowSize === null || windowSize === void 0 ? void 0 : windowSize.width) !== null && _windowSize$width !== void 0 ? _windowSize$width : 1920, \"px\"),\n    height: \"\".concat((_windowSize$height = windowSize === null || windowSize === void 0 ? void 0 : windowSize.height) !== null && _windowSize$height !== void 0 ? _windowSize$height : 1440, \"px\")\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 12\n    }\n  }));\n};\n\n_s2(Canvas, \"dGRSo9fEFYv4dTGHma1e4dcwMnA=\", false, function () {\n  return [useWindowSize];\n});\n\n_c = Canvas;\n\nvar _c;\n\n$RefreshReg$(_c, \"Canvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYW52YXMuanM/ZWRhYyJdLCJuYW1lcyI6WyJ1c2VXaW5kb3dTaXplIiwidXNlU3RhdGUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDYW52YXMiLCJwcm9wcyIsImNhbnZhc1JlZiIsInVzZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJkcmF3IiwiY3R4IiwiZnJhbWVDb3VudCIsImNsZWFyUmVjdCIsImNhbnZhcyIsImZpbGxTdHlsZSIsImFyYyIsIk1hdGgiLCJzaW4iLCJQSSIsInN0cm9rZSIsImN1cnJlbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImFuaW1hdGlvbkZyYW1lSWQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUN4QjtBQUNBO0FBRndCLGtCQUdZQyxzREFBUSxDQUFDO0FBQ3pDQyxTQUFLLEVBQUVDLFNBRGtDO0FBRXpDQyxVQUFNLEVBQUVEO0FBRmlDLEdBQUQsQ0FIcEI7QUFBQSxNQUdqQkUsVUFIaUI7QUFBQSxNQUdMQyxhQUhLOztBQVF4QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1o7QUFDQSxjQUFtQztBQUMvQjtBQUQrQixVQUV0QkMsWUFGc0IsR0FFL0IsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQjtBQUNBRixxQkFBYSxDQUFDO0FBQ1ZKLGVBQUssRUFBRU8sTUFBTSxDQUFDQyxVQURKO0FBRVZOLGdCQUFNLEVBQUVLLE1BQU0sQ0FBQ0U7QUFGTCxTQUFELENBQWI7QUFJSCxPQVI4QixFQVUvQjs7O0FBQ0FGLFlBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NKLFlBQWxDLEVBWCtCLENBYS9COztBQUNBQSxrQkFBWSxHQWRtQixDQWdCL0I7O0FBQ0EsYUFBTztBQUFBLGVBQU1DLE1BQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNMLFlBQXJDLENBQU47QUFBQSxPQUFQO0FBQ0g7QUFDSixHQXJCUSxFQXFCTixFQXJCTSxDQUFULENBUndCLENBNkJoQjs7QUFDUixTQUFPSCxVQUFQO0FBQ0gsQ0EvQkQ7O0dBQU1MLGE7O0FBaUNDLElBQU1jLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBOztBQUUzQixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQU1aLFVBQVUsR0FBR0wsYUFBYSxFQUFoQztBQUNBa0IsU0FBTyxDQUFDQyxHQUFSLENBQVlkLFVBQVo7O0FBRUEsTUFBTWUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxVQUFOLEVBQXFCO0FBQzlCRCxPQUFHLENBQUNFLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CRixHQUFHLENBQUNHLE1BQUosQ0FBV3RCLEtBQS9CLEVBQXNDbUIsR0FBRyxDQUFDRyxNQUFKLENBQVdwQixNQUFqRDtBQUNBaUIsT0FBRyxDQUFDSSxTQUFKLEdBQWdCLFNBQWhCLENBRjhCLENBRzlCOztBQUNBSixPQUFHLENBQUNLLEdBQUosQ0FDSUwsR0FBRyxDQUFDRyxNQUFKLENBQVd0QixLQUFYLEdBQW1CLENBRHZCLEVBRUltQixHQUFHLENBQUNHLE1BQUosQ0FBV3BCLE1BQVgsR0FBb0IsQ0FGeEIsRUFHSSxnQkFBT3VCLElBQUksQ0FBQ0MsR0FBTCxDQUFTTixVQUFVLEdBQUcsSUFBdEIsQ0FBUCxFQUFzQyxDQUF0QyxDQUhKLEVBSUksQ0FKSixFQUtJLElBQUlLLElBQUksQ0FBQ0UsRUFMYixFQUo4QixDQVc5Qjs7QUFDQVIsT0FBRyxDQUFDUyxNQUFKO0FBQ0gsR0FiRDs7QUFlQXZCLHlEQUFTLENBQUMsWUFBTTtBQUVaLFFBQU1pQixNQUFNLEdBQUdSLFNBQVMsQ0FBQ2UsT0FBekI7QUFDQSxRQUFNQyxPQUFPLEdBQUdSLE1BQU0sQ0FBQ1MsVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUNBLFFBQUlYLFVBQVUsR0FBRyxDQUFqQjtBQUNBLFFBQUlZLGdCQUFKLENBTFksQ0FPWjs7QUFDQSxRQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCYixnQkFBVTtBQUNWRixVQUFJLENBQUNZLE9BQUQsRUFBVVYsVUFBVixDQUFKO0FBQ0FZLHNCQUFnQixHQUFHekIsTUFBTSxDQUFDMkIscUJBQVAsQ0FBNkJELE1BQTdCLENBQW5CO0FBQ0gsS0FKRDs7QUFLQUEsVUFBTTtBQUVOLFdBQU8sWUFBTTtBQUNUMUIsWUFBTSxDQUFDNEIsb0JBQVAsQ0FBNEJILGdCQUE1QjtBQUNILEtBRkQ7QUFHSCxHQWxCUSxFQWtCTixDQUFDZCxJQUFELENBbEJNLENBQVQ7QUFvQkEsU0FBTztBQUNILE9BQUcsRUFBRUosU0FERjtBQUVILFNBQUssaUNBQUtYLFVBQUwsYUFBS0EsVUFBTCx1QkFBS0EsVUFBVSxDQUFFSCxLQUFqQixpRUFBMEIsSUFBMUIsT0FGRjtBQUdILFVBQU0sa0NBQUtHLFVBQUwsYUFBS0EsVUFBTCx1QkFBS0EsVUFBVSxDQUFFRCxNQUFqQixtRUFBMkIsSUFBM0I7QUFISCxLQUlDVyxLQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQU1ILENBL0NNOztJQUFNRCxNO1VBR1VkLGE7OztLQUhWYyxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYW52YXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xuICAgIC8vIEluaXRpYWxpemUgc3RhdGUgd2l0aCB1bmRlZmluZWQgd2lkdGgvaGVpZ2h0IHNvIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMgbWF0Y2hcbiAgICAvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vam9zaHdjb21lYXUuY29tL3JlYWN0L3RoZS1wZXJpbHMtb2YtcmVoeWRyYXRpb24vXG4gICAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe1xuICAgICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICB9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIG9ubHkgZXhlY3V0ZSBhbGwgdGhlIGNvZGUgYmVsb3cgaW4gY2xpZW50IHNpZGVcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgICAgICAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXG4gICAgICAgICAgICAgICAgc2V0V2luZG93U2l6ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblxuICAgICAgICAgICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxuICAgICAgICAgICAgaGFuZGxlUmVzaXplKCk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxuICAgIHJldHVybiB3aW5kb3dTaXplO1xufTtcblxuZXhwb3J0IGNvbnN0IENhbnZhcyA9IHByb3BzID0+IHtcblxuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB3aW5kb3dTaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICAgIGNvbnNvbGUubG9nKHdpbmRvd1NpemUpO1xuXG4gICAgY29uc3QgZHJhdyA9IChjdHgsIGZyYW1lQ291bnQpID0+IHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XG4gICAgICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIGN0eC5jYW52YXMud2lkdGggLyAyLFxuICAgICAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgMTMwMCAqIE1hdGguc2luKGZyYW1lQ291bnQgKiAwLjAxKSAqKiAyLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICk7XG4gICAgICAgIC8vIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGxldCBmcmFtZUNvdW50ID0gMDtcbiAgICAgICAgbGV0IGFuaW1hdGlvbkZyYW1lSWQ7XG5cbiAgICAgICAgLy9PdXIgZHJhdyBjYW1lIGhlcmVcbiAgICAgICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgZnJhbWVDb3VudCsrO1xuICAgICAgICAgICAgZHJhdyhjb250ZXh0LCBmcmFtZUNvdW50KTtcbiAgICAgICAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICAgICAgfTtcbiAgICB9LCBbZHJhd10pO1xuXG4gICAgcmV0dXJuIDxjYW52YXNcbiAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgIHdpZHRoPXtgJHt3aW5kb3dTaXplPy53aWR0aCA/PyAxOTIwfXB4YH1cbiAgICAgICAgaGVpZ2h0PXtgJHt3aW5kb3dTaXplPy5oZWlnaHQgPz8gMTQ0MH1weGB9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAvPjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/canvas.js\n");

/***/ })

})