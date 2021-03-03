webpackHotUpdate_N_E("pages/about",{

/***/ "./components/canvas.js":
/*!******************************!*\
  !*** ./components/canvas.js ***!
  \******************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$(),\n    _this = undefined,\n    _jsxFileName = \"/Users/14h/Documents/void/abdallah.dev/components/canvas.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar useWindowSize = function useWindowSize() {\n  _s();\n\n  // Initialize state with undefined width/height so server and client renders match\n  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    width: undefined,\n    height: undefined\n  }),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // only execute all the code below in client side\n    if (true) {\n      // Handler to call on window resize\n      var handleResize = function handleResize() {\n        // Set window width/height to state\n        setWindowSize({\n          width: window.innerWidth,\n          height: window.innerHeight\n        });\n      }; // Add event listener\n\n\n      window.addEventListener(\"resize\", handleResize); // Call handler right away so state gets updated with initial window size\n\n      handleResize(); // Remove event listener on cleanup\n\n      return function () {\n        return window.removeEventListener(\"resize\", handleResize);\n      };\n    }\n  }, []); // Empty array ensures that effect is only run on mount\n\n  return windowSize;\n};\n\n_s(useWindowSize, \"Lx6dFCJt7Ze4WyzsCH5RzM+GN9Y=\");\n\nvar Canvas = function Canvas(props) {\n  _s2();\n\n  var _windowSize$width, _windowSize$height;\n\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var windowSize = useWindowSize();\n  console.log(windowSize);\n\n  var draw = function draw(ctx, frameCount) {\n    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);\n    ctx.fillStyle = '#000000'; // ctx.beginPath();\n\n    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 800 * Math.pow(Math.sin(frameCount * 0.005), 2), 0, 2 * Math.PI); // ctx.fill();\n\n    ctx.stroke();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var canvas = canvasRef.current;\n    var context = canvas.getContext('2d');\n    var frameCount = 0;\n    var animationFrameId; //Our draw came here\n\n    var render = function render() {\n      frameCount++;\n      draw(context, frameCount);\n      animationFrameId = window.requestAnimationFrame(render);\n    };\n\n    render();\n    return function () {\n      window.cancelAnimationFrame(animationFrameId);\n    };\n  }, [draw]);\n  return __jsx(\"canvas\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: canvasRef,\n    width: \"\".concat((_windowSize$width = windowSize === null || windowSize === void 0 ? void 0 : windowSize.width) !== null && _windowSize$width !== void 0 ? _windowSize$width : 1920, \"px\"),\n    height: \"\".concat((_windowSize$height = windowSize === null || windowSize === void 0 ? void 0 : windowSize.height) !== null && _windowSize$height !== void 0 ? _windowSize$height : 1440, \"px\")\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 12\n    }\n  }));\n};\n\n_s2(Canvas, \"dGRSo9fEFYv4dTGHma1e4dcwMnA=\", false, function () {\n  return [useWindowSize];\n});\n\n_c = Canvas;\n\nvar _c;\n\n$RefreshReg$(_c, \"Canvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYW52YXMuanM/ZWRhYyJdLCJuYW1lcyI6WyJ1c2VXaW5kb3dTaXplIiwidXNlU3RhdGUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDYW52YXMiLCJwcm9wcyIsImNhbnZhc1JlZiIsInVzZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJkcmF3IiwiY3R4IiwiZnJhbWVDb3VudCIsImNsZWFyUmVjdCIsImNhbnZhcyIsImZpbGxTdHlsZSIsImFyYyIsIk1hdGgiLCJzaW4iLCJQSSIsInN0cm9rZSIsImN1cnJlbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImFuaW1hdGlvbkZyYW1lSWQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUN4QjtBQUNBO0FBRndCLGtCQUdZQyxzREFBUSxDQUFDO0FBQ3pDQyxTQUFLLEVBQUVDLFNBRGtDO0FBRXpDQyxVQUFNLEVBQUVEO0FBRmlDLEdBQUQsQ0FIcEI7QUFBQSxNQUdqQkUsVUFIaUI7QUFBQSxNQUdMQyxhQUhLOztBQVF4QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1o7QUFDQSxjQUFtQztBQUMvQjtBQUQrQixVQUV0QkMsWUFGc0IsR0FFL0IsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQjtBQUNBRixxQkFBYSxDQUFDO0FBQ1ZKLGVBQUssRUFBRU8sTUFBTSxDQUFDQyxVQURKO0FBRVZOLGdCQUFNLEVBQUVLLE1BQU0sQ0FBQ0U7QUFGTCxTQUFELENBQWI7QUFJSCxPQVI4QixFQVUvQjs7O0FBQ0FGLFlBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NKLFlBQWxDLEVBWCtCLENBYS9COztBQUNBQSxrQkFBWSxHQWRtQixDQWdCL0I7O0FBQ0EsYUFBTztBQUFBLGVBQU1DLE1BQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNMLFlBQXJDLENBQU47QUFBQSxPQUFQO0FBQ0g7QUFDSixHQXJCUSxFQXFCTixFQXJCTSxDQUFULENBUndCLENBNkJoQjs7QUFDUixTQUFPSCxVQUFQO0FBQ0gsQ0EvQkQ7O0dBQU1MLGE7O0FBaUNDLElBQU1jLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBOztBQUUzQixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUNBLE1BQU1aLFVBQVUsR0FBR0wsYUFBYSxFQUFoQztBQUNBa0IsU0FBTyxDQUFDQyxHQUFSLENBQVlkLFVBQVo7O0FBRUEsTUFBTWUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxVQUFOLEVBQXFCO0FBQzlCRCxPQUFHLENBQUNFLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CRixHQUFHLENBQUNHLE1BQUosQ0FBV3RCLEtBQS9CLEVBQXNDbUIsR0FBRyxDQUFDRyxNQUFKLENBQVdwQixNQUFqRDtBQUNBaUIsT0FBRyxDQUFDSSxTQUFKLEdBQWdCLFNBQWhCLENBRjhCLENBRzlCOztBQUNBSixPQUFHLENBQUNLLEdBQUosQ0FDSUwsR0FBRyxDQUFDRyxNQUFKLENBQVd0QixLQUFYLEdBQW1CLENBRHZCLEVBRUltQixHQUFHLENBQUNHLE1BQUosQ0FBV3BCLE1BQVgsR0FBb0IsQ0FGeEIsRUFHSSxlQUFNdUIsSUFBSSxDQUFDQyxHQUFMLENBQVNOLFVBQVUsR0FBRyxLQUF0QixDQUFOLEVBQXNDLENBQXRDLENBSEosRUFJSSxDQUpKLEVBS0ksSUFBSUssSUFBSSxDQUFDRSxFQUxiLEVBSjhCLENBVzlCOztBQUNBUixPQUFHLENBQUNTLE1BQUo7QUFDSCxHQWJEOztBQWVBdkIseURBQVMsQ0FBQyxZQUFNO0FBRVosUUFBTWlCLE1BQU0sR0FBR1IsU0FBUyxDQUFDZSxPQUF6QjtBQUNBLFFBQU1DLE9BQU8sR0FBR1IsTUFBTSxDQUFDUyxVQUFQLENBQWtCLElBQWxCLENBQWhCO0FBQ0EsUUFBSVgsVUFBVSxHQUFHLENBQWpCO0FBQ0EsUUFBSVksZ0JBQUosQ0FMWSxDQU9aOztBQUNBLFFBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakJiLGdCQUFVO0FBQ1ZGLFVBQUksQ0FBQ1ksT0FBRCxFQUFVVixVQUFWLENBQUo7QUFDQVksc0JBQWdCLEdBQUd6QixNQUFNLENBQUMyQixxQkFBUCxDQUE2QkQsTUFBN0IsQ0FBbkI7QUFDSCxLQUpEOztBQUtBQSxVQUFNO0FBRU4sV0FBTyxZQUFNO0FBQ1QxQixZQUFNLENBQUM0QixvQkFBUCxDQUE0QkgsZ0JBQTVCO0FBQ0gsS0FGRDtBQUdILEdBbEJRLEVBa0JOLENBQUNkLElBQUQsQ0FsQk0sQ0FBVDtBQW9CQSxTQUFPO0FBQ0gsT0FBRyxFQUFFSixTQURGO0FBRUgsU0FBSyxpQ0FBS1gsVUFBTCxhQUFLQSxVQUFMLHVCQUFLQSxVQUFVLENBQUVILEtBQWpCLGlFQUEwQixJQUExQixPQUZGO0FBR0gsVUFBTSxrQ0FBS0csVUFBTCxhQUFLQSxVQUFMLHVCQUFLQSxVQUFVLENBQUVELE1BQWpCLG1FQUEyQixJQUEzQjtBQUhILEtBSUNXLEtBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBTUgsQ0EvQ007O0lBQU1ELE07VUFHVWQsYTs7O0tBSFZjLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhbnZhcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVzZVdpbmRvd1NpemUgPSAoKSA9PiB7XG4gICAgLy8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxuICAgIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cbiAgICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gb25seSBleGVjdXRlIGFsbCB0aGUgY29kZSBiZWxvdyBpbiBjbGllbnQgc2lkZVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IHdpbmRvdyB3aWR0aC9oZWlnaHQgdG8gc3RhdGVcbiAgICAgICAgICAgICAgICBzZXRXaW5kb3dTaXplKHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgICAgICAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXG4gICAgICAgICAgICBoYW5kbGVSZXNpemUoKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFudXBcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgICAgICB9XG4gICAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50XG4gICAgcmV0dXJuIHdpbmRvd1NpemU7XG59O1xuXG5leHBvcnQgY29uc3QgQ2FudmFzID0gcHJvcHMgPT4ge1xuXG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHdpbmRvd1NpemUgPSB1c2VXaW5kb3dTaXplKCk7XG4gICAgY29uc29sZS5sb2cod2luZG93U2l6ZSk7XG5cbiAgICBjb25zdCBkcmF3ID0gKGN0eCwgZnJhbWVDb3VudCkgPT4ge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcbiAgICAgICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgY3R4LmNhbnZhcy53aWR0aCAvIDIsXG4gICAgICAgICAgICBjdHguY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICAgICAgICA4MDAgKiBNYXRoLnNpbihmcmFtZUNvdW50ICogMC4wMDUpICoqIDIsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgbGV0IGZyYW1lQ291bnQgPSAwO1xuICAgICAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZDtcblxuICAgICAgICAvL091ciBkcmF3IGNhbWUgaGVyZVxuICAgICAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBmcmFtZUNvdW50Kys7XG4gICAgICAgICAgICBkcmF3KGNvbnRleHQsIGZyYW1lQ291bnQpO1xuICAgICAgICAgICAgYW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIoKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpO1xuICAgICAgICB9O1xuICAgIH0sIFtkcmF3XSk7XG5cbiAgICByZXR1cm4gPGNhbnZhc1xuICAgICAgICByZWY9e2NhbnZhc1JlZn1cbiAgICAgICAgd2lkdGg9e2Ake3dpbmRvd1NpemU/LndpZHRoID8/IDE5MjB9cHhgfVxuICAgICAgICBoZWlnaHQ9e2Ake3dpbmRvd1NpemU/LmhlaWdodCA/PyAxNDQwfXB4YH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgIC8+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/canvas.js\n");

/***/ })

})