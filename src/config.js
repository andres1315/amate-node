import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  dbUser: process.env.DB_USER_POSTGRES,
  dbPassword: process.env.DB_PASSWORD_POSTGRES,
  dbHost: process.env.DB_HOST_POSTGRES,
  dbName: process.env.DB_NAME_POSTGRES,
  dbPort: process.env.DB_PORT_POSTGRES,
  secret: process.env.SECRET
}
