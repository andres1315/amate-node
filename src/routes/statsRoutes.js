import { Router } from 'express'
import { getStatHome } from '../controllers/statsController.js'

export const statRoutes = Router()

statRoutes
  .get('/', getStatHome)
