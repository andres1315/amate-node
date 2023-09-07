"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Incomes = void 0;
var _sequelize = require("sequelize");
var _Customers = require("./Customers.js");
var _postgres = require("../database/postgres.js");
var Incomes = _postgres.sequelizeConnectionPostgres.define('incomes', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  description: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  value: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  customer: {
    type: _sequelize.DataTypes.INTEGER,
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
  },
  isAccounted: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'is_accounted'
  }
}, {
  tableName: 'incomes'
});
exports.Incomes = Incomes;
Incomes.belongsTo(_Customers.Customers, {
  foreignKey: 'customer',
  targetKey: 'id',
  as: 'customerDetail'
});