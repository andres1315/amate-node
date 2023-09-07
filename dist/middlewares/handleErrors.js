"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleErrors = void 0;
var handleErrors = function handleErrors(err, req, res, next) {
  console.log('ERROR', err.name);
  console.log({
    err: err
  });
  if (err.name === 'ValidationSchemaError') return res.status(400).json({
    message: err.message,
    success: false,
    statusCode: 400,
    error: err.name
  });
  return res.status(500).send({
    message: 'Error interno del servidor',
    success: false,
    statusCode: 500,
    error: err.name
  });
};
exports.handleErrors = handleErrors;