import dotenv from 'dotenv'
dotenv.config()
export default {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'WAZ5zE4cYV6qZwTUCMKT',
    database: process.env.DB_NAME || 'railway',
    host: process.env.DB_HOST || 'containers-us-west-28.railway.app',
    port: process.env.DB_PORT || 5889,
    dialect: 'mysql'
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
