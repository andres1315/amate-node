"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = exports.createUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _usersServices = require("../services/usersServices.js");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = require("../config.js");
var loginUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, username, password, user, validatePassword, userForToken, token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          if (!(!username || !password)) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'Username and password are required',
            data: [{
              username: username,
              password: password
            }]
          }));
        case 4:
          _context.next = 6;
          return (0, _usersServices.getUsersDb)({
            username: username
          });
        case 6:
          user = _context.sent;
          console.log('value user ', user);
          if (user) {
            _context.next = 12;
            break;
          }
          _context.t0 = false;
          _context.next = 15;
          break;
        case 12:
          _context.next = 14;
          return _bcrypt["default"].compare(password, user.password);
        case 14:
          _context.t0 = _context.sent;
        case 15:
          validatePassword = _context.t0;
          if (user && validatePassword) {
            _context.next = 18;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            message: 'invalid username or password',
            data: []
          }));
        case 18:
          userForToken = {
            username: user.username,
            id: user.id
          };
          delete userForToken.password;
          token = _jsonwebtoken["default"].sign(userForToken, _config.config.secret, {
            expiresIn: 60 * 60 * 24
          });
          return _context.abrupt("return", res.status(200).json({
            message: 'User found',
            data: {
              name: "".concat(user.first_name, " ").concat(user.last_name),
              token: token,
              username: username
            }
          }));
        case 24:
          _context.prev = 24;
          _context.t1 = _context["catch"](0);
          next(_context.t1);
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 24]]);
  }));
  return function loginUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.loginUser = loginUser;
var createUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body2, first_name, last_name, username, password, saltRounds, passHash, paramCreate, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, first_name = _req$body2.first_name, last_name = _req$body2.last_name, username = _req$body2.username, password = _req$body2.password;
          if (!(!first_name || !last_name || !username || !password)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: 'All fields are required'
          }));
        case 4:
          saltRounds = 10;
          _context2.next = 7;
          return _bcrypt["default"].hash(password, saltRounds);
        case 7:
          passHash = _context2.sent;
          paramCreate = {
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: passHash
          };
          _context2.next = 11;
          return (0, _usersServices.createUserDb)({
            paramCreate: paramCreate
          });
        case 11:
          user = _context2.sent;
          return _context2.abrupt("return", res.status(201).json({
            message: 'User created',
            data: user
          }));
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 15]]);
  }));
  return function createUser(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createUser = createUser;