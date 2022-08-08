const express =require("express");
const ship_routes=express.Router();
const {get,post,update,destroy}=require("../../controller/Shipping/shipping")
const{validate} =require("../../validation/Shipping/shiping.validation")

ship_routes.get("/shipping", get)
ship_routes.post("/shipping",validate, post)
ship_routes.put("/shipping/:ship_id",update)
ship_routes.delete("/shipping/:ship_id ", destroy)

module.exports={ship_routes}