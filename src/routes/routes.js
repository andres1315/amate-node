import { routesIncomes } from './routesIncomes.js'
import { routesAuth } from './routesAuth.js'
import { routesUsers } from './routesUsers.js'
import { routesExpenditures } from './routesExpenditures.js'

export const routes = (app) => {
  app.get('/', (req, res, next) => {
    res.status(200).send('<h1>Dynamics CEG</h1>')
  })

  app.use('/api/auth', routesAuth)
  app.use('/api/users', routesUsers)
  app.use('/api/incomes', routesIncomes)
  app.use('/api/expenditures', routesExpenditures)
}
