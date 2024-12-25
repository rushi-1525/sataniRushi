const express=require("express");
const connection =require("./cofig/db");
// const path=require("path")
// const UserModel = require("./model/userModel");



const app=express();
const port=9000;

app.set("view engine", "ejs");
// app.use(express.urlencoded());

app.get("/", async (req, res) => {

  // const userData = await UserModel.find({});
  res.render();
});
// app.post("/bookadd", async(req,res)=>{

//   await UserModel.create(req.body);

//    res.redirect("back");

// })

app.listen(port,(error)=>{
    if(error){
        console.log("server is not running");
        return;
    }
    connection();
    console.log(`Server is running on port ${port}`);
})