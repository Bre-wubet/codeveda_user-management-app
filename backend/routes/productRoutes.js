import express from 'express'
import {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getMyProducts
} from '../controllers/productControllers.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router();
router.use(protect)

// product routes
router.get('/', getProducts)
router.post('/', createProduct)
router.get('/my', getMyProducts)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router