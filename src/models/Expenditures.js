import { DataTypes } from 'sequelize'

import { Suppliers } from './Suppliers.js'
import { sequelizeConnectionPostgres } from '../database/postgres.js'

const Expenditures = sequelizeConnectionPostgres.define('expenditures', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.INTEGER, allowNull: false },
  supplier: { type: DataTypes.INTEGER, allowNull: false },
  state: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  userCreated: { type: DataTypes.INTEGER, allowNull: false },
  isAccounted: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0, field: 'is_accounted' }

}, {
  tableName: 'expenditures'
})
Expenditures.belongsTo(Suppliers, { foreignKey: 'supplier', targetKey: 'id', as: 'supplierDetail' })

export {
  Expenditures
}
