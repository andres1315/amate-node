import { DataTypes } from 'sequelize'
import { sequelizeConnection } from '../database/db.js'

const Expenditures = sequelizeConnection.define('expenditures', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.INTEGER, allowNull: false },
  supplier: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  user_created: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }

}, {
  tableName: 'expenditures'
})

export {
  Expenditures
}
