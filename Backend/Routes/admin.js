const { Router } = require("express")
const adminRouter = Router();

adminRouter.post("/signup", function(req, res){
    res.json({
        message: "admin sign up endpoint"
    })
})

adminRouter.post("./signin", function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

adminRouter.post("./game/add",function(req,res){
    res.json({
        message: "add new game endpoint"
    })
})

adminRouter.put("./game/alter",function(req,res){
    res.json({
        message: "change existing game endpoint"
    })
})

adminRouter.get("./game/all",function(req,res){
    res.json({
        message: "all games endpoint"
    })
})
module.exports={
    adminRouter:adminRouter
}