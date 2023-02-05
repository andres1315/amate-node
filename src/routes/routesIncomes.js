import { Router } from 'express'
import { getIncomes, createIncome, getIncomesCurrentMonth } from '../controllers/incomesController.js'
const routesIncomes = Router()

routesIncomes
  .get('/', getIncomes)
  .get('/currentMonth', getIncomesCurrentMonth)
  .post('/', createIncome)

export {
  routesIncomes
}
