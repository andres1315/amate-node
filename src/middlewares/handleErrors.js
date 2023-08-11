export const handleErrors = (err, req, res, next) => {
  console.log('ERROR', err.name)
  console.log({ err })

  if (err.name === 'ValidationSchemaError') return res.status(400).json({ message: err.message, success: false, statusCode: 400, error: err.name })
  return res.status(500).send({ message: 'Error interno del servidor', success: false, statusCode: 500, error: err.name })
}
