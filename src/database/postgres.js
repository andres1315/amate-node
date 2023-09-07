import { Sequelize } from 'sequelize'
import { config } from '../config.js'

export const sequelizeConnectionPostgres = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'postgres',
  port: config.dbPort,
  timezone: '-05:00',
  ssl: true,
  dialectOptions: {
    ssl: true
  }
})
