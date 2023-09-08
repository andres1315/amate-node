'use strict'

const _typeof = require('@babel/runtime/helpers/typeof')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.config = void 0
const dotenv = _interopRequireWildcard(require('dotenv'))
function _getRequireWildcardCache (nodeInterop) { if (typeof WeakMap !== 'function') return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop })(nodeInterop) }
function _interopRequireWildcard (obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj } } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj) } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc) } else { newObj[key] = obj[key] } } } newObj.default = obj; if (cache) { cache.set(obj, newObj) } return newObj }
dotenv.config()
const config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  dbUser: process.env.DB_USER_POSTGRES,
  dbPassword: process.env.DB_PASSWORD_POSTGRES,
  dbHost: process.env.DB_HOST_POSTGRES,
  dbName: process.env.DB_NAME_POSTGRES,
  dbPort: process.env.DB_PORT_POSTGRES,
  secret: process.env.SECRET
}
exports.config = config
