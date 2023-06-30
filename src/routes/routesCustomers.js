import { Router } from 'express'
import { createCustomer, getAllCustomers, updateCustomer } from '../controllers/customersController.js'

const routesCustomers = Router()
routesCustomers
  .post('/', createCustomer)
  .get('/', getAllCustomers)
  .patch('/:id', updateCustomer)
export {
  routesCustomers
}
