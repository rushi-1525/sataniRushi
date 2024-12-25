const mongoose=require("mongoose");

const userShcema=mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
    },
    password:{
        type: String,
        require:true,
    },
});

const userId=mongoose. model("userId",userShcema);
module.exports=userId;