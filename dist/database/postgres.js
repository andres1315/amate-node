"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelizeConnectionPostgres = void 0;
var _sequelize = require("sequelize");
var _config = require("../config.js");
var sequelizeConnectionPostgres = new _sequelize.Sequelize(_config.config.dbName, _config.config.dbUser, _config.config.dbPassword, {
  host: _config.config.dbHost,
  dialect: 'postgres',
  port: _config.config.dbPort,
  timezone: '-05:00',
  ssl: true,
  dialectOptions: {
    ssl: true
  }
});
exports.sequelizeConnectionPostgres = sequelizeConnectionPostgres;