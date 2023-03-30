import { Router } from 'express'
import { createSuppliers, getSuppliers } from '../controllers/suppliersController.js'

export const routesSupplier = Router()
  .get('/', getSuppliers)
  .post('/', createSuppliers)
