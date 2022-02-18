const mongoose = require('mongoose')
const { stringify } = require('uuid')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
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
        type: Number,
        require: true,
        min: 0
    },

})
const Product = mongoose.model('Product', productSchema)

module.exports = Product;