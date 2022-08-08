// const con = require("express");
const con =require("../../../model/model")

let get =async(req, res)=>{
    
        const data ="SELECT * FROM product_spec WHERE product_id='1'";
        await con.query(data,(err,result)=>{
            if(err){
            res.send(err.sqlMessage)
            }
            else{
            res.send({status:200, "response": result})}
        })
        }
        module.exports ={get}
        
    
