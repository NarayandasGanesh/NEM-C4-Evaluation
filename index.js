const express = require("express")
const app = express();
const cors = require("cors");
const dbConnection = require("./config/database");
const router = require("./routes/allRoutes");
const PORT = 4500;


app.use(cors())
app.use(express.json());
app.use("/", router)


app.get("/",(req,res)=>{
    res.send("Home Page")
} )


app.listen(PORT, async() => {
    try {
        await dbConnection
        console.log("Connected To DataBase");
        console.log(`port is running on ${PORT}`)
    } catch (error) {
        console.log(`error: ${error}`)
        console.log("Not Connected To DataBase")
    }
})