
const con =require("../../../model/model");
const {validate}= require("../../../validation/Customer/Makepayment/MAkepayment.validation")

let get= async(req, res)=>{
    const data ="SELECT *FROM makepayment"
    await con.query(data, (err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }
        else{
            res.send({status:200, "respnose":result})
        }
    })
}
let post=("/makepay", async (req, res) => {
    try {
      let data = req.body;
      const data1 = "INSERT INTO makepayment SET ?";
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
      })
  
  let update= (req, res) => {
    let data = [req.body, req.params.Cart_id]
    const data1 = "UPDATE makepayment SET ? WHERE Cart_id =?"
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  }
  let destroy= (req, res) => {
    let data = [req.params.Cart_id]
    const data1 = "DELETE FROM makepayment WHERE cart_id =?";
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  }


module.exports={get,post,update,destroy}