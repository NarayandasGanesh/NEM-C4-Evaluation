const express = require("express");
const router = express.Router();
const {register, login} = require("../controller/auth");
const {getPosts, addPosts, updatePosts, deletePosts} = require("../controller/linkdin")
const requireLogin = require("../middlewares/requireLogin")



router.post("/register", register)
router.post("/",login)

router.use(requireLogin)
router.get("/", getPosts);
router.post("/addpost", addPosts);
router.patch("/updatepost/:id", updatePosts);
router.delete("/deletepost:id", deletePosts)


module.exports = router