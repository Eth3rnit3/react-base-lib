"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var App = function App(_ref) {
  var title = _ref.title;
  return <h1>{title}</h1>;
};

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvVGl0bGVJdGVtLnRzeCJdLCJuYW1lcyI6WyJBcHAiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OztBQU1BLElBQU1BLEdBQXVDLEdBQUcsU0FBMUNBLEdBQTBDLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDN0QsU0FBTyxDQUFDLEVBQUQsQ0FBSSxDQUFDQSxLQUFELENBQU8sRUFBRSxFQUFGLENBQWxCO0FBQ0QsQ0FGRDs7ZUFJZUQsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgSUFwcFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgQXBwOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJQXBwUHJvcHM+ID0gKHsgdGl0bGUgfSkgPT4ge1xuICByZXR1cm4gPGgxPnt0aXRsZX08L2gxPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==