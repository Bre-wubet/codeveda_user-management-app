import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    productImg: {
        type: String,
        default: ''
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

export default mongoose.model('Product', productSchema)