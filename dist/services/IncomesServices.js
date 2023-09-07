"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateIncomeService = exports.sumAllIncomes = exports.getIncomesDb = exports.filterIncomesService = exports.deleteIncomeService = exports.createNewIncome = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _sequelize = require("sequelize");
var _Customers = require("../models/Customers.js");
var _Incomes = require("../models/Incomes.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getIncomesDb = function getIncomesDb() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$whereClause = _ref.whereClause,
    whereClause = _ref$whereClause === void 0 ? {} : _ref$whereClause;
  return _Incomes.Incomes.findAll({
    where: _objectSpread({
      state: 1
    }, whereClause),
    include: [{
      model: _Customers.Customers,
      as: 'customerDetail'
    }]
  });
};
exports.getIncomesDb = getIncomesDb;
var createNewIncome = function createNewIncome(_ref2) {
  var paramCreate = _ref2.paramCreate;
  return _Incomes.Incomes.create(_objectSpread({}, paramCreate));
};
exports.createNewIncome = createNewIncome;
var deleteIncomeService = function deleteIncomeService(_ref3) {
  var id = _ref3.id,
    transaction = _ref3.transaction;
  return _Incomes.Incomes.destroy({
    where: {
      id: id
    }
  }, {
    transaction: transaction
  });
};
exports.deleteIncomeService = deleteIncomeService;
var updateIncomeService = function updateIncomeService(_ref4) {
  var id = _ref4.id,
    paramUpdate = _ref4.paramUpdate,
    transaction = _ref4.transaction;
  return _Incomes.Incomes.update(_objectSpread({}, paramUpdate), {
    where: {
      id: id
    },
    transaction: transaction
  });
};
exports.updateIncomeService = updateIncomeService;
var filterIncomesService = function filterIncomesService(_ref5) {
  var clauseWhere = _ref5.clauseWhere;
  return _Incomes.Incomes.findAll({
    where: clauseWhere
  });
};
exports.filterIncomesService = filterIncomesService;
var sumAllIncomes = function sumAllIncomes() {
  return _Incomes.Incomes.findAll({
    attributes: [[_sequelize.Sequelize.fn('sum', _sequelize.Sequelize.col('value')), 'totalValue']],
    where: {
      state: 1
    },
    raw: true
  });
};
exports.sumAllIncomes = sumAllIncomes;