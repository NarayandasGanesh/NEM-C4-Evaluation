const mongoose = require("mongoose");

// schema
const linkdinSchema = mongoose.Schema({
    title : String,
    body : String,
    device : String,
    no_if_comments : Number
})

// model 
const linkdinModel = mongoose.model("user",linkdinSchema);

module.exports={
    linkdinModel
}