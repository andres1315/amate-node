import express from 'express'
import cors from 'cors'
import http from 'http'
import { routes } from './src/routes/routes.js'
import { config } from './src/config.js'
import helmet from 'helmet'
import { sequelizeConnectionPostgres } from './src/database/postgres.js'

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'] // Asegúrate de incluir 'Access-Control-Allow-Origin'
}))
http.createServer(app).listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})

routes(app)
try {
  sequelizeConnectionPostgres.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
