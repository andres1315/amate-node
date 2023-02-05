import { Expenditures } from '../models/Expenditures.js'

const getExpendituresDb = ({ whereClause = {} } = {}) => {
  return Expenditures.findAll({
    where: {
      state: 1,
      ...whereClause
    }
  })
}

const createExpendituresDb = ({ newExpenditure }) => {
  return Expenditures.create({ ...newExpenditure })
}

export {
  getExpendituresDb,
  createExpendituresDb
}
