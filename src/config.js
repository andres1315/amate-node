import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  secret: process.env.SECRET
}
