import { Router } from 'express'
import { createExpenditures, getExpenditures, getExpendituresCurrentMonth } from '../controllers/expendituresController.js'
const routesExpenditures = Router()

routesExpenditures
  .get('/', getExpenditures)
  .get('/currentMonth', getExpendituresCurrentMonth)
  .post('/', createExpenditures)

export {
  routesExpenditures
}
