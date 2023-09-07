"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Suppliers = void 0;
var _sequelize = require("sequelize");
var _postgres = require("../database/postgres.js");
var Suppliers = _postgres.sequelizeConnectionPostgres.define('suppliers', {
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
  state: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  userCreated: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'suppliers'
});
exports.Suppliers = Suppliers;