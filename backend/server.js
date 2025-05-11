const express=require("express");
const { connectDB } = require("./config/connectionDb.js");
const app=express();
const dotenv=require("dotenv").config();
const cors=require("cors")

const PORT=process.env.PORT || 3000;
connectDB()
app.use(express.json())
app.use(cors())
app.use(express.static("public"))


app.use("/",require("./routes/user.js"))
app.use("/receipe",require("./routes/receipe.js"))

app.listen(PORT,(err)=>{
    console.log(`Server is listening on the port ${PORT}`);
})
