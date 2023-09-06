import { Sequelize } from 'sequelize'
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

const filterIncomesService = ({ clauseWhere }) => {
  return Incomes.findAll({
    where: clauseWhere
  })
}

const sumAllIncomes = () => {
  return Incomes.findAll({
    attributes: [
      [Sequelize.fn('sum', Sequelize.col('value')), 'totalValue']
    ],
    where: {
      state: 1
    },
    raw: true
  })
}

export {
  getIncomesDb,
  createNewIncome,
  deleteIncomeService,
  updateIncomeService,
  filterIncomesService,
  sumAllIncomes
}
