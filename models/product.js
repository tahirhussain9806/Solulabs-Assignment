const mongoose = require('mongoose')
const { stringify } = require('uuid')

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    productName: {
        type: String,
        required: true,
        unique: true
    },
    qtyPerUnit: {
        type: Number,
        require: true,
        min: 0
    },
    unitPrice: {
        type: Number,
        require: true,
        min: 0
    },
    unitInStock: {
        type: Number,
        require: true,
        min: 0
    },
    discontinued: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        require: true,
        unique: true
    },
    categoryName: {
        type: String,
        require: true,
    },

})
const Product = mongoose.model('Product', productSchema)

module.exports = Product;