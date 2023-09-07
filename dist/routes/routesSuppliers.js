"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routesSupplier = void 0;
var _express = require("express");
var _suppliersController = require("../controllers/suppliersController.js");
var routesSupplier = (0, _express.Router)().get('/', _suppliersController.getSuppliers).post('/', _suppliersController.createSuppliers).get('/search', _suppliersController.filterSuppliers);
exports.routesSupplier = routesSupplier;