"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpendituresCurrentMonth = exports.getExpenditures = exports.createExpenditures = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _expendituresServices = require("../services/expendituresServices.js");
var _utils = require("../utils/utils.js");
var _sequelize = require("sequelize");
var getExpenditures = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var authorization, validateTokenResult, expenditures;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          authorization = req.get('authorization');
          validateTokenResult = (0, _utils.validateToken)({
            authorization: authorization
          });
          if (validateTokenResult.success) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            message: validateTokenResult.message
          }));
        case 5:
          _context.next = 7;
          return (0, _expendituresServices.getExpendituresDb)();
        case 7:
          expenditures = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            data: expenditures,
            message: 'success'
          }));
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getExpenditures(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.getExpenditures = getExpenditures;
var getExpendituresCurrentMonth = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var authorization, validateTokenResult, whereClause, expenditures;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          authorization = req.get('authorization');
          validateTokenResult = (0, _utils.validateToken)({
            authorization: authorization
          });
          if (validateTokenResult.success) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: validateTokenResult.message
          }));
        case 5:
          whereClause = {
            createdAt: (0, _defineProperty2["default"])({}, _sequelize.Op.gte, new Date(new Date().getFullYear(), new Date().getMonth(), 1))
          };
          _context2.next = 8;
          return (0, _expendituresServices.getExpendituresDb)({
            whereClause: whereClause
          });
        case 8:
          expenditures = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            data: expenditures,
            message: 'success'
          }));
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function getExpendituresCurrentMonth(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getExpendituresCurrentMonth = getExpendituresCurrentMonth;
var createExpenditures = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var authorization, validateTokenResult, _req$body, supplier, description, value, newExpenditure, expenditure;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          authorization = req.get('authorization');
          validateTokenResult = (0, _utils.validateToken)({
            authorization: authorization
          });
          if (validateTokenResult.success) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", res.status(validateTokenResult.status).json({
            message: validateTokenResult.message,
            success: validateTokenResult.success
          }));
        case 5:
          _req$body = req.body, supplier = _req$body.supplier, description = _req$body.description, value = _req$body.value;
          if (!(!supplier || !description || !value)) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: 'No se recibieron todos los campos requeridos',
            success: false
          }));
        case 8:
          newExpenditure = {
            supplier: supplier,
            description: description,
            value: value,
            userCreated: validateTokenResult.decodedToken.id
          };
          console.log(newExpenditure);
          _context3.next = 12;
          return (0, _expendituresServices.createExpendituresDb)({
            newExpenditure: newExpenditure
          });
        case 12:
          expenditure = _context3.sent;
          return _context3.abrupt("return", res.status(201).json({
            data: expenditure,
            message: 'success'
          }));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 16]]);
  }));
  return function createExpenditures(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
exports.createExpenditures = createExpenditures;