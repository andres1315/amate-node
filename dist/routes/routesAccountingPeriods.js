"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routesAccountingPeriods = void 0;
var _express = require("express");
var _accountingPeriodsController = require("../controllers/accountingPeriodsController.js");
var routesAccountingPeriods = (0, _express.Router)();
/* routes */
exports.routesAccountingPeriods = routesAccountingPeriods;
routesAccountingPeriods.get('/', _accountingPeriodsController.getAccountingPeriods).post('/create/', _accountingPeriodsController.createAccountingPeriods).patch('/open-close/:id', _accountingPeriodsController.OpenCloseAccountingPeriods);