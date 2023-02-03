import { Router } from 'express'
import { createUser } from '../controllers/usersController.js'

const routesUsers = Router()

routesUsers
  .post('/create', createUser)

export {
  routesUsers
}
