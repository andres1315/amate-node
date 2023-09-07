"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Customers = void 0;
var _sequelize = require("sequelize");
var _postgres = require("../database/postgres.js");
var Customers = _postgres.sequelizeConnectionPostgres.define('customers', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: _sequelize.DataTypes.BIGINT,
    allowNull: false
  },
  state: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});
exports.Customers = Customers;