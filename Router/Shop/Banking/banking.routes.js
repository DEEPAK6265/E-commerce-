const express =require("express");
const banking_routes=express.Router();
const{get,post,update,destroy}=require("../../../controller/Shop/Banking/banking")


banking_routes.get("/banking",get)
banking_routes.post("/banking",post)
banking_routes.put("/banking/:Account_number",update)
banking_routes.delete("/banking/:Account_number",destroy)

module.exports={banking_routes}
