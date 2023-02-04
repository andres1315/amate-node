import jwt from 'jsonwebtoken'
import { config } from '../config.js'

const validateToken = ({ authorization }) => {
  let token = null
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    token = authorization.substring(7)
  }

  const decodedToken = token ? jwt.verify(token, config.secret) : {}
  if (!token || !decodedToken?.id) return { message: 'token missing or invalid', data: [], status: 400, success: false }
  return { success: true }
}

export {
  validateToken
}
