
const con =require("../../../model/model");
const {validate} =require("../../../validation/Customer/customerregistration/customerregistration.validation")

let get= async (req, res)=>{
    const data ="SELECT *FROM customer_registration"
   await con.query(data, (err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }
        else{
            res.send({status:200, "respnose":rresult})
        }
    })
}
let post= async (req, res) => {
    try {
      let data = req.body;
      const data1 = "INSERT INTO mobile SET ?";
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
    let data = [req.body, req.params.registration_no]
    const data1 = "UPDATE admin SET ? WHERE Mobile =?"
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  }
  let destroy = (req, res) => {
    let data = [req.params.Mobile]
    const data1 = "DELETE FROM customer_registration WHERE Mobile =?";
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  }


module.exports = {get,post,update,destroy}