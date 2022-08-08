
const con =require("../../../model/model");


let get= async (req, res)=>{
    const data ="SELECT *FROM cart"
   await con.query(data, (err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }
        else{
            res.send({status:200, "respnose":result})
        }
    })
}
let post = async (req, res) => {
    try {
      let data = req.body;
      const data1 = "INSERT INTO cart SET ?";
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
    let data = [req.body, req.params.cart_id]
    const data1 = "UPDATE admin SET ? WHERE cart_id =?"
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  }
  let destroy= (req, res) => {
    let data = [req.params.cart_id]
    const data1 = "DELETE FROM cart WHERE cart_id =?";
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  }


module.exports={get, post, update, destroy}