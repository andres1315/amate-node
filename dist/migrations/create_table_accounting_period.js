"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('accounting_period', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      month: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      state: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      open: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      userCreated: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      userOpen: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      userClose: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('accounting_period');
  }
};