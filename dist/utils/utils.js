"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = require("../config.js");
var validateToken = function validateToken(_ref) {
  var authorization = _ref.authorization;
  var token = null;
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    token = authorization.substring(7);
  }
  try {
    var decodedToken = token ? _jsonwebtoken["default"].verify(token, _config.config.secret) : {};
    if (!token || !(decodedToken !== null && decodedToken !== void 0 && decodedToken.id)) return {
      message: 'token missing or invalid',
      data: [],
      status: 401,
      success: false
    };
    return {
      success: true,
      decodedToken: decodedToken
    };
  } catch (err) {
    return {
      message: 'token missing or invalid',
      data: [],
      status: 401,
      success: false
    };
  }
};
exports.validateToken = validateToken;