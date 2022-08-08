const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const port = 5050;

// admin crud opration
const {shopReg_routes} =require("../Backand/Router/Admin/Shopregistration/shopregistration.routes");
const{prodsubcat_routes} =require("../Backand/Router/Admin/Productsubcategory/productsubcategory.routes")
const{productcategory_routes}=require("../Backand/Router/Admin/Productcategory/productcategory.routes.js")
const {offer_router} =require("../Backand/Router/Admin/Offer/offer.routes")

app.use("/admin", shopReg_routes)
app.use("/subcategory", prodsubcat_routes)
app.use("/category", productcategory_routes)
app.use("/offer",offer_router)



/// Cutomer crud operation

const {addwish_router} =require("../Backand/Router/customer/addwishlist/addwishlist.routes")
const{cart_router}=require("../Backand/Router/customer/cart/cart.routes")
const{custreg_router}=require("../Backand/Router/customer/Customerregistration/customerregistration.routes")
const{makepay_router}= require("../Backand/Router/customer/Makepayment/makepayment.routes")
const{review_router}=require("../Backand/Router/customer/Review/review.routes");


app.use("/addwish", addwish_router)
app.use("/cart",cart_router)
app.use("/custreg",custreg_router)
app.use("/makepay",makepay_router)
app.use("/review",review_router)




//shipping crud operation

const{ship_routes}= require("../Backand/Router/Shipping/shipping.routes")

app.use("/shipping",ship_routes)

///Product spec 2

const{product_routes}=require("../Backand/Router/Shop/Productspecification.shop/productspec.routes")
 app.use("/product",product_routes)




  //Shop crud operation
const{prodspe_routes}=require("../Backand/Router/Shop/Productspecification.shop/productspecification.routes")
const{proinv_routes}=require("../Backand/Router/Shop/Productinventry.shop/Productinventry.routes")

const{banking_routes}=require("../Backand/Router/Shop/Banking/banking.routes")

const{employ_routes}=require("../Backand/Router/Shop/employ/employ.routes")

app.use("/prospe",prodspe_routes)
app.use("/proinv",proinv_routes)
app.use("/banking",banking_routes)
app.use("/employ",employ_routes)


/////user

const{user_routes}=require("../Backand/Router/user/user.routes")
app.use("/user",user_routes)





app.listen(port, (err) => {
  console.log(`server is connected port no http://localhost:${port}`);
})

