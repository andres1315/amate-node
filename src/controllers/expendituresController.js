import { getExpendituresDb, createExpendituresDb } from '../services/expendituresServices.js'
import { validateToken } from '../utils/utils.js'
import { Op } from 'sequelize'
const getExpenditures = async (req, res, next) => {
  try {
    const authorization = req.get('authorization')
    const validateTokenResult = validateToken({ authorization })
    if (!validateTokenResult.success) return res.status(401).json({ message: validateTokenResult.message })
    const expenditures = await getExpendituresDb()
    return res.status(200).json({ data: expenditures, message: 'success' })
  } catch (error) {
    next(error)
  }
}

const getExpendituresCurrentMonth = async (req, res, next) => {
  try {
    const authorization = req.get('authorization')
    const validateTokenResult = validateToken({ authorization })
    if (!validateTokenResult.success) return res.status(400).json({ message: validateTokenResult.message })
    const whereClause = {
      createdAt: {
        [Op.gte]: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      }
    }
    const expenditures = await getExpendituresDb({ whereClause })
    return res.status(200).json({ data: expenditures, message: 'success' })
  } catch (error) {
    next(error)
  }
}

const createExpenditures = async (req, res, next) => {
  try {
    const authorization = req.get('authorization')
    const validateTokenResult = validateToken({ authorization })
    if (!validateTokenResult.success) return res.status(validateTokenResult.status).json({ message: validateTokenResult.message, success: validateTokenResult.success })
    const { supplier, description, value } = req.body
    if (!supplier || !description || !value) return res.status(400).json({ message: 'No se recibieron todos los campos requeridos', success: false })
    const newExpenditure = { supplier, description, value, userCreated: validateTokenResult.decodedToken.id }
    console.log(newExpenditure)
    const expenditure = await createExpendituresDb({ newExpenditure })
    return res.status(201).json({ data: expenditure, message: 'success' })
  } catch (error) {
    next(error)
  }
}

export {
  createExpenditures,
  getExpenditures,
  getExpendituresCurrentMonth
}
