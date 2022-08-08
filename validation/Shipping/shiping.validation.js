const joi =require("joi");

const schema =joi.object({
 ship_id:joi.number().integer().min(1).max(10).message("").required(),
 invoice:joi.number().integer().min(5).max(50).message("").required(),
 c_mobile:joi.number().integer().min(1000000000).max(9999999999).message("Can not be less than 10 digit").required(), Name: joi.string().min(2).max(50).message("").required(),
 ship_date:joi.date().min().max().message("").required(),
 delivery_date: joi.date().min().max().message("").required(),
 status:joi.string().min(5).max(50).message("").required(),
 
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