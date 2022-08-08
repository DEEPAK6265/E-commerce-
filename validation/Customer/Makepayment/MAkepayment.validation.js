const joi =require("joi");

const schema =joi.object({
 Cart_id: joi.number(). integer().min(1).max(50).required(),
 Tran_id: joi.number(). integer().min(1).max(50).required(),
 Date: joi.number().integer().message("").required(),
 Time: joi.number(). integer().min(1).max(50).required(),
 Amount:joi.number(). integer().min(1).max(50).required(),
 Gst:joi.string().min(5).max(50).message("").required(),
 payment_mode:joi.string().min(5).max(50).message("").required(),
Status:joi.string().min(5).max(50).message("").required(),
Invoice:joi.string().min(5).max(50).message("").required(),

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