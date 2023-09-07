"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountingPeriod = void 0;
var _sequelize = require("sequelize");
var _postgres = require("../database/postgres.js");
var AccountingPeriod = _postgres.sequelizeConnectionPostgres.define('accounting_period', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  month: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  year: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  state: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  open: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  userCreated: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  userOpen: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: true
  },
  userClose: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'accounting_period'
});
exports.AccountingPeriod = AccountingPeriod;