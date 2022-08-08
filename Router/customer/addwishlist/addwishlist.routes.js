const express =require("express");
const addwish_router =express.Router();
const{get, post, update, destroy} =require("../../../controller/customer/Addwishlist/addwishlist.cus")
// const {validate} =require("../../../validation/Customer/Addwishlist/Addwishlist.validation")


addwish_router.get("/addwish", get)
addwish_router.post("/addwish",post)
addwish_router.put("/addwish/:Product_id", update)
addwish_router.delete("/addwish/:Product_id", destroy)



module.exports ={addwish_router}