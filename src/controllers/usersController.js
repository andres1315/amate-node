import bcrypt from 'bcrypt'
import { createUserDb, getUsersDb } from '../services/usersServices.js'
import jwt from 'jsonwebtoken'
import { config } from '../config.js'
const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ message: 'Username and password are required', data: [{ username, password }] })
    const user = await getUsersDb({ username })
    console.log('value user ', user)
    const validatePassword = !user ? false : await bcrypt.compare(password, user.password)
    if (!(user && validatePassword)) return res.status(401).json({ message: 'invalid username or password', data: [] })
    const userForToken = { username: user.username, id: user.id }
    delete userForToken.password
    const token = jwt.sign(userForToken, config.secret, { expiresIn: 60 * 60 * 24 })
    return res.status(200).json({ message: 'User found', data: { name: `${user.first_name} ${user.last_name}`, token, username } })
  } catch (err) {
    next(err)
  }
}

const createUser = async (req, res, next) => {
  try {
    const { first_name, last_name, username, password } = req.body
    if (!first_name || !last_name || !username || !password) return res.status(400).json({ message: 'All fields are required' })
    const saltRounds = 10
    const passHash = await bcrypt.hash(password, saltRounds)
    const paramCreate = { first_name, last_name, username, password: passHash }
    const user = await createUserDb({ paramCreate })
    return res.status(201).json({ message: 'User created', data: user })
  } catch (err) {
    next(err)
  }
}

export {
  loginUser,
  createUser
}
