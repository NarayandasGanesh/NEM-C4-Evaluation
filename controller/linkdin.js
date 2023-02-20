const { json } = require("express");
const linkdinModel = require("../model/linkdin");

// get 
const getPosts = async(req, res)=>{
    try {
        const allPosts = await linkdinModel.find();
        console.log("All Posts")
        res.json(allPosts)
    } catch (error) {
        console.log(error)
        res.json({error:"Something Went Wrong"})
    }
}

//add 
const addPosts = async (req, res) => {
    const payload = req.body

    try {
        const data = await linkdinModel(payload)
        await data.save()
        console.log("Post Added Sucessfully")
        res.json({message: "Sucessfully post added"})
    } catch (error) {
        console.log(error);
        res.json({error:"Post is not added"})
    }
}

//update
const updatePosts = async (req, res) => {
    const payload = req.body
    const {_id} = req.params
    try {
        await linkdinModel.findByIdAndUpdate({_id})
        console.log("Post updated Sucessfully")
        res.json({message: "Sucessfully updated added"})
    } catch (error) {
        console.log(error);
        res.json({error:"Post is not updated"})
    }
}


//delete
const deletePosts = async (req, res) => {
    const {_id} = req.params
    try {
        await linkdinModel.findByIdAndDelete({_id})
        console.log("Post deleted Sucessfully")
        res.json({message: "Sucessfully deleted added"})
    } catch (error) {
        console.log(error);
        res.json({error:"Post is not deleted"})
    }
}


module.exports={getPosts, addPosts,updatePosts,deletePosts};
