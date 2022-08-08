
const con = require("../../../model/model");


let get=("/offer", (req, res) => {
  const data = "SELECT * FROM offer";
  con.query(data, (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      res.send({ status: 200, response: result });
    }
  });
});
let post=("/offer", async (req, res) => {
  try {
    let data = req.body;
    const data1 = "INSERT INTO offer SET ?";
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage);
      }
      res.send({ status: 200, response: result });
    });
  } catch (err) {
    res.send(err.message);
  }
});

let update=("/offer/:Offer_id", (req, res) => {
  let data = [req.body, req.params.Offer_id];
  const data1 = "UPDATE offer SET ? WHERE Offer_id =?";
  con.query(data1, data, (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      res.send({ status: 200, response: result });
    }
  });
});
let destroy=("/offer/:Offer_id", (req, res) => {
  let data = [req.params.Offer_id];
  const data1 = "DELETE FROM offer WHERE Offer_id=?";
  con.query(data1, data, (err, result) => {
    if (err) {
      res.send(err.sqlMessage);
    } else {
      res.send({ status: 200, response: result });
    }
  });
});

module.exports={get, post, update, destroy}
