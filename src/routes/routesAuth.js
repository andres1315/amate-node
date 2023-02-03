import { Router } from 'express'
import { loginUser } from '../controllers/usersController.js'

const routesAuth = Router()
routesAuth
  .post('/login', loginUser)

export {
  routesAuth
}
