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

export {
  getSuppliersServices,
  createSuppliersServices
}
