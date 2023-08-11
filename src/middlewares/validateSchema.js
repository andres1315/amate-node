export const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property]
    const resultValidate = schema(data)
    if (!resultValidate.success) {
      const errorSchema = new Error()
      errorSchema.message = resultValidate.error.issues.map((issue) => issue.message).join(', ')
      errorSchema.name = 'ValidationSchemaError'
      return next(errorSchema)
    }
    return next()
  }
}
