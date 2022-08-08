const joi =require("joi");

const schema =joi.object({
 category_id: joi.number(). integer().min(1).max(50).required(),
 c_category_id: joi.number(). integer().min(1).max(50),
 c_category_name: joi.string().min(1).max(50).required()
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