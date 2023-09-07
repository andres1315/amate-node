"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routesAuth = void 0;
var _express = require("express");
var _usersController = require("../controllers/usersController.js");
var routesAuth = (0, _express.Router)();
exports.routesAuth = routesAuth;
routesAuth.post('/login', _usersController.loginUser);