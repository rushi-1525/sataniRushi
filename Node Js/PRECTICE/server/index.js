const express=require("express");
const connection =require("./cofig/db");
const app=express();
const port=9000;

app.set("view engine", "ejs");
// app.use(express.urlencoded());

app.get("/",async(req,res)=>{

    
  res.render("ditels")
})

app.listen(port,(error)=>{
    if(error){
        console.log("server is not running");
        return;
    }
    connection();
    console.log(`Server is running on port ${port}`);
})