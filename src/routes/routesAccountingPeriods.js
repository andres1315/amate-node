import { Router } from 'express'
import { getAccountingPeriods, createAccountingPeriods } from '../controllers/accountingPeriodsController.js'

export const routesAccountingPeriods = Router()

routesAccountingPeriods
  .get('/', getAccountingPeriods)
  .post('/create/', createAccountingPeriods)
