import express from 'express'
import cors from 'cors'
import http from 'http'
import { routes } from './routes/routes.js'
import { config } from './config.js'
import { sequelizeConnection } from './database/db.js'
const app = express()
app.use(express.json())
app.use(cors())

http.createServer(app).listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})

routes(app)
try {
  sequelizeConnection.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
