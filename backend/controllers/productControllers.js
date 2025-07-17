import Product from '../models/Products.js'

// get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('createdBy', 'name email role')
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}
// get product by id
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) return res.status(404).json({ message: 'Not found'})
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}
// create product
export const createProduct = async (req, res) => {
    try {
        // Only allow the authenticated user to create their own product
        const product = await Product.create({ ...req.body, createdBy: req.user._id })
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

// update product
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!product) return res.status(404).json({ message: 'Not found' })
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

// delete product
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.json({ message: 'Product deleted' })
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}