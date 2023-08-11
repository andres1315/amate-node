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

const updateCustomerService = ({ paramsUpdate, whereClause, transaction = null }) => {
  return Customers.update({
    ...paramsUpdate
  }, {
    where: whereClause,
    transaction
  })
}

const filterCustomersServices = ({ whereClause }) => {
  return Customers.findAll({
    where: whereClause
  })
}
export {
  createCustomerService,
  getAllCustomerServices,
  updateCustomerService,
  filterCustomersServices
}
