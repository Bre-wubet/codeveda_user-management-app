import express from 'express'
import upload from '../middleware/uploadMiddleware.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', protect, upload.single('image'), (req,res) => {
    res.status(200).json({ imageUrl: `/uploads/${req.file.filename}`})
})

export default router