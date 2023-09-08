'use strict'

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
const _express = _interopRequireDefault(require('express'))
const _cors = _interopRequireDefault(require('cors'))
const _http = _interopRequireDefault(require('http'))
const _routes = require('./routes/routes.js')
const _config = require('./config.js')
const _helmet = _interopRequireDefault(require('helmet'))
const _postgres = require('./database/postgres.js')
const app = (0, _express.default)()
app.use(_express.default.json())
app.use((0, _cors.default)())
app.use((0, _helmet.default)())
_http.default.createServer(app).listen(_config.config.port, function () {
  console.log('Server is running on port '.concat(_config.config.port))
});
(0, _routes.routes)(app)
try {
  _postgres.sequelizeConnectionPostgres.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
