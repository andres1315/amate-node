import { Suppliers } from '../models/Suppliers.js'

const getSuppliersServices = () => {
  return Suppliers.findAll({
    where: {
      state: 1
    }
  })
}

const createSuppliersServices = ({ newSupplier }) => {
  return Suppliers.create(newSupplier)
}

const filterSuppliersServices = ({ clauseWhere }) => {
  return Suppliers.findAll({
    where: clauseWhere
  })
}

export {
  getSuppliersServices,
  createSuppliersServices,
  filterSuppliersServices
}
