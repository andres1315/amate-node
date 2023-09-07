"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccountingPeriods = exports.createAccountingPeriods = exports.OpenCloseAccountingPeriods = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _accountingPeriodsService = require("../services/accountingPeriodsService.js");
var createAccountingPeriods = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var userId, lastPeriodCreated, currentDate, paramsCreate, lastPeriod, newAccountingPeriod;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          userId = req.body.userId;
          if (userId) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'User Id is required'
          }));
        case 4:
          _context.next = 6;
          return (0, _accountingPeriodsService.getAccountingPeriodService)({
            where: {
              state: 1
            }
          });
        case 6:
          lastPeriodCreated = _context.sent;
          currentDate = new Date();
          paramsCreate = {
            userCreated: userId
          };
          if (lastPeriodCreated.length > 0) {
            lastPeriod = lastPeriodCreated[0];
            if (lastPeriod.month === 12) {
              paramsCreate.month = 1;
              paramsCreate.year = lastPeriod.year + 1;
            } else {
              paramsCreate.month = lastPeriod.month + 1;
              paramsCreate.year = lastPeriod.year;
            }
          } else {
            paramsCreate.month = currentDate.getMonth() + 1;
            paramsCreate.year = currentDate.getFullYear();
          }
          newAccountingPeriod = (0, _accountingPeriodsService.createAccountingPeriodService)({
            paramsCreate: paramsCreate
          });
          return _context.abrupt("return", res.status(201).json({
            message: 'Accounting Period created',
            data: newAccountingPeriod
          }));
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function createAccountingPeriods(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.createAccountingPeriods = createAccountingPeriods;
var getAccountingPeriods = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var accountingPeriods;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _accountingPeriodsService.getAccountingPeriodService)({
            where: {
              state: 1
            }
          });
        case 3:
          accountingPeriods = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            message: 'Accounting Periods',
            data: accountingPeriods
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAccountingPeriods(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAccountingPeriods = getAccountingPeriods;
var OpenCloseAccountingPeriods = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var id, _req$body, userId, open, paramUpdate, updatedAccPeriod;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _req$body = req.body, userId = _req$body.userId, open = _req$body.open;
          paramUpdate = {
            open: open
          };
          open ? paramUpdate.userOpen = userId : paramUpdate.userClose = userId;
          _context3.next = 7;
          return (0, _accountingPeriodsService.updateAccountingPeriodService)({
            paramsUpdate: paramUpdate,
            where: {
              id: id
            }
          });
        case 7:
          updatedAccPeriod = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            message: 'Accounting Period updated',
            data: updatedAccPeriod
          }));
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function OpenCloseAccountingPeriods(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
exports.OpenCloseAccountingPeriods = OpenCloseAccountingPeriods;