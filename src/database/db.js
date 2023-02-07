import Sequelize from 'sequelize'
import { config } from '../config.js'
import mysql2 from 'mysql2'
const sequelizeConnection = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'mysql',
  port: config.dbPort,
  timezone: '-05:00',
  dialectModule: mysql2
})

export {
  sequelizeConnection
}
