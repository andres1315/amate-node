import dotenv from 'dotenv'
dotenv.config()
export default {
  development: {
    username: process.env.DB_USER_POSTGRES,
    password: process.env.DB_PASSWORD_POSTGRES,
    database: process.env.DB_NAME_POSTGRES,
    host: process.env.DB_HOST_POSTGRES,
    port: process.env.DB_PORT_POSTGRES,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  }
}
