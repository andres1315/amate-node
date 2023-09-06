import { Router } from 'express'
import { getIncomes, createIncome, getIncomesCurrentMonth, deleteIncome, updateIncome, filterIncomes } from '../controllers/incomesController.js'
const routesIncomes = Router()

routesIncomes
  .get('/', getIncomes)
  .get('/year/:year/month/:month', getIncomes)
  .get('/currentMonth', getIncomesCurrentMonth)
  .get('/filter/search', filterIncomes)
  .post('/', createIncome)
  .delete('/:id', deleteIncome)
  .patch('/:id', updateIncome)

export {
  routesIncomes
}
