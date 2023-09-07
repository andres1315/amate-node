import { DataTypes } from 'sequelize'
import { Customers } from './Customers.js'
import { sequelizeConnectionPostgres } from '../database/postgres.js'

const Incomes = sequelizeConnectionPostgres.define('incomes', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.INTEGER, allowNull: false },
  customer: { type: DataTypes.INTEGER, allowNull: false },
  state: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  userCreated: { type: DataTypes.INTEGER, allowNull: false },
  isAccounted: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0, field: 'is_accounted' }
}, {
  tableName: 'incomes'
})

Incomes.belongsTo(Customers, { foreignKey: 'customer', targetKey: 'id', as: 'customerDetail' })

export {
  Incomes
}
