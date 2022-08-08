// const joi =require("joi");

// const schema =joi.object({
//  Registartion_number: joi.number(). integer().min(1).max(50).required(),
//  shop_id: joi.number(). integer().min(1).max(50).required(),
//  Shop_name: joi.string().min(2).max(50).message("").required(),
//  Address: joi.string().min(5).max(50).message("").required(),
//  City:joi.string().min(5).max(50).message("").required(),
//  state:joi.string().min(5).max(50).message("").required(),
//  Pin:joi.number().integer().min(100000).max(999999).message("Can not be less than 6 digit").required(),
//  Contact:joi.number().integer().min(1000000000).max(9999999999).message("Can not be less than 10 digit").required(),
//  Owner:joi.string().min(2).max(50).message("").required(),
// //  type:joi.valid("Electronics","Grocery","Stationary","Cloth","Furniture","General_store"),
// Email:joi.string().min(5).max(50).message("").required(),
// Url:joi.string().min(5).max(50).message("").required(),
// Gst:joi.string().min(5).max(50).message("").required(),
// Turnover:joi.number().integer().min(2).max(50).message("").required(),
// Description:joi.string().min(5).max(50).message("").required(),
// Term_condition:joi.string().min(5).max(50).message("").required(),
// Password:joi.string().min(2).max(50).message("").required(),
// Status:joi.valid("Activated","Pending")
// })
// const validate = async(req, res, next) =>{
//     const value = await schema.validate(req.body)
//     if(value.error){
//         res.send({error:value.error.details[0]})
//     }else{
//        next();
//     }
// }

// module.exports= {validate}