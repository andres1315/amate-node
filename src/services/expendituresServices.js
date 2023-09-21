import { Sequelize } from 'sequelize'
import { Expenditures } from '../models/Expenditures.js'
import { Suppliers } from '../models/Suppliers.js'

const getExpendituresDb = ({ whereClause = {} } = {}) => {
  console.log(whereClause)
  return Expenditures.findAll({
    where: {
      state: 1,
      ...whereClause
    },
    include: [
      {
        model: Suppliers,
        required: true,
        attributes: ['name'],
        as: 'supplierDetail'
      }
    ]
  })
}

const createExpendituresDb = ({ newExpenditure }) => {
  return Expenditures.create({ ...newExpenditure })
}

const filterExpendituresDb = ({ clauseWhere }) => {
  return Expenditures.findAll({
    where: clauseWhere
  })
}

const sumAllExpenditures = () => {
  return Expenditures.findAll({
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
  getExpendituresDb,
  createExpendituresDb,
  filterExpendituresDb,
  sumAllExpenditures
}
