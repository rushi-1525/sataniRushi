const mongoose=require("mongoose");

const commentshema=mongoose.Schema({
    recipesId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "recipe",
      },
    myrecipes:{
        type: String,
        required: true,
    },
    
});

const commentmodel=mongoose.model("comment",commentshema);

module.exports=commentmodel;