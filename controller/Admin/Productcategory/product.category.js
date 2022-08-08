
const con = require("../../../model/model");


let get=("/category", (req, res) => {
    const data= "SELECT * FROM product_categories";
     con.query(data, (err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }
        else{
            res.send({status:200, "response":result})
        }
    })  ;
});

let post =("/category",  async (req, res) => {
    try {
      let data = req.body;
      const data1 = "INSERT INTO product_categories SET ?";
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
  
  let update = ("/category/:category_id", (req, res) => {
    let data = [req.body, req.params.category_id]
    const data1 = "UPDATE product_categories SET ? WHERE category_id =?"
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  })
  let destroy=("/category/:category_id", (req, res) => {
    let data = [req.params.category_id]
    const data1 = "DELETE FROM product_categories WHERE category_id=?";
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  })
module.exports= {get, post, update, destroy}