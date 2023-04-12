import { createAccountingPeriodService, getAccountingPeriodService, updateAccountingPeriodService } from '../services/accountingPeriodsService.js'

const createAccountingPeriods = async (req, res, next) => {
  try {
    const { userId } = req.body
    if (!userId) return res.status(400).json({ message: 'User Id is required' })
    const lastPeriodCreated = await getAccountingPeriodService({ where: { state: 1 } })
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
    return res.status(201).json({ message: 'Accounting Period created', data: newAccountingPeriod })
  } catch (error) {
    next(error)
  }
}

const getAccountingPeriods = async (req, res, next) => {
  try {
    const accountingPeriods = await getAccountingPeriodService({ where: { state: 1 } })
    return res.status(200).json({ message: 'Accounting Periods', data: accountingPeriods })
  } catch (error) {
    next(error)
  }
}

const OpenCloseAccountingPeriods = async (req, res, next) => {
  try {
    const { id } = req.params
    const { userId, open } = req.body
    const paramUpdate = {
      open
    }
    open ? paramUpdate.userOpen = userId : paramUpdate.userClose = userId
    const updatedAccPeriod = await updateAccountingPeriodService({ paramsUpdate: paramUpdate, where: { id } })
    return res.status(200).json({ message: 'Accounting Period updated', data: updatedAccPeriod })
  } catch (error) {
    next(error)
  }
}

export {
  getAccountingPeriods,
  createAccountingPeriods,
  OpenCloseAccountingPeriods
}
