import { routesIncomes } from './routesIncomes.js'
import { routesAuth } from './routesAuth.js'
import { routesUsers } from './routesUsers.js'
import { routesExpenditures } from './routesExpenditures.js'
import { routesCustomers } from './routesCustomers.js'
import { routesSupplier } from './routesSuppliers.js'
import { validateToken } from '../utils/utils.js'
import { routesAccountingPeriods } from './routesAccountingPeriods.js'

export const routes = (app) => {
  app.get('/', (req, res, next) => {
    res.status(200).send('<h1>Dynamics CEG</h1>')
  })

  const verifyToken = (req, res, next) => {
    try {
      const authorization = req.get('authorization')
      const validateTolkenResult = validateToken({ authorization })
      if (!validateTolkenResult.success) return res.status(validateTolkenResult.status).json({ message: validateTolkenResult.message })
      req.body.userId = validateTolkenResult.decodedToken.id
      next()
    } catch (error) {
      next(error)
    }
  }

  app.use('/api/auth', routesAuth)
  app.use('/api/users', routesUsers)
  app.use('/api/incomes', routesIncomes)
  app.use('/api/expenditures', routesExpenditures)
  app.use('/api/customers', routesCustomers)
  app.use('/api/suppliers', verifyToken, routesSupplier)
  app.use('/api/accounting-periods', verifyToken, routesAccountingPeriods)
}
