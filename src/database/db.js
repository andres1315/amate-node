import Sequelize from 'sequelize'
import { config } from '../config.js'

const sequelizeConnection = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'mysql',
  port: config.dbPort,
  timezone: '-05:00',
  dialectModule :
})

export {
  sequelizeConnection
}
