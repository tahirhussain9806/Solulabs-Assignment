const express = require("express");
require("./db/connection")
const productModelRouter = require("./routers/productModel")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()) //to get the data in a JSON format
app.use(productModelRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})