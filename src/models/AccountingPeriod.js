
import { DataTypes } from 'sequelize'
import { sequelizeConnectionPostgres } from '../database/postgres.js'

export const AccountingPeriod = sequelizeConnectionPostgres.define('accounting_period', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  month: { type: DataTypes.INTEGER, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
  state: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  open: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  userCreated: { type: DataTypes.INTEGER, allowNull: false },
  userOpen: { type: DataTypes.INTEGER, allowNull: true },
  userClose: { type: DataTypes.INTEGER, allowNull: true }
},
{
  tableName: 'accounting_period'
})
