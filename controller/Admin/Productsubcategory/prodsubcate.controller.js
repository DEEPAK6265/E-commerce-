

// const con = require("../../../model/model");
const con =require("../../../model/model")

let get = async(req, res) => {
  const data = "SELECT * FROM product_subcategory";
   await con.query(data, (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      res.send({ status: 200, "response": result })
    }
  });
};


let post =  async(req, res) => {
    try{
        let data= req.body;
        const data1= "INSERT INTO product_subcategory SET ?";
        await con.query(data1, data, (err,result) =>{
            if(err){
               return res.send(err.sqlMessage)
            }
            res.send({status:200, "response": result})
        })
    }
   catch(err)
   {
    res.send(sqlMessage)
   }
}

let update =("/subcategory/:category_id", (req, res) => {
    let data = [req.body, req.params.category_id]
    const data1 = "UPDATE  product_subcategory SET ? WHERE category_id =?"
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  })
  let destroy=("/subcategory/:category_id", (req, res) => {
    let data = [req.params.category_id]
    const data1 = "DELETE FROM product_subcategory WHERE category_id=?";
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  })
module.exports= {get ,post, update, destroy}