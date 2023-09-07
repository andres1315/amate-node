"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatHome = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _sequelize = require("sequelize");
var _IncomesServices = require("../services/IncomesServices.js");
var _expendituresServices = require("../services/expendituresServices.js");
var getStatHome = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _yield$Promise$all, _yield$Promise$all2, incomes, expenditures, allIncomes, allExpenditures, currentMonthIncomes, previousMonthIncomes, currentMonthExpenditures, previousMonthExpenditures, cashFlow;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.t0 = Promise;
          _context.next = 4;
          return (0, _IncomesServices.filterIncomesService)({
            whereClause: {
              createdAt: (0, _defineProperty2["default"])({}, _sequelize.Op.gte, new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1))
            }
          });
        case 4:
          _context.t1 = _context.sent;
          _context.next = 7;
          return (0, _expendituresServices.filterExpendituresDb)({
            whereClause: {
              createdAt: (0, _defineProperty2["default"])({}, _sequelize.Op.gte, new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1))
            }
          });
        case 7:
          _context.t2 = _context.sent;
          _context.next = 10;
          return (0, _IncomesServices.sumAllIncomes)();
        case 10:
          _context.t3 = _context.sent;
          _context.next = 13;
          return (0, _expendituresServices.sumAllExpenditures)();
        case 13:
          _context.t4 = _context.sent;
          _context.t5 = [_context.t1, _context.t2, _context.t3, _context.t4];
          _context.next = 17;
          return _context.t0.all.call(_context.t0, _context.t5);
        case 17:
          _yield$Promise$all = _context.sent;
          _yield$Promise$all2 = (0, _slicedToArray2["default"])(_yield$Promise$all, 4);
          incomes = _yield$Promise$all2[0];
          expenditures = _yield$Promise$all2[1];
          allIncomes = _yield$Promise$all2[2];
          allExpenditures = _yield$Promise$all2[3];
          currentMonthIncomes = incomes.filter(function (income) {
            return income.createdAt.getMonth() === new Date().getMonth();
          });
          previousMonthIncomes = incomes.filter(function (income) {
            return income.createdAt.getMonth() === new Date().getMonth() - 1;
          });
          currentMonthExpenditures = expenditures.filter(function (expenditure) {
            return expenditure.createdAt.getMonth() === new Date().getMonth();
          });
          previousMonthExpenditures = expenditures.filter(function (expenditure) {
            return expenditure.createdAt.getMonth() === new Date().getMonth() - 1;
          });
          cashFlow = allIncomes[0].totalValue - allExpenditures[0].totalValue;
          return _context.abrupt("return", res.status(200).json({
            message: 'successfully',
            data: {
              currentMonthIncomes: currentMonthIncomes,
              previousMonthIncomes: previousMonthIncomes,
              currentMonthExpenditures: currentMonthExpenditures,
              previousMonthExpenditures: previousMonthExpenditures,
              cashFlow: cashFlow
            }
          }));
        case 31:
          _context.prev = 31;
          _context.t6 = _context["catch"](0);
          next(_context.t6);
        case 34:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 31]]);
  }));
  return function getStatHome(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.getStatHome = getStatHome;