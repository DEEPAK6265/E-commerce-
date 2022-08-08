const express = require("express");
const productcategory_routes= express.Router();
const {get, post, update, destroy}= require("../../../controller/Admin/Productcategory/product.category")



productcategory_routes.get("/category", get)
productcategory_routes.post("/category", post)
productcategory_routes.put("/category/:category_id", update)
productcategory_routes.delete("/category/:category_id", destroy)

module.exports={productcategory_routes}

