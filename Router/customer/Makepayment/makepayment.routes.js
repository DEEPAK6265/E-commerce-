const express =require("express")
const makepay_router = express.Router();
const{get,post,update,destroy}=require("../../../controller/customer/Makepayment/makepay.cus")
const {validate}= require("../../../validation/Customer/Makepayment/MAkepayment.validation")

makepay_router.get("/makepay",get)
makepay_router.post("/makepay",post)
makepay_router.put("/makepay/:Cart_id",get)
makepay_router.delete("/makepay/:Cart_id",get)


module.exports ={makepay_router};