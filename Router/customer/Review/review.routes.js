const express= require("express");
const review_router=express.Router();
const {get,post,update,destroy}=require("../../../controller/customer/Review/review.cus")
const {validate}= require("../../../validation/Customer/Review/Review.validation")

review_router.get("/review",get)
review_router.post("/review",validate,post)
review_router.put("/review/: Customer_id",update)
review_router.delete("/review/: Customer_id",destroy)

module.exports={review_router}

