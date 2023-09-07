"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routesCustomers = void 0;
var _express = require("express");
var _customersController = require("../controllers/customersController.js");
var _validateSchema = require("../middlewares/validateSchema.js");
var _customerSchemaDto = require("../dto/customerSchema.dto.js");
var routesCustomers = (0, _express.Router)();
exports.routesCustomers = routesCustomers;
routesCustomers.post('/', _customersController.createCustomer).get('/', _customersController.getAllCustomers).patch('/:id', _customersController.updateCustomer).get('/search', (0, _validateSchema.validatorHandler)(_customerSchemaDto.validateCustomerPartial, 'query'), _customersController.filterCustomers);