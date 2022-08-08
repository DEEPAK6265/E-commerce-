const express =require("express");
const custreg_router=express.Router()
const{get,post,update,destroy}=require("../../../controller/customer/customerregistration/cust.reg")
const {validate} =require("../../../validation/Customer/customerregistration/customerregistration.validation")

custreg_router.get("/custreg",get)
custreg_router.post("/custreg",post)
custreg_router.put("/custreg/:Mobile",update)
custreg_router.delete("/custreg:Mobile",destroy)

module.exports={custreg_router}