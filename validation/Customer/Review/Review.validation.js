const joi =require("joi");

const schema =joi.object({
 Customer_id: joi.number(). integer().min(1).max(50).required(),
 Review_id: joi.number(). integer().min(1).max(50).required(),
 Date: joi.number().integer().message("").required(),
 Message: joi.string().min(1).max(50).message("").required(),
 Time: joi.number(). integer().min(1).max(50).required(),

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