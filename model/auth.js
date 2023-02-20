const mongoose = require("mongoose");

// schema
const userSchema = mongoose.Schema({
    name : String,
    email : String,
    gender : String,
    password : String,
    age : Number,
    city : String
})

// model 
const UserModel = mongoose.model("user",userSchema);

module.exports={
    UserModel
}