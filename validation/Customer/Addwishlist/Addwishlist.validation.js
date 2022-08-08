const joi =require("joi");

const schema =joi.object({
 Product_id: joi.number(). integer().min(1).max(50).required(),
 Customer_mobile:joi.number().integer().min(1000000000).max(9999999999).message("Can not be less than 10 digit").required(),
 Additem: joi.string().min(2).max(50).message("").required(),
 Quantity: joi.number(). integer().min(1).max(50).required(),

 
 
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