import { Router } from 'express'
import { getAccountingPeriods, createAccountingPeriods, OpenCloseAccountingPeriods } from '../controllers/accountingPeriodsController.js'

export const routesAccountingPeriods = Router()
/* routes */
routesAccountingPeriods
  .get('/', getAccountingPeriods)
  .post('/create/', createAccountingPeriods)
  .patch('/open-close/:id', OpenCloseAccountingPeriods)
