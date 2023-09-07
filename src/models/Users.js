import { DataTypes } from 'sequelize'
import { sequelizeConnectionPostgres } from '../database/postgres.js'

const Users = sequelizeConnectionPostgres.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  state: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  userCreated: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }

}, {
  tableName: 'users'
})

export {
  Users
}
