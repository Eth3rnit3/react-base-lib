"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

require("./example.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Example = function Example(_ref) {
  var title = _ref.title;
  return React.createElement("h1", {
    className: "example-class"
  }, title);
};

var _default = Example;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvRXhhbXBsZS50c3giXSwibmFtZXMiOlsiRXhhbXBsZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsT0FBK0MsR0FBRyxTQUFsREEsT0FBa0QsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNyRSxTQUFPO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUErQkEsS0FBL0IsQ0FBUDtBQUNELENBRkQ7O2VBSWVELE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9leGFtcGxlLnNjc3NcIjtcblxuaW50ZXJmYWNlIElFeGFtcGxlUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBFeGFtcGxlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJRXhhbXBsZVByb3BzPiA9ICh7IHRpdGxlIH0pID0+IHtcbiAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJleGFtcGxlLWNsYXNzXCI+e3RpdGxlfTwvaDE+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTtcbiJdfQ==