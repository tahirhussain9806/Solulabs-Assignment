const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://mongodata:<password>@solu-mongodb.e2lte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view  engine', 'ejs');

let productModel = [{
        productId: uuid(),
        productName: "pen",
        qtyPerUnit: 4,
        unitPrice: 5,
        unitInStock: 20,
        discontinued: "NO",
        categoryId: 123
    },
    {
        productId: uuid(),
        productName: "pencil",
        qtyPerUnit: 6,
        unitPrice: 3,
        unitInStock: 50,
        discontinued: "NO",
        categoryId: 523
    },
    {
        productId: uuid(),
        productName: "pen-pencil",
        qtyPerUnit: 10,
        unitPrice: 25,
        unitInStock: 200,
        discontinued: "NO",
        categoryId: 173
    }
];

app.get('/productModel', (req, res) => {
    res.render('productModel/index.ejs', { productModel })
});
app.get('/productModel/create', (req, res) => {
    res.render('productModel/createProductModel.ejs')
});
app.post('/productModel', (req, res) => {
    const { productName, qtyPerUnit, unitPrice, unitInStock, discontinued, categoryId } = req.body
    productModel.push({ productId: uuid(), productName, qtyPerUnit, unitPrice, unitInStock, discontinued, categoryId })
    res.redirect('/productModel')
});
app.get('/productModel/:productId', (req, res) => {
    const { productId } = req.params;
    const pModel = productModel.find(c => c.productId === productId)
    res.render('productModel/productDetails.ejs', { pModel })
});
app.get('/productModel/:productId/edit', (req, res) => {
    const { productId } = req.params;
    const pModel = productModel.find(c => c.productId === productId)
    res.render('productModel/edit.ejs', { pModel })
});
app.patch('/productModel/:productId', (req, res) => {
    const { productId } = req.params;
    const newProductName = req.body.productName
    const newQtyPerUnit = req.body.qtyPerUnit
    const newUnitPrice = req.body.unitPrice
    const newUnitInStock = req.body.unitInStock
    const newDiscontinued = req.body.discontinued
    const newCategoryId = req.body.categoryId
    const foundProductModel = productModel.find(c => c.productId === productId);
    foundProductModel.productName = newProductName;
    foundProductModel.qtyPerUnit = newQtyPerUnit;
    foundProductModel.unitPrice = newUnitPrice;
    foundProductModel.unitInStock = newUnitInStock;
    foundProductModel.discontinued = newDiscontinued;
    foundProductModel.categoryId = newCategoryId;
    res.redirect("/productModel")
});
app.delete('/productModel/:productId', (req, res) => {
    const { productId } = req.params;
    productModel = productModel.filter(c => c.productId !== productId);
    res.redirect('/productModel')
})
const PORT = 5000;
app.listen(PORT, () =>
    console.log("Listening on Port 5000")
);