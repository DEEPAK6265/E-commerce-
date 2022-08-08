const express = require("express")
const user_routes=express.Router();
const{get,post,update,destroy}=require("../../controller/user/user")

user_routes.get("/user",get)
user_routes.post("/user",post)
user_routes.put("/user/:user_id",update)
user_routes.delete("/user/:user_id",destroy)

module.exports={user_routes}