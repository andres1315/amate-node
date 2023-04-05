import { Customers } from '../models/Customers.js'
import { Incomes } from '../models/Incomes.js'

const getIncomesDb = ({ whereClause = {} } = {}) => {
  return Incomes.findAll({
    where: {
      state: 1,
      ...whereClause
    },
    include: [
      {
        model: Customers,
        as: 'customerDetail'
      }
    ]
  })
}

const createNewIncome = ({ paramCreate }) => {
  return Incomes.create({
    ...paramCreate
  })
}
const deleteIncomeService = ({ id, transaction }) => {
  return Incomes.destroy({
    where: {
      id
    }
  }, { transaction })
}

const updateIncomeService = ({ id, paramUpdate, transaction }) => {
  return Incomes.update({
    ...paramUpdate
  }, {
    where: {
      id
    },
    transaction
  })
}

export {
  getIncomesDb,
  createNewIncome,
  deleteIncomeService,
  updateIncomeService
}
