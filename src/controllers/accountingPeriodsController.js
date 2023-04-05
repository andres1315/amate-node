import { createAccountingPeriodService, getAccountingPeriodService } from '../services/accountingPeriodsService.js'

const createAccountingPeriods = async (req, res, next) => {
  try {
    const { userId } = req.body
    if (!userId) return res.status(400).json({ message: 'User Id is required' })
    const lastPeriodCreated = await getAccountingPeriodService({ where: { userId } })
    const currentDate = new Date()
    const paramsCreate = {
      userCreated: userId
    }
    if (lastPeriodCreated.length > 0) {
      const lastPeriod = lastPeriodCreated[0]
      if (lastPeriod.month === 12) {
        paramsCreate.month = 1
        paramsCreate.year = lastPeriod.year + 1
      } else {
        paramsCreate.month = lastPeriod.month + 1
        paramsCreate.year = lastPeriod.year
      }
    } else {
      paramsCreate.month = currentDate.getMonth() + 1
      paramsCreate.year = currentDate.getFullYear()
    }

    const newAccountingPeriod = createAccountingPeriodService({ paramsCreate })
    return res.status(200).json({ message: 'Accounting Period created', data: newAccountingPeriod })
  } catch (error) {
    next(error)
  }
}

const getAccountingPeriods = async (req, res, next) => {
  try {
    const accountingPeriods = await getAccountingPeriodService({ where: { state: 1, open: true } })
    return res.status(200).json({ message: 'Accounting Periods', data: accountingPeriods })
  } catch (error) {
    next(error)
  }
}

export {
  getAccountingPeriods,
  createAccountingPeriods
}
