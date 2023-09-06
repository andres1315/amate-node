import { Op } from 'sequelize'
import { filterIncomesService, sumAllIncomes } from '../services/IncomesServices.js'
import { filterExpendituresDb, sumAllExpenditures } from '../services/expendituresServices.js'

const getStatHome = async (req, res, next) => {
  try {
    const [incomes, expenditures, allIncomes, allExpenditures] = await Promise.all([
      await filterIncomesService({ whereClause: { createdAt: { [Op.gte]: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1) } } }),
      await filterExpendituresDb({ whereClause: { createdAt: { [Op.gte]: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1) } } }),
      await sumAllIncomes(),
      await sumAllExpenditures()
    ])

    const currentMonthIncomes = incomes.filter(income => income.createdAt.getMonth() === new Date().getMonth())
    const previousMonthIncomes = incomes.filter(income => income.createdAt.getMonth() === new Date().getMonth() - 1)
    const currentMonthExpenditures = expenditures.filter(expenditure => expenditure.createdAt.getMonth() === new Date().getMonth())
    const previousMonthExpenditures = expenditures.filter(expenditure => expenditure.createdAt.getMonth() === new Date().getMonth() - 1)
    const cashFlow = (allIncomes[0].totalValue - allExpenditures[0].totalValue)
    return res.status(200).json({
      message: 'successfully',
      data: {
        currentMonthIncomes,
        previousMonthIncomes,
        currentMonthExpenditures,
        previousMonthExpenditures,
        cashFlow
      }
    })
  } catch (error) {
    next(error)
  }
}

export {
  getStatHome
}
