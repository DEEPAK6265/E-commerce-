const express =require("express")
const employ_routes=express.Router();
const {get,post,update,destroy}=require("../../../controller/Shop/Employee/employee")

employ_routes.get("/employ",get)
employ_routes.post("/employ",post)
employ_routes.put("/employ/:employ_id",update)
employ_routes.delete("/employ/:employ_id",destroy)


module.exports={employ_routes}