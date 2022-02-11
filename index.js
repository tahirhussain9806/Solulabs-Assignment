const express = require('express')
const app = express();
const path = require('path')
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view  engine', 'ejs')

const productModel = [{
        productId: uuid(),
        productName: "pen",
        qtyPerUnit: 4,
        unitPerPrice: 5,
        unitInStock: 20,
        discontinued: "NO",
        categoryId: 123
    },
    {
        productId: uuid(),
        productName: "pencil",
        qtyPerUnit: 6,
        unitPerPrice: 3,
        unitInStock: 50,
        discontinued: "NO",
        categoryId: 523
    },
    {
        productId: uuid(),
        productName: "pen-pencil",
        qtyPerUnit: 10,
        unitPerPrice: 25,
        unitInStock: 200,
        discontinued: "NO",
        categoryId: 173
    }
]

app.get('/productModel', (req, res) => {
    res.render('productModel/index.ejs', { productModel })
})

app.get('/productModel/create', (req, res) => {
    res.render('productModel/createProductModel.ejs')
})
app.post('/productModel', (req, res) => {
    const { productName, qtyPerUnit, unitPerPrice, unitInStock, discontinued, categoryId } = req.body
    productModel.push({ productId: uuid(), productName, qtyPerUnit, unitPerPrice, unitInStock, discontinued, categoryId })
    res.redirect('/productModel')
})
app.get('/productModel/:productId', (req, res) => {
    const { productId } = req.params;
    const pModel = productModel.find(c => c.productId === productId)
    res.render('productModel/productDetails.ejs', { pModel })
})


const PORT = 5000;
app.listen(PORT, () =>
    console.log("Listening on Port 5000")
)