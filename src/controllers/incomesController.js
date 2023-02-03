import { getIncomesDb, createNewIncome } from '../services/IncomesServices.js'
import { config } from '../config.js'
import jwt from 'jsonwebtoken'
const createIncome = async (req, res, next) => {
  try {
    const { customer, valuepaid } = req.body
    const authorization = req.get('authorization')
    let token = null

    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      token = authorization.substring(7)
    }

    const decodedToken = token ? jwt.verify(token, config.secret) : {}
    if (!token || !decodedToken?.id) return res.status(401).json({ message: 'token missing or invalid', data: [] })
    if (!customer || !valuepaid) return res.status(400).json({ message: 'customer and valuepaid are required', data: [] })
    const newIncome = { name: customer, value: valuepaid }
    const newincomeDb = await createNewIncome({ paramCreate: newIncome })
    return res.status(201).json({ data: newincomeDb, message: 'successfully' })
  } catch (err) {
    next(err)
  }
}

const getIncomes = async (req, res, next) => {
  try {
    const incomes = await getIncomesDb()
    return res.status(200).json({ message: 'successfully', data: incomes })
  } catch (err) {
    next(err)
  }
}
export {
  createIncome,
  getIncomes
}
