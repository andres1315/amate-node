"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsersDb = exports.createUserDb = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Users = require("../models/Users.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createUserDb = function createUserDb(_ref) {
  var paramCreate = _ref.paramCreate;
  return _Users.Users.create(_objectSpread({}, paramCreate));
};
exports.createUserDb = createUserDb;
var getUsersDb = function getUsersDb(_ref2) {
  var whereClause = _ref2.whereClause;
  return _Users.Users.findOne({
    where: _objectSpread({}, whereClause),
    raw: true
  });
};
exports.getUsersDb = getUsersDb;