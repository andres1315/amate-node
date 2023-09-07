"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCustomer = exports.getAllCustomers = exports.filterCustomers = exports.createCustomer = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _sequelize = require("sequelize");
var _db = require("../database/db.js");
var _customerServices = require("../services/customerServices.js");
var _utils = require("../utils/utils.js");
var createCustomer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body, name, number, authorization, validateTokenResult, resultTransaction;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, name = _req$body.name, number = _req$body.number;
          authorization = req.get('authorization');
          validateTokenResult = (0, _utils.validateToken)({
            authorization: authorization
          });
          if (validateTokenResult.success) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(validateTokenResult.status).json({
            message: validateTokenResult.message,
            success: validateTokenResult.success
          }));
        case 6:
          if (!(!name || !number)) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: 'No se recibieron todos los campos requeridos',
            success: false
          }));
        case 8:
          resultTransaction = _db.sequelizeConnection.transaction( /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(transaction) {
              var newCustomer, customerCreated;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    newCustomer = {
                      name: name,
                      number: Number(number)
                    };
                    _context.next = 3;
                    return (0, _customerServices.createCustomerService)({
                      newCustomer: newCustomer,
                      transaction: transaction
                    });
                  case 3:
                    customerCreated = _context.sent;
                    return _context.abrupt("return", customerCreated);
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x4) {
              return _ref2.apply(this, arguments);
            };
          }());
          return _context2.abrupt("return", res.status(201).json({
            message: 'Cliente creado correctamente',
            success: true,
            data: resultTransaction
          }));
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function createCustomer(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.createCustomer = createCustomer;
var getAllCustomers = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var customers;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _customerServices.getAllCustomerServices)();
        case 3:
          customers = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            message: 'Clientes obtenidos correctamente',
            success: true,
            data: customers
          }));
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function getAllCustomers(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getAllCustomers = getAllCustomers;
var updateCustomer = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, _req$body2, name, number, whereClause, paramsUpdate, customerUpdate;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, number = _req$body2.number;
          whereClause = {
            id: id
          };
          paramsUpdate = {
            name: name,
            number: Number(number)
          };
          console.log(paramsUpdate);
          _context4.next = 8;
          return (0, _customerServices.updateCustomerService)({
            paramsUpdate: paramsUpdate,
            whereClause: whereClause
          });
        case 8:
          customerUpdate = _context4.sent;
          console.log(customerUpdate);
          return _context4.abrupt("return", res.status(200).json({
            message: 'Cliente actualizado correctamente',
            success: true,
            data: customerUpdate
          }));
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function updateCustomer(_x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateCustomer = updateCustomer;
var filterCustomers = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var name, whereClause, resultCustomers;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          name = req.query.name;
          whereClause = {
            name: (0, _defineProperty2["default"])({}, _sequelize.Op.like, "%".concat(name, "%"))
          };
          _context5.next = 5;
          return (0, _customerServices.filterCustomersServices)({
            whereClause: whereClause
          });
        case 5:
          resultCustomers = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            message: 'Clientes obtenidos correctamente',
            success: true,
            data: resultCustomers
          }));
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function filterCustomers(_x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();
exports.filterCustomers = filterCustomers;