import { z } from 'zod'

const customerSchema = z.object({
  name: z.string({
    required_error: 'El nombre es requerido',
    invalid_type_error: 'El nombre debe ser un string',
    min_error: 'El nombre debe tener al menos 2 caracteres',
    max_error: 'El nombre debe tener máximo 20 caracteres'
  }).trim().min(2, 'El nombre debe tener al menos 2 caracteres').max(20, 'El nombre debe tener máximo 20 caracteres'),
  number: z.number({
    required_error: 'El número es requerido',
    invalid_type_error: 'El número debe ser un número',
    min_error: 'El número debe tener al menos 1 dígito',
    max_error: 'El número debe tener máximo 10 dígitos',
    positive_error: 'El número debe ser positivo',
    nonnegative_error: 'El número debe ser no negativo',
    int_error: 'El número debe ser un entero',
    parse_error: 'El número debe ser un entero'

  }).int().positive().min(1).max(9999999999)

})

const validateCustomer = (input) => {
  return customerSchema.safeParse(input)
}

const validateCustomerPartial = (input) => {
  const rr = customerSchema.partial().safeParse(input)
  return rr
}
export {
  validateCustomer,
  validateCustomerPartial
}
