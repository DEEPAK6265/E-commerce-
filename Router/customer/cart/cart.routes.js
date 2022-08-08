const express =require("express");
const cart_router =express.Router();
const{get,post,update,destroy}=require("../../../controller/customer/Cart/cart.cus");
const{validate} =require("../../../validation/Customer/Cart/cart")



cart_router.get("/cart",get)
cart_router.post("/cart",post)
cart_router.put("/offer/:cart_id",update)
cart_router.delete("/offer/:cart_id", update)

module.exports ={cart_router}