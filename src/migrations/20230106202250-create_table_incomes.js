'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('incomes', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      name: { type: Sequelize.STRING, allowNull: false },
      value: { type: Sequelize.INTEGER, allowNull: false },
      state: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
      user_created: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('incomes')
  }
}
