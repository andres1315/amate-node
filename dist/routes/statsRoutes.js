"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statRoutes = void 0;
var _express = require("express");
var _statsController = require("../controllers/statsController.js");
var statRoutes = (0, _express.Router)();
exports.statRoutes = statRoutes;
statRoutes.get('/', _statsController.getStatHome);