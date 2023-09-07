import { DataTypes } from 'sequelize'
import { sequelizeConnectionPostgres } from '../database/postgres.js'

const Customers = sequelizeConnectionPostgres.define('customers', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  number: { type: DataTypes.BIGINT, allowNull: false },
  state: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
})

export {
  Customers
}
