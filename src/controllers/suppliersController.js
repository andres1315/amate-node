import { createSuppliersServices, getSuppliersServices } from '../services/suppliersServices.js'
import { sequelizeConnection } from '../database/db.js'
const getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await getSuppliersServices()
    return res.status(200).json({ data: suppliers, message: 'sucessfully' })
  } catch (error) {
    next(error)
  }
}

const createSuppliers = async (req, res, next) => {
  try {
    const { name, userId } = req.body
    if (!name) return res.status(400).json({ message: 'No se recibieron todos los campos requeridos' })
    const resultTransaction = await sequelizeConnection.transaction(async t => {
      const newSupplier = { name, userCreated: userId }
      const supplier = await createSuppliersServices({ newSupplier })
      return supplier
    })
    return res.status(201).json({ data: resultTransaction, message: 'success' })
  } catch (error) {
    next(error)
  }
}

export {
  getSuppliers,
  createSuppliers
}
