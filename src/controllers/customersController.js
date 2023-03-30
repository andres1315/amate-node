import { sequelizeConnection } from '../database/db.js'
import { createCustomerService, getAllCustomerServices } from '../services/customerServices.js'
import { validateToken } from '../utils/utils.js'

const createCustomer = async (req, res, next) => {
  try {
    const { name, number } = req.body
    const authorization = req.get('authorization')
    const validateTokenResult = validateToken({ authorization })
    if (!validateTokenResult.success) return res.status(validateTokenResult.status).json({ message: validateTokenResult.message, success: validateTokenResult.success })
    if (!name || !number) return res.status(400).json({ message: 'No se recibieron todos los campos requeridos', success: false })
    const resultTransaction = sequelizeConnection.transaction(async (transaction) => {
      const newCustomer = { name, number: Number(number) }
      const customerCreated = await createCustomerService({ newCustomer, transaction })
      return customerCreated
    })
    return res.status(201).json({ message: 'Cliente creado correctamente', success: true, data: resultTransaction })
  } catch (error) {
    next(error)
  }
}

const getAllCustomers = async (req, res, next) => {
  try {
    const customers = await getAllCustomerServices()
    return res.status(200).json({ message: 'Clientes obtenidos correctamente', success: true, data: customers })
  } catch (error) {
    next(error)
  }
}

export {
  createCustomer,
  getAllCustomers
}
