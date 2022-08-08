const joi =require("joi");

const schema =joi.object({
 c_mobile:joi.number().integer().min(1000000000).max(9999999999).message("Can not be less than 10 digit").required(),
 Email:joi.string().min(5).max(50).message("").required(),
 Name: joi.string().min(2).max(50).message("").required(),
 Gender:joi.string().min(1).max(1).message("").required(),
 Address: joi.string().min(5).max(50).message("").required(),
 City:joi.string().min(5).max(50).message("").required(),
 Pin:joi.number().integer().min(100000).max(999999).message
 ("Can not be less or greter than 6 digit").required(),
 state:joi.string().min(5).max(50).message("").required(),
Password:joi.string().min(2).max(50).message("").required(),

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