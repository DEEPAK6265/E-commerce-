
const con =require("../../../model/model");


let get= async(req, res)=>{
    const data ="SELECT *FROM product_spec"
    await con.query(data, (err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }
        else{
            res.send({status:200, "response":result})
        }
    })
}

let post=async (req, res) => {
    try {
      
      let data = req.body;
      const data1 = "INSERT INTO product_spec SET ?";
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
  
  let update=(req, res) => {
    let data = [req.body, req.params.product_id]
    const data1 = "UPDATE product_spec SET ? WHERE product_id =?"
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  }
  let destroy= (req, res) => {
    let data = [req.params.product_id]
    const data1 = "DELETE FROM product_spec WHERE product_id =?";
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  }


module.exports={get,post,update,destroy}