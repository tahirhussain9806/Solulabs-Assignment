const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Product = require('./models/product')
mongoose.connect('mongodb://localhost:27017/product', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTING OPEN")
    })
    .catch(err => {
        console.log("ERROR")
        console.log(err)
    })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view  engine', 'ejs');


app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));



// let productModel = [{
//         productId: uuid(),
//         productName: "pen",
//         qtyPerUnit: 4,
//         unitPrice: 5,
//         unitInStock: 20,
//         discontinued: "NO",
//         categoryId: 123
//     },
//     {
//         productId: uuid(),
//         productName: "pencil",
//         qtyPerUnit: 6,
//         unitPrice: 3,
//         unitInStock: 50,
//         discontinued: "NO",
//         categoryId: 523
//     },
//     {
//         productId: uuid(),
//         productName: "pen-pencil",
//         qtyPerUnit: 10,
//         unitPrice: 25,
//         unitInStock: 200,
//         discontinued: "NO",
//         categoryId: 173
//     }
// ];
app.get('/productModel', async(req, res) => {
    const productModel = await Product.find({})
    console.log(productModel)
    res.render('productModel/index.ejs', { productModel })
});
app.get('/productModel/create', (req, res) => {
    res.render('productModel/createProductModel.ejs')
});
app.post('/productModel', async(req, res) => {
    const newProductModel = new Product(req.body)
    await newProductModel.save()
    res.redirect('/productModel')
});
app.get('/productModel/:id', async(req, res) => {
    const { id } = req.params;
    const productD = await Product.findById(id)
    console.log(productD)
    res.render('productModel/productDetails.ejs', { productD })
});
app.get('/productModel/:id/edit', async(req, res) => {
    const { id } = req.params;
    const productM = await Product.findById(id)
    res.render('productModel/edit.ejs', { productM })
});
app.put('/productModel/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/productModel/${product._id}`)
})

app.delete('/productModel/:id', async(req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id)
    res.redirect('/productModel')
})
const PORT = 5000;
app.listen(PORT, () =>
    console.log("Listening on Port 5000")
);