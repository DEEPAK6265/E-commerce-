const express = require("express");
const prodsubcat_routes= express.Router();
const {get,post,update,destroy} =require("../../../controller/Admin/Productsubcategory/prodsubcate.controller")



prodsubcat_routes.get("/subcategory", get)
prodsubcat_routes.post("/subcategory", post)
prodsubcat_routes.put("/subcategory/:category_id", update);
prodsubcat_routes.delete("/subcategory/:category_id", destroy)

module.exports ={prodsubcat_routes}    