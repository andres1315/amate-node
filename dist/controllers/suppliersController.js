"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuppliers = exports.filterSuppliers = exports.createSuppliers = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _suppliersServices = require("../services/suppliersServices.js");
var _db = require("../database/db.js");
var _sequelize = require("sequelize");
var getSuppliers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var suppliers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _suppliersServices.getSuppliersServices)();
        case 3:
          suppliers = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            data: suppliers,
            message: 'sucessfully'
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getSuppliers(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.getSuppliers = getSuppliers;
var createSuppliers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _req$body, name, userId, resultTransaction;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, name = _req$body.name, userId = _req$body.userId;
          if (name) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: 'No se recibieron todos los campos requeridos'
          }));
        case 4:
          _context3.next = 6;
          return _db.sequelizeConnection.transaction( /*#__PURE__*/function () {
            var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(t) {
              var newSupplier, supplier;
              return _regenerator["default"].wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    newSupplier = {
                      name: name,
                      userCreated: userId
                    };
                    _context2.next = 3;
                    return (0, _suppliersServices.createSuppliersServices)({
                      newSupplier: newSupplier
                    });
                  case 3:
                    supplier = _context2.sent;
                    return _context2.abrupt("return", supplier);
                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x7) {
              return _ref3.apply(this, arguments);
            };
          }());
        case 6:
          resultTransaction = _context3.sent;
          return _context3.abrupt("return", res.status(201).json({
            data: resultTransaction,
            message: 'success'
          }));
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function createSuppliers(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createSuppliers = createSuppliers;
var filterSuppliers = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var name, foundSuppliers;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          name = req.query.name;
          _context4.next = 4;
          return (0, _suppliersServices.filterSuppliersServices)({
            clauseWhere: {
              name: (0, _defineProperty2["default"])({}, _sequelize.Op.like, "%".concat(name, "%"))
            }
          });
        case 4:
          foundSuppliers = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            data: foundSuppliers,
            message: 'success'
          }));
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return function filterSuppliers(_x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();
exports.filterSuppliers = filterSuppliers;