import { getIncomesDb, createNewIncome } from '../services/IncomesServices.js'
import { validateToken } from '../utils/utils.js'
import { Op } from 'sequelize'
const createIncome = async (req, res, next) => {
  try {
    const { customer, valuepaid, description } = req.body
    const authorization = req.get('authorization')
    const validateTolkenResult = validateToken({ authorization })
    if (!validateTolkenResult.success) return res.status(validateTolkenResult.status).json({ message: validateTolkenResult.message })
    if (!customer || !valuepaid || !description) return res.status(400).json({ message: 'customer and valuepaid are required', data: [] })
    const newIncome = { name: customer, value: valuepaid, description }
    const newincomeDb = await createNewIncome({ paramCreate: newIncome })
    return res.status(201).json({ data: newincomeDb, message: 'successfully' })
  } catch (err) {
    next(err)
  }
}

const getIncomes = async (req, res, next) => {
  try {
    const authorization = req.get('authorization')
    const validateTolkenResult = validateToken({ authorization })
    if (!validateTolkenResult.success) return res.status(validateTolkenResult.status).json({ message: validateTolkenResult.message })
    const incomes = await getIncomesDb()
    return res.status(200).json({ message: 'successfully', data: incomes })
  } catch (err) {
    next(err)
  }
}

const getIncomesCurrentMonth = async (req, res, next) => {
  try {
    const authorization = req.get('authorization')
    const validateTolkenResult = validateToken({ authorization })
    if (!validateTolkenResult.success) return res.status(validateTolkenResult.status).json({ message: validateTolkenResult.message })

    const whereClause = {
      createdAt: {
        [Op.gte]: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      }
    }
    const incomes = await getIncomesDb({ whereClause })
    return res.status(200).json({ message: 'successfully', data: incomes })
  } catch (error) {
    next(error)
  }
}

export {
  createIncome,
  getIncomes,
  getIncomesCurrentMonth
}
