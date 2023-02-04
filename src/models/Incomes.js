import { DataTypes } from 'sequelize'
import { sequelizeConnection } from '../database/db.js'

const Incomes = sequelizeConnection.define('incomes', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.INTEGER, allowNull: false },
  state: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  user_created: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  description: { type: DataTypes.STRING, allowNull: true }

}, {
  tableName: 'incomes'
})

export {
  Incomes
}
