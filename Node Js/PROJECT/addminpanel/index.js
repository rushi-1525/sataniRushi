const express=require("express");
const conection = require("./config/db");
const userId = require("./model/userData");
const path=require("path");

const app=express();
const port=8000;

app.set("view engine","ejs");
app.use(express.urlencoded({extended : true}));


app.get("/",(req,res)=>{
    res.render("login")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.get("/home",(req,res)=>{
    res.render("home")
})
app.post("/signup",async(req,res)=>{
const data={
    name : req.body.name,
    email : req.body.email,
    password : req.body.password,
}
await userId.insertMany([data]);

        res.render("login")
})

app.post("/login",async(req,res)=>{
 try {
    const chek= await userId.findOne({name : req.body.name})
    if(chek.password=== req.body.password){
        res.render("home")

    }else{
        console.log("wrong password");
    }
 } catch (error) {
    
    console.log("wrong ditels");
    return;
 }
    
    })
    



app.listen(port,()=>{
    console.log("server start");
    conection();
})