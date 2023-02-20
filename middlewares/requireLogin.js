const jwt = require("jsonwebtoken")
const UserModel = require("../model/auth")

const requireLogin = (req, res, next) => {
    const {authorization} = req.headers
    if(!authorization){
        return req.status(401).json({error: "Not Authorized"})
    }
    else{
        const token = authorization.replace("Bearer", "");
        jwt.verify(token, "linkedin_app", (err, data) => {
            if(err){
                console.log(err);
                return res.json({error: "You must have login user id"})
            }
            else{
                const {_id} = data
                UserModel.findById(_id).then(userData => {
                    req.user = userData
                    next();
                })
            }
        })
    }
}

module.exports = requireLogin