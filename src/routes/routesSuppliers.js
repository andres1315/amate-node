import { Router } from 'express'
import { createSuppliers, filterSuppliers, getSuppliers } from '../controllers/suppliersController.js'

export const routesSupplier = Router()
  .get('/', getSuppliers)
  .post('/', createSuppliers)
  .get('/search', filterSuppliers)
