"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routesExpenditures = void 0;
var _express = require("express");
var _expendituresController = require("../controllers/expendituresController.js");
var routesExpenditures = (0, _express.Router)();
exports.routesExpenditures = routesExpenditures;
routesExpenditures.get('/', _expendituresController.getExpenditures).get('/currentMonth', _expendituresController.getExpendituresCurrentMonth).post('/', _expendituresController.createExpenditures);