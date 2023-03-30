import { Router } from 'express'
import { getIncomes, createIncome, getIncomesCurrentMonth, deleteIncome } from '../controllers/incomesController.js'
const routesIncomes = Router()

routesIncomes
  .get('/', getIncomes)
  .get('/currentMonth', getIncomesCurrentMonth)
  .post('/', createIncome)
  .delete('/:id', deleteIncome)

export {
  routesIncomes
}
