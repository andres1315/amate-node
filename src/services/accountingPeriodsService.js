import { AccountingPeriod } from '../models/AccountingPeriod.js'

const getAccountingPeriodService = ({ where }) => {
  return AccountingPeriod.findAll({
    where,
    order: [['id', 'DESC']]
  })
}

const createAccountingPeriodService = ({ paramsCreate }) => {
  return AccountingPeriod.create({ ...paramsCreate })
}

export {
  getAccountingPeriodService,
  createAccountingPeriodService
}
