const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/REST-api", {
    // for deprication warnings
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log("connection is successful");
}).catch((e) => {
    console.log(e)
})