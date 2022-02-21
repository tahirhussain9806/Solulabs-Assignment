const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/product', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTING OPEN")
    })
    .catch(err => {
        console.log("ERROR")
        console.log(err)
    })

const productModel = [{
        productName: "pens",
        qtyPerUnit: 4,
        unitPrice: 5,
        unitInStock: 21,
        discontinued: "NO",
        categoryId: 123,
        categoryName: "testing"
    },
    {

        productName: "pencil",
        qtyPerUnit: 6,
        unitPrice: 3,
        unitInStock: 50,
        discontinued: "NO",
        categoryId: 523,
        categoryName: "testing001"
    }
]
Product.insertMany(productModel)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })