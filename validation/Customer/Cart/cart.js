const joi =require("joi");

const schema =joi.object({
 cart_id: joi.number(). integer().min(1).max(50).required(),
 customer_id: joi.number(). integer().min(1).max(50).required(),
 Product_id: joi.number(). integer().min(1).max(50).required(),
 customer_mobile:joi.number().integer().min(1000000000).max(9999999999).message("Can not be less or greter than 10 digit").required(),
 quantity: joi.number(). integer().min(1).max(50).required(),
 price:joi.number(). integer().min(5).max(50).message("").required(),
 addedon: joi.date().min(5).max(50).message("").required(),
 payment_status:joi.string().min(100000).max(999999).message("Can not be less or greter than 6 digit").required(),
 
})

const validate = async(req, res, next) =>{
    const value = await schema.validate(req.body)
    if(value.error){
        res.send({error:value.error.details[0]})
    }else{
       next();
    }
}

module.exports= {validate}