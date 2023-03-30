import { Expenditures } from '../models/Expenditures.js'
import { Suppliers } from '../models/Suppliers.js'

const getExpendituresDb = ({ whereClause = {} } = {}) => {
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

export {
  getExpendituresDb,
  createExpendituresDb
}
