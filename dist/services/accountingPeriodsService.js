"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAccountingPeriodService = exports.getAccountingPeriodService = exports.createAccountingPeriodService = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _AccountingPeriod = require("../models/AccountingPeriod.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getAccountingPeriodService = function getAccountingPeriodService(_ref) {
  var where = _ref.where;
  return _AccountingPeriod.AccountingPeriod.findAll({
    where: where,
    order: [['id', 'DESC']]
  });
};
exports.getAccountingPeriodService = getAccountingPeriodService;
var createAccountingPeriodService = function createAccountingPeriodService(_ref2) {
  var paramsCreate = _ref2.paramsCreate;
  return _AccountingPeriod.AccountingPeriod.create(_objectSpread({}, paramsCreate));
};
exports.createAccountingPeriodService = createAccountingPeriodService;
var updateAccountingPeriodService = function updateAccountingPeriodService(_ref3) {
  var paramsUpdate = _ref3.paramsUpdate,
    where = _ref3.where;
  return _AccountingPeriod.AccountingPeriod.update(_objectSpread({}, paramsUpdate), {
    where: where
  });
};
exports.updateAccountingPeriodService = updateAccountingPeriodService;