import { Customers } from '../models/Customers.js'

const createCustomerService = ({ newCustomer, transaction = null }) => {
  return Customers.create({
    ...newCustomer
  }, {
    transaction
  })
}

const getAllCustomerServices = () => {
  return Customers.findAll()
}

export {
  createCustomerService,
  getAllCustomerServices
}
