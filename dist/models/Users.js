"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;
var _sequelize = require("sequelize");
var _postgres = require("../database/postgres.js");
var Users = _postgres.sequelizeConnectionPostgres.define('users', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  first_name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  password: {
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
    allowNull: false,
    defaultValue: 1
  }
}, {
  tableName: 'users'
});
exports.Users = Users;