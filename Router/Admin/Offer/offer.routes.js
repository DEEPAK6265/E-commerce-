const express  =require("express");
const offer_router=express.Router();
const{get,post,update,destroy} =require("../../../controller/Admin/Offer/offer.controller")


offer_router.get("/offer",get)
offer_router.post("/offer",post)
offer_router.put("/offer/:Offer_id", update)
offer_router.delete("/offer/:Offer_id", destroy)

module.exports ={offer_router} 
