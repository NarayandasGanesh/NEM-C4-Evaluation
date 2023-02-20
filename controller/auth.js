const bcrypt = require("bcrypt")
const UserModel = require("../model/auth")
const jwt = require("jsonwebtoken");

// registration 
const register = (req, res) => {
    const {name, email, gender, password, age, city} = req.body;
    bcrypt.hash(password, 8, (err, secured_password)=>{
        if(err){
            console.log(err)
        }else{
            try {
                const userData  = UserModel({name, email, gender, password: secured_password, age, city})
                userData.save()
                console.log("Sucessfully Registered")
                res.json({message: "sucessfully Registered"})
            } catch (error) {
                console.log(`error: ${error}`)
                res.json({error: "Something Went Wrong"})
            }
        }
    })
}


// login 
const login = (req, res) => {
    const {email, password} = req.body
    UserModel.find({email, password}).then(userData =>{
        if(!userData){
            res.json({error: "Oops you are not registered"})
        }else{
            bcrypt.compare(password, userData[0].password,(err, matched_password)=>{
                if(!matched_password){
                    console.log(err)
                    res.json({message: "Password is not matched"})
                }else{
                    const token = jwt.sign(password, "linkedin_app");
                    res.json({"message": "Sucessfully Logged In", token})
                    console.log("Sucessfully logged in")
                }
            })
        }
    })
}


module.exports={
    register,
    login
}