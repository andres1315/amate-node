import { Incomes } from '../models/Incomes.js'

const getIncomesDb = ({ whereClause = {} } = {}) => {
  return Incomes.findAll({
    where: {
      state: 1,
      ...whereClause
    }
  })
}

const createNewIncome = ({ paramCreate }) => {
  return Incomes.create({
    ...paramCreate
  })
}

export {
  getIncomesDb,
  createNewIncome
}
