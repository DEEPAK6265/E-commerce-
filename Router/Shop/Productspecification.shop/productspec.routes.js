const express =require("express");
const product_routes=express.Router();
const{get}=require("../../../controller/Shop/prodspeci.shop/productspec")

product_routes.get("/product",get)

module.exports={product_routes}