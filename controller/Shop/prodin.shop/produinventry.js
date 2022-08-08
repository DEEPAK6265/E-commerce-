const express =require("express");
const con =require("../../../model/model");


let get= async(req, res)=>{
    const data ="SELECT *FROM product_inventry"
    await con.query(data, (err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }
        else{
            res.send({status:200, "Response":result})
        }
    })
}
let post= async (req, res) => {
    try {
      let data = req.body;
      const data1 = "INSERT INTO product_inventry SET ?";
      await con.query(data1, data, (err, result) => {
        if (err) {
          return res.send(err.sqlMessage)
        } 
          res.send({ status: 200, "response": result })
        });
      }
      catch(err)
      {
        res.send(err.message)
      }
      }
  
  let update= (req, res) => {
    let data = [req.body, req.params.p_id]
    const data1 = "UPDATE product_inventry SET ? WHERE p_id =?"
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  }
  let destroy= async(req, res) => {
   try{
    let data = req.params.p_id
    const data1 = "DELETE FROM product_inventry WHERE p_id =?";
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      } 
        res.send({ status: 200, "Response": result })
      
    })}catch(err){
      res.send(err.sqlMessage)
    }
  };


module.exports={get,post,update,destroy}