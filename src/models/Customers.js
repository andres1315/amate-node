import { DataTypes } from 'sequelize'
import { sequelizeConnection } from '../database/db.js'

const Customers = sequelizeConnection.define('customers', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  number: { type: DataTypes.BIGINT, allowNull: false },
  state: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
})

export {
  Customers
}
