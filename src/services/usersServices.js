import { Users } from '../models/Users.js'

const createUserDb = ({ paramCreate }) => {
  return Users.create({
    ...paramCreate
  })
}

const getUsersDb = ({ whereClause }) => {
  return Users.findOne({
    where: {
      ...whereClause
    },
    raw: true
  })
}
export {
  createUserDb,
  getUsersDb
}
