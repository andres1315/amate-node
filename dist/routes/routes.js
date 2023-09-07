"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
var _routesIncomes = require("./routesIncomes.js");
var _routesAuth = require("./routesAuth.js");
var _routesUsers = require("./routesUsers.js");
var _routesExpenditures = require("./routesExpenditures.js");
var _routesCustomers = require("./routesCustomers.js");
var _routesSuppliers = require("./routesSuppliers.js");
var _utils = require("../utils/utils.js");
var _routesAccountingPeriods = require("./routesAccountingPeriods.js");
var _handleErrors = require("../middlewares/handleErrors.js");
var _statsRoutes = require("./statsRoutes.js");
var routes = function routes(app) {
  app.get('/', function (req, res, next) {
    res.status(200).send('<h1>Dynamics CEG</h1>');
  });
  var verifyToken = function verifyToken(req, res, next) {
    try {
      var authorization = req.get('authorization');
      var validateTolkenResult = (0, _utils.validateToken)({
        authorization: authorization
      });
      if (!validateTolkenResult.success) return res.status(validateTolkenResult.status).json({
        message: validateTolkenResult.message
      });
      req.body.userId = validateTolkenResult.decodedToken.id;
      next();
    } catch (error) {
      next(error);
    }
  };
  app.use('/api/auth', _routesAuth.routesAuth);
  app.use('/api/users', _routesUsers.routesUsers);
  app.use('/api/incomes', _routesIncomes.routesIncomes);
  app.use('/api/expenditures', _routesExpenditures.routesExpenditures);
  app.use('/api/customers', _routesCustomers.routesCustomers);
  app.use('/api/suppliers', verifyToken, _routesSuppliers.routesSupplier);
  app.use('/api/accounting-periods', verifyToken, _routesAccountingPeriods.routesAccountingPeriods);
  app.use('/api/stats', verifyToken, _statsRoutes.statRoutes);
  app.use(_handleErrors.handleErrors);
};
exports.routes = routes;