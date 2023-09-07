"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCustomerService = exports.getAllCustomerServices = exports.filterCustomersServices = exports.createCustomerService = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Customers = require("../models/Customers.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createCustomerService = function createCustomerService(_ref) {
  var newCustomer = _ref.newCustomer,
    _ref$transaction = _ref.transaction,
    transaction = _ref$transaction === void 0 ? null : _ref$transaction;
  return _Customers.Customers.create(_objectSpread({}, newCustomer), {
    transaction: transaction
  });
};
exports.createCustomerService = createCustomerService;
var getAllCustomerServices = function getAllCustomerServices() {
  return _Customers.Customers.findAll();
};
exports.getAllCustomerServices = getAllCustomerServices;
var updateCustomerService = function updateCustomerService(_ref2) {
  var paramsUpdate = _ref2.paramsUpdate,
    whereClause = _ref2.whereClause,
    _ref2$transaction = _ref2.transaction,
    transaction = _ref2$transaction === void 0 ? null : _ref2$transaction;
  return _Customers.Customers.update(_objectSpread({}, paramsUpdate), {
    where: whereClause,
    transaction: transaction
  });
};
exports.updateCustomerService = updateCustomerService;
var filterCustomersServices = function filterCustomersServices(_ref3) {
  var whereClause = _ref3.whereClause;
  return _Customers.Customers.findAll({
    where: whereClause
  });
};
exports.filterCustomersServices = filterCustomersServices;