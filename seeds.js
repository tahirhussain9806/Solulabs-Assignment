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

// const p = new Product({
//     productName: "pen",
//     qtyPerUnit: 4,
//     unitPrice: 5,
//     unitInStock: 20,
//     discontinued: false,
//     categoryId: 123
// })
// p.save()

const productModel = [{
        productName: "pens",
        qtyPerUnit: 4,
        unitPrice: 5,
        unitInStock: 21,
        discontinued: "NO",
        categoryId: 123
    },
    {

        productName: "pencil",
        qtyPerUnit: 6,
        unitPrice: 3,
        unitInStock: 50,
        discontinued: "NO",
        categoryId: 523
    }
]
Product.insertMany(productModel)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })