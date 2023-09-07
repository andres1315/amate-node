"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routesIncomes = void 0;
var _express = require("express");
var _incomesController = require("../controllers/incomesController.js");
var routesIncomes = (0, _express.Router)();
exports.routesIncomes = routesIncomes;
routesIncomes.get('/', _incomesController.getIncomes).get('/year/:year/month/:month', _incomesController.getIncomes).get('/currentMonth', _incomesController.getIncomesCurrentMonth).get('/filter/search', _incomesController.filterIncomes).post('/', _incomesController.createIncome)["delete"]('/:id', _incomesController.deleteIncome).patch('/:id', _incomesController.updateIncome);