const mongoose = require("mongoose")
const validator = require("validator")

const productModelSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: [true, "ProductID is required"],
        unique: [true, "productId needs to unique,this productId already exists"],
        minlength: 6,
        maxlength: 6

    },
    productName: {
        type: String,
        required: [true], //, "Product Name is required"

    },
    qtyPerUnit: {
        type: Number,
        required: [true], //, "Quantaty Per Unit is required"
        min: 0,
    },
    unitPrice: {
        type: Number,
        required: [true], //, "Unit Price is required"
        min: 0,
    },
    unitInStock: {
        type: Number,
        required: [true], //, "Unit In  Stock in required"
        min: 0,
    },
    discontinued: {
        type: Boolean,
        default: false,
    },
    categoryId: {
        type: Number,
        unique: [true, "category needs to be unique,this categoryId already exists"],
        minlength: 6,
        maxlength: 6
    },
    categoryName: {
        type: String,
        unique: false
    }
})

const ProductModel = new mongoose.model('ProductModel', productModelSchema);

module.exports = ProductModel;