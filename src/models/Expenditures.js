import { DataTypes } from 'sequelize'
import { sequelizeConnection } from '../database/db.js'
import { Suppliers } from './Suppliers.js'

const Expenditures = sequelizeConnection.define('expenditures', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.INTEGER, allowNull: false },
  supplier: { type: DataTypes.INTEGER, allowNull: false },
  state: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  userCreated: { type: DataTypes.INTEGER, allowNull: false }

}, {
  tableName: 'expenditures'
})
Expenditures.belongsTo(Suppliers, { foreignKey: 'supplier', targetKey: 'id', as: 'supplierDetail' })

export {
  Expenditures
}
