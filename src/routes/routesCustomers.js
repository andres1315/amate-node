import { Router } from 'express'
import { createCustomer, filterCustomers, getAllCustomers, updateCustomer } from '../controllers/customersController.js'
import { validatorHandler } from '../middlewares/validateSchema.js'
import { validateCustomerPartial } from '../dto/customerSchema.dto.js'

const routesCustomers = Router()
routesCustomers
  .post('/', createCustomer)
  .get('/', getAllCustomers)
  .patch('/:id', updateCustomer)
  .get('/search', validatorHandler(validateCustomerPartial, 'query'), filterCustomers)
export {
  routesCustomers
}
