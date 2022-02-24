const express = require("express");
const router = new express.Router();
const ProductModel = require("../models/productModels")

// defining the router
router.get("/api", (req, res) => {
        res.send("SOLU LABS CRUD ASSIGNMENT!")
    })
    //      create a new product model
router.post("/create", async(req, res) => {
        try {
            const productresult = new ProductModel(req.body)
            const createProduct = await productresult.save()
            res.status(201).send(createProduct)
        } catch (e) {
            res.status(400).send("ERROR " + e)
        }
    })
    //      reads a all product model
router.get("/readAll", async(req, res) => {
        try {
            const foundAllProduct = await ProductModel.find()
            res.send(foundAllProduct)
        } catch (e) {
            res.status(400).send("ERROR " + e)
        }
    })
    //      reads particular product model
router.get("/read/:id", async(req, res) => {
        //finding product detail by _id (auto generated id by mongo)
        try {
            const _id = req.params.id;
            const productModelData = await ProductModel.findById(_id)
            console.log(productModelData)
            if (!productModelData) {
                return res.status(404).send()
            } else {
                res.send(productModelData)
            }
        } catch (e) {
            res.status(500).send("ERROR " + e)
        }
    })
    //      updates the product model
router.patch("/update/:id", async(req, res) => {
        //      finding product detail by _id (auto generated id by mongo)
        try {
            const _id = req.params.id;
            const updatedProductModel = await ProductModel.findByIdAndUpdate(_id, req.body, { new: true });
            res.send(updatedProductModel)
        } catch (e) {
            res.status(400).send("ERROR " + e)
        }
    })
    //      deletes particular product model data
router.delete("/delete/:id", async(req, res) => {
    //      deleting Particular product model data by _id (auto generated id by mongo)
    try {
        const deletedData = await ProductModel.findByIdAndDelete(req.params.id, { new: true })
        if (!req.params.id) {
            return res.status(400).send()
        } else {
            res.send(deletedData)
        }
    } catch (e) {
        res.status(500).send("ERROR " + e)
    }
})
module.exports = router;