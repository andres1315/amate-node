import { getIncomesDb, createNewIncome, deleteIncomeService } from '../services/IncomesServices.js'
import { validateToken } from '../utils/utils.js'
import { Op } from 'sequelize'
import { sequelizeConnection } from '../database/db.js'
const createIncome = async (req, res, next) => {
  try {
    const { customer, value, description } = req.body
    const authorization = req.get('authorization')
    const validateTolkenResult = validateToken({ authorization })
    if (!validateTolkenResult.success) return res.status(validateTolkenResult.status).json({ message: validateTolkenResult.message })
    if (!customer || !value || !description) return res.status(400).json({ message: 'customer and value are required', data: [] })
    const newIncome = { customer, value, description, userCreated: validateTolkenResult.decodedToken.id }
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

const deleteIncome = async (req, res, next) => {
  try {
    const { id } = req.params
    const resultTransaction = await sequelizeConnection.transaction(async t => {
      await deleteIncomeService({ id, transaction: t })
      return true
    })
    res.status(200).json({ message: 'successfully', data: resultTransaction })
  } catch (error) {
    next(error)
  }
}

export {
  createIncome,
  getIncomes,
  getIncomesCurrentMonth,
  deleteIncome
}
