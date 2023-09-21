import { Router } from 'express'
import { createExpenditures, getExpenditures, getExpendituresFilter } from '../controllers/expendituresController.js'
const routesExpenditures = Router()

routesExpenditures
  .get('/', getExpenditures)
  .get('/filter', getExpendituresFilter)
  .post('/', createExpenditures)

export {
  routesExpenditures
}
