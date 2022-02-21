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
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view  engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
// to display all product model(read all page).
app.get('/productModel', async(req, res) => {
    try {
        const { categoryName } = req.query;
        if (categoryName) {
            const productModel = await Product.find({ categoryName: categoryName })
            res.render('productModel/index.ejs', { productModel, categoryName })
        } else {
            const productModel = await Product.find({})
            res.render('productModel/index.ejs', { productModel, categoryName: "All" })
        }
    } catch (err) {
        res.send("Error" + err)
    }
});
//  form to create new product model.
app.get('/productModel/create', (req, res) => {
    try { res.render('productModel/createProductModel.ejs') } catch (err) {
        res.send("Error" + err)
    }
});
//create new form on server.
app.post('/productModel', async(req, res) => {
    try {
        const newProductModel = new Product(req.body)
        console.log(req.body)
        await newProductModel.save()
        res.redirect('/productModel')
    } catch (err) {
        res.send("Error" + err)
    }
});
// form to read a specific product model. 
app.get('/productModel/:id/read', async(req, res) => {
    try {
        const { id } = req.params;
        const productD = await Product.findById(id)
        console.log(productD)
        res.render('productModel/productDetails.ejs', { productD })
    } catch (err) {
        res.send("Error" + err)
    }
});
//form to  update a specific product model.
app.get('/productModel/:id/update', async(req, res) => {
    try {
        const { id } = req.params;
        const productM = await Product.findById(id)
        res.render('productModel/update.ejs', { productM })
    } catch (err) {
        res.send("Error" + err)
    }
});
//form to update specific field on server.
app.put('/productModel/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
        res.redirect(`/productModel`)
    } catch (err) {
        res.send("Error" + err)
    }
    // form to delete a specific product model
})
app.delete('/productModel/:id/delete', async(req, res) => {
        try {
            const { id } = req.params;
            const deletedProduct = await Product.findByIdAndDelete(id)
            res.redirect('/productModel')
        } catch (err) {
            res.send("Error" + err)
        }
    })
    //to bind and listen the connections on the specified host and port.
const PORT = 5000;
app.listen(PORT, () =>
    console.log("Listening on Port 5000")
);