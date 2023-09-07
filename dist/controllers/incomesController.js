"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateIncome = exports.getIncomesCurrentMonth = exports.getIncomes = exports.filterIncomes = exports.deleteIncome = exports.createIncome = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _IncomesServices = require("../services/IncomesServices.js");
var _utils = require("../utils/utils.js");
var _sequelize = require("sequelize");
var _db = require("../database/db.js");
var _accountingPeriodsService = require("../services/accountingPeriodsService.js");
var createIncome = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, customer, value, description, authorization, validateTolkenResult, newIncome, hasAccountingPeriodOpen, newincomeDb;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, customer = _req$body.customer, value = _req$body.value, description = _req$body.description;
          authorization = req.get('authorization');
          validateTolkenResult = (0, _utils.validateToken)({
            authorization: authorization
          });
          if (validateTolkenResult.success) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(validateTolkenResult.status).json({
            message: validateTolkenResult.message
          }));
        case 6:
          if (!(!customer || !value || !description)) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'customer and value are required',
            data: []
          }));
        case 8:
          newIncome = {
            customer: customer,
            value: value,
            description: description,
            userCreated: validateTolkenResult.decodedToken.id
          };
          _context.next = 11;
          return (0, _accountingPeriodsService.getAccountingPeriodService)({
            where: {
              open: true
            }
          });
        case 11:
          hasAccountingPeriodOpen = _context.sent;
          if (hasAccountingPeriodOpen.length) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'No accounting period open',
            data: []
          }));
        case 14:
          _context.next = 16;
          return (0, _IncomesServices.createNewIncome)({
            paramCreate: newIncome
          });
        case 16:
          newincomeDb = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            data: newincomeDb,
            message: 'successfully'
          }));
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 20]]);
  }));
  return function createIncome(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.createIncome = createIncome;
var getIncomes = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var authorization, validateTolkenResult, _req$params, month, year, whereClause, _createdAt, lastDayMonth, startDate, endDate, incomes;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          authorization = req.get('authorization');
          validateTolkenResult = (0, _utils.validateToken)({
            authorization: authorization
          });
          if (validateTolkenResult.success) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.status(validateTolkenResult.status).json({
            message: validateTolkenResult.message
          }));
        case 5:
          _req$params = req.params, month = _req$params.month, year = _req$params.year;
          whereClause = {};
          if (year && month) {
            lastDayMonth = new Date(year, Number(month) + 1, 0).getDate();
            console.log(year);
            console.log(month);
            console.log(lastDayMonth);
            startDate = new Date(year, month, 1);
            endDate = new Date(year, month, lastDayMonth, 23, 59, 59, 999);
            whereClause = {
              createdAt: (_createdAt = {}, (0, _defineProperty2["default"])(_createdAt, _sequelize.Op.gte, startDate), (0, _defineProperty2["default"])(_createdAt, _sequelize.Op.lte, endDate), _createdAt)
            };
          }
          console.log({
            whereClause: whereClause
          });
          _context2.next = 11;
          return (0, _IncomesServices.getIncomesDb)({
            whereClause: whereClause
          });
        case 11:
          incomes = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            message: 'successfully',
            data: incomes
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
  return function getIncomes(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getIncomes = getIncomes;
var getIncomesCurrentMonth = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var authorization, validateTolkenResult, whereClause, incomes;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          authorization = req.get('authorization');
          validateTolkenResult = (0, _utils.validateToken)({
            authorization: authorization
          });
          if (validateTolkenResult.success) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", res.status(validateTolkenResult.status).json({
            message: validateTolkenResult.message
          }));
        case 5:
          whereClause = {
            createdAt: (0, _defineProperty2["default"])({}, _sequelize.Op.gte, new Date(new Date().getFullYear(), new Date().getMonth(), 1))
          };
          _context3.next = 8;
          return (0, _IncomesServices.getIncomesDb)({
            whereClause: whereClause
          });
        case 8:
          incomes = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            message: 'successfully',
            data: incomes
          }));
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function getIncomesCurrentMonth(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getIncomesCurrentMonth = getIncomesCurrentMonth;
var deleteIncome = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var id, resultTransaction;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return _db.sequelizeConnection.transaction( /*#__PURE__*/function () {
            var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(t) {
              return _regenerator["default"].wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return (0, _IncomesServices.deleteIncomeService)({
                      id: id,
                      transaction: t
                    });
                  case 2:
                    return _context4.abrupt("return", true);
                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function (_x13) {
              return _ref5.apply(this, arguments);
            };
          }());
        case 4:
          resultTransaction = _context5.sent;
          res.status(200).json({
            message: 'successfully',
            data: resultTransaction
          });
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return function deleteIncome(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteIncome = deleteIncome;
var updateIncome = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var id, _req$body2, value, description, resultTransaction;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, value = _req$body2.value, description = _req$body2.description;
          if (!(!id || !value || !description)) {
            _context7.next = 5;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            message: 'id, value and description are required',
            data: []
          }));
        case 5:
          _context7.next = 7;
          return _db.sequelizeConnection.transaction( /*#__PURE__*/function () {
            var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(t) {
              return _regenerator["default"].wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return (0, _IncomesServices.updateIncomeService)({
                      id: id,
                      paramUpdate: {
                        value: value,
                        description: description
                      },
                      transaction: t
                    });
                  case 2:
                    return _context6.abrupt("return", _context6.sent);
                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }));
            return function (_x17) {
              return _ref7.apply(this, arguments);
            };
          }());
        case 7:
          resultTransaction = _context7.sent;
          return _context7.abrupt("return", res.status(200).json({
            message: 'successfully',
            data: resultTransaction
          }));
        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](0);
          next(_context7.t0);
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 11]]);
  }));
  return function updateIncome(_x14, _x15, _x16) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateIncome = updateIncome;
var filterIncomes = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var _req$query, month, year, isAccounted, clauseWhere, resultIncomes;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _req$query = req.query, month = _req$query.month, year = _req$query.year, isAccounted = _req$query.isAccounted;
          clauseWhere = {
            state: 1
          };
          if (month && year) clauseWhere.createdAt = (0, _defineProperty2["default"])({}, _sequelize.Op.gte, new Date(year, month, 1));
          if (isAccounted) clauseWhere.isAccounted = isAccounted;
          _context8.next = 7;
          return (0, _IncomesServices.filterIncomesService)({
            clauseWhere: clauseWhere
          });
        case 7:
          resultIncomes = _context8.sent;
          return _context8.abrupt("return", res.status(200).json({
            message: 'successfully',
            data: resultIncomes
          }));
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          next(_context8.t0);
        case 14:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return function filterIncomes(_x18, _x19, _x20) {
    return _ref8.apply(this, arguments);
  };
}();
exports.filterIncomes = filterIncomes;