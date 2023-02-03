import { Router } from 'express'
import { getIncomes, createIncome } from '../controllers/incomesController.js'
const routesIncomes = Router()

routesIncomes
  .get('/', getIncomes)
  .post('/', createIncome)

export {
  routesIncomes
}
