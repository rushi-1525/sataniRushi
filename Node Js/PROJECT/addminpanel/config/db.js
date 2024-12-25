const { log } = require("console");
const mongoose=require("mongoose");

const conection=async()=>{
    
    await mongoose.connect("mongodb://localhost:27017/userDitels");
    console.log("dataBasd conected");
}

module.exports=conection;