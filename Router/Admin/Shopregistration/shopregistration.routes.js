const express = require("express");
const shopReg_routes = express.Router();
const {get, post, update, destroy} = require("../../../controller/Admin/Shopregistration/shopreg.controller")
// const {validate} = require("../../../validation/Admin/Sho")

shopReg_routes.get("/admin", get)
shopReg_routes.post("/admin", post)
shopReg_routes.put("/admin/:Registartion_number", update);
shopReg_routes.delete("/admin/:Registartion_number", destroy)

module.exports = {shopReg_routes}