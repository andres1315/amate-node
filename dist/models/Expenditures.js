"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expenditures = void 0;
var _sequelize = require("sequelize");
var _Suppliers = require("./Suppliers.js");
var _postgres = require("../database/postgres.js");
var Expenditures = _postgres.sequelizeConnectionPostgres.define('expenditures', {
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
  supplier: {
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
  tableName: 'expenditures'
});
exports.Expenditures = Expenditures;
Expenditures.belongsTo(_Suppliers.Suppliers, {
  foreignKey: 'supplier',
  targetKey: 'id',
  as: 'supplierDetail'
});