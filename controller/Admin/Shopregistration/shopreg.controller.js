const { isBuffer } = require("util");
const con= require("../../../model/model")

let get = async (req, res) => {
  const data = "SELECT * FROM admin";
  await con.query(data, (err, result) => {
    if (err) {
      res.send(err.sqlMessage)
    } else {
      res.send({ status: 200, "response": result })
    }
  })
}
let post = async (req, res) => {
  try {
    let data = req.body;
    const data1 = "INSERT INTO admin SET ?";
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
  let data = [req.body, req.params.Registartion_number]
  const data1 = "UPDATE admin SET ? WHERE Registartion_number =?"
  con.query(data1, data, (err, result) => {
    if (err) {
      res.send(err.sqlMessage)
    } else {
      res.send({ status: 200, "response": result })
    }
  })
}

let destroy = (req, res) => {
  let data = [req.params.Registartion_number]
  const data1 = "DELETE FROM admin WHERE Registartion_number=?";
  con.query(data1, data, (err, result) => {
    if (err) {
      res.send(err.sqlMessage)
    } else {
      res.send({ status: 200, "response": result })
    }
  })
}

module.exports = {get, post, update, destroy}






