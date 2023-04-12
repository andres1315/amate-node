import { getIncomesDb, createNewIncome, deleteIncomeService, updateIncomeService } from '../services/IncomesServices.js'
import { validateToken } from '../utils/utils.js'
import { Op } from 'sequelize'
import { sequelizeConnection } from '../database/db.js'
import { getAccountingPeriodService } from '../services/accountingPeriodsService.js'
const createIncome = async (req, res, next) => {
  try {
    const { customer, value, description } = req.body
    const authorization = req.get('authorization')
    const validateTolkenResult = validateToken({ authorization })
    if (!validateTolkenResult.success) return res.status(validateTolkenResult.status).json({ message: validateTolkenResult.message })
    if (!customer || !value || !description) return res.status(400).json({ message: 'customer and value are required', data: [] })
    const newIncome = { customer, value, description, userCreated: validateTolkenResult.decodedToken.id }
    const hasAccountingPeriodOpen = await getAccountingPeriodService({ where: { open: true } })
    if (!hasAccountingPeriodOpen.length) return res.status(400).json({ message: 'No accounting period open', data: [] })
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
    const { month, year } = req.params
    let whereClause = {}
    if (year && month) {
      const lastDayMonth = new Date(year, Number(month) + 1, 0).getDate()
      console.log(year)
      console.log(month)
      console.log(lastDayMonth)
      const startDate = new Date(year, month, 1)
      const endDate = new Date(year, month, lastDayMonth, 23, 59, 59, 999)
      whereClause = {
        createdAt: {
          [Op.gte]: startDate,
          [Op.lte]: endDate
        }
      }
    }
    console.log({ whereClause })
    const incomes = await getIncomesDb({ whereClause })
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
const updateIncome = async (req, res, next) => {
  try {
    const { id } = req.params
    const { value, description } = req.body
    if (!id || !value || !description) return res.status(400).json({ message: 'id, value and description are required', data: [] })
    const resultTransaction = await sequelizeConnection.transaction(async t => {
      return await updateIncomeService({ id, paramUpdate: { value, description }, transaction: t })
    })
    return res.status(200).json({ message: 'successfully', data: resultTransaction })
  } catch (error) {
    next(error)
  }
}

export {
  createIncome,
  getIncomes,
  getIncomesCurrentMonth,
  deleteIncome,
  updateIncome
}
