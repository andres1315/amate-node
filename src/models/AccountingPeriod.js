import { sequelizeConnection } from '../database/db'
import { DataTypesypes } from 'sequelize'

export const AccountingPeriod = sequelizeConnection.define('AccountingPeriod', {
  id: { type: DataTypesypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  month: { type: DataTypesypes.INTEGER, allowNull: false },
  year: { type: DataTypesypes.INTEGER, allowNull: false },
  state: { type: DataTypesypes.INTEGER, allowNull: false, defaultValue: 1 },
  open: { type: DataTypesypes.BOOLEAN, allowNull: false, defaultValue: false },
  userCreated: { type: DataTypesypes.INTEGER, allowNull: false },
  userOpen: { type: DataTypesypes.INTEGER, allowNull: true },
  userClose: { type: DataTypesypes.INTEGER, allowNull: true }
})
