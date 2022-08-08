const joi =require('joi')
const schema =joi.object({
 Offer_id: joi.string().required(),
 Coupuncode: joi.string().required(),
 From_date: joi.string().required(),
 To_date: joi.string().required(),
 Discount_percentage:joi.string().required(),
 Flat_off:joi.string().required(),
 Validity:joi.string().required(),
 Bank_offer:joi.string().required()
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