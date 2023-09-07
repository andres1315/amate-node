"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sumAllExpenditures = exports.getExpendituresDb = exports.filterExpendituresDb = exports.createExpendituresDb = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _sequelize = require("sequelize");
var _Expenditures = require("../models/Expenditures.js");
var _Suppliers = require("../models/Suppliers.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getExpendituresDb = function getExpendituresDb() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$whereClause = _ref.whereClause,
    whereClause = _ref$whereClause === void 0 ? {} : _ref$whereClause;
  return _Expenditures.Expenditures.findAll({
    where: _objectSpread({
      state: 1
    }, whereClause),
    include: [{
      model: _Suppliers.Suppliers,
      required: true,
      attributes: ['name'],
      as: 'supplierDetail'
    }]
  });
};
exports.getExpendituresDb = getExpendituresDb;
var createExpendituresDb = function createExpendituresDb(_ref2) {
  var newExpenditure = _ref2.newExpenditure;
  return _Expenditures.Expenditures.create(_objectSpread({}, newExpenditure));
};
exports.createExpendituresDb = createExpendituresDb;
var filterExpendituresDb = function filterExpendituresDb(_ref3) {
  var clauseWhere = _ref3.clauseWhere;
  return _Expenditures.Expenditures.findAll({
    where: clauseWhere
  });
};
exports.filterExpendituresDb = filterExpendituresDb;
var sumAllExpenditures = function sumAllExpenditures() {
  return _Expenditures.Expenditures.findAll({
    attributes: [[_sequelize.Sequelize.fn('sum', _sequelize.Sequelize.col('value')), 'totalValue']],
    where: {
      state: 1
    },
    raw: true
  });
};
exports.sumAllExpenditures = sumAllExpenditures;