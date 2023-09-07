"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routesUsers = void 0;
var _express = require("express");
var _usersController = require("../controllers/usersController.js");
var routesUsers = (0, _express.Router)();
exports.routesUsers = routesUsers;
routesUsers.post('/create', _usersController.createUser);