import { DataTypes } from 'sequelize'
import { sequelizeConnection } from '../database/db.js'
import { Customers } from './Customers.js'

const Incomes = sequelizeConnection.define('incomes', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.INTEGER, allowNull: false },
  customer: { type: DataTypes.INTEGER, allowNull: false },
  state: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  userCreated: { type: DataTypes.INTEGER, allowNull: false }

}, {
  tableName: 'incomes'
})

Incomes.belongsTo(Customers, { foreignKey: 'customer', targetKey: 'id', as: 'customerDetail' })

export {
  Incomes
}
