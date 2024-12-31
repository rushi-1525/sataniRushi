const express = require("express");
const recipemodel = require("../model/recipesmodel");
const commentmodel = require("../model/commentsmodel");
const myrecipesRouter=express.Router();


myrecipesRouter.get("/",async(req,res)=>{
    const recipe=await recipemodel.find({});

    res.render("myrecipes",{recipe})
})


myrecipesRouter.post("/myrecipesadd",async(req,res)=>{
    try{
      await commentmodel.create(req.body);
      console.log("myrecipe add");
    res.redirect("/myrecipe/recipelist")
  } catch (err) {
    console.log(err);
  }
});

myrecipesRouter.get("/recipelist", async (req, res) => {
    let getData = await commentmodel.find().populate("recipesId").exec();
   console.log(getData)
     res.render("recipelist",{getData})
   })
   


module.exports=myrecipesRouter;