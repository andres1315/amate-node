"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorHandler = void 0;
var validatorHandler = function validatorHandler(schema, property) {
  return function (req, res, next) {
    var data = req[property];
    var resultValidate = schema(data);
    if (!resultValidate.success) {
      var errorSchema = new Error();
      errorSchema.message = resultValidate.error.issues.map(function (issue) {
        return issue.message;
      }).join(', ');
      errorSchema.name = 'ValidationSchemaError';
      return next(errorSchema);
    }
    return next();
  };
};
exports.validatorHandler = validatorHandler;