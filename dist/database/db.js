"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelizeConnection = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _config = require("../config.js");
var _mysql = _interopRequireDefault(require("mysql2"));
var sequelizeConnection = new _sequelize["default"](_config.config.dbName, _config.config.dbUser, _config.config.dbPassword, {
  host: _config.config.dbHost,
  dialect: 'mysql',
  port: _config.config.dbPort,
  timezone: '-05:00',
  dialectModule: _mysql["default"]
});
exports.sequelizeConnection = sequelizeConnection;