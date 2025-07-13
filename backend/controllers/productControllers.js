import Product from '../models/Products.js'

// get all products
export const getProducts = async (req, res) => {
    const products = await Product.find().populate('createdBy', 'name')
    res.json(products)
}

// get product by id
export const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ message: 'Not found'})
    res.json(product)
}
// create poduct
export const createProduct = async (req, res) => {
    const product = await Product.create({ ...req.body, createdBy: req.user._id })
    res.status(201).json(product)
}

// update product
export const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id,req.body, { new: true})
    res.json(product)
}

// delete product
export const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: 'Product deleted'})
}