const express =require("express");
const proinv_routes = express.Router();
const {get, post, update, destroy} = require("../../../controller/Shop/prodin.shop/produinventry")


proinv_routes.get("/proinv",get)
proinv_routes.post("/proinv",post)
proinv_routes.put("/proinv",update)
proinv_routes.delete("/proinv",destroy)

module.exports={proinv_routes}