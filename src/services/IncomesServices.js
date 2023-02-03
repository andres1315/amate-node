import { Incomes } from '../models/Incomes.js'
const getIncomesDb = () => {
  return Incomes.findAll()
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
