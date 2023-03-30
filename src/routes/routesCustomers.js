import { Router } from 'express'
import { createCustomer, getAllCustomers } from '../controllers/customersController.js'

const routesCustomers = Router()
routesCustomers
  .post('/', createCustomer)
  .get('/', getAllCustomers)
export {
  routesCustomers
}
