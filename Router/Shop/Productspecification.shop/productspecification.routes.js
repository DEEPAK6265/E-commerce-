const express =require("express")
const prodspe_routes=express.Router();
const{get,post,update,destroy}=require("../../../controller/Shop/prodspeci.shop/prodspecification")

prodspe_routes.get("/prospe",get)
prodspe_routes.post("/prospe",post)
prodspe_routes.put("/prospe/:product_id",update)
prodspe_routes.delete("/prospe/:product_id",destroy)


module.exports={prodspe_routes}