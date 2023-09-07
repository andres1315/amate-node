"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuppliersServices = exports.filterSuppliersServices = exports.createSuppliersServices = void 0;
var _Suppliers = require("../models/Suppliers.js");
var getSuppliersServices = function getSuppliersServices() {
  return _Suppliers.Suppliers.findAll({
    where: {
      state: 1
    }
  });
};
exports.getSuppliersServices = getSuppliersServices;
var createSuppliersServices = function createSuppliersServices(_ref) {
  var newSupplier = _ref.newSupplier;
  return _Suppliers.Suppliers.create(newSupplier);
};
exports.createSuppliersServices = createSuppliersServices;
var filterSuppliersServices = function filterSuppliersServices(_ref2) {
  var clauseWhere = _ref2.clauseWhere;
  return _Suppliers.Suppliers.findAll({
    where: clauseWhere
  });
};
exports.filterSuppliersServices = filterSuppliersServices;