import { DataTypes } from 'sequelize'
import { sequelizeConnectionPostgres } from '../database/postgres.js'

const Suppliers = sequelizeConnectionPostgres.define('suppliers', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  userCreated: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: 'suppliers'
})

export {
  Suppliers
}
