import express from 'express'
import { createProduct, getProducts, getProduct, replaceProduct, updateProduct, deleteProduct } from '../controller/product.js'

const router = express.Router()

router
    .post('/', createProduct)
    .get('/', getProducts)
    .get('/:id', getProduct)
    .put('/:id', replaceProduct)
    .patch('/:id', updateProduct)
    .delete('/:id', deleteProduct)

export default router