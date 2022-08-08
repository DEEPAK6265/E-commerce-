
const con =require("../../../model/model");



let get= async (req, res)=>{
    const data ="SELECT *FROM addwish_list"
    await con.query(data, (err, result)=>{
        if(err){
            res.send(err.sqlMessage)
        }
        else{
            res.send({status:200, "respnose":result})
        }
    })
}
let post= async (req, res) => {
    try {
      let data = req.body;
      const data1 = "INSERT INTO addwish_list SET ?";
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
  
  let update = (req, res) => {
    let data = [req.body, req.params.Product_id]
    const data1 = "UPDATE addwish_list SET ? WHERE Product_id =?"
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  }
  let destroy=("/addwish/:Product_id", (req, res) => {
    let data = [req.params.Product_id]
    const data1 = "DELETE FROM addwish_list WHERE Product_id =?";
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  })


module.exports={get, post, update, destroy}