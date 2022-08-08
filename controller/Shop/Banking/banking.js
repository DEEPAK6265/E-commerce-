const con = require("../../../model/model");




let get=async(req,res)=>{
    const data= "SELECT * FROM banking";
    await con.query(data,(err,result)=>{
        if (err){
            res.send(err.sqlMessage)
        } else{
            res.send({status:200, "response":result})
        }
    });
};

let post=async(req,res)=>{
    let data=req.body
    const data1="INSERT INTO banking SET?";
    await con.query(data1,data,(err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }else{
            res.send({status:200,"response":result})
        }
    });
};


let update=async(req,res)=>{
    let data=[req.body,req.params.Account_number]
    const data1="UPDATE banking SET ? WHERE Account_number=?"
    con.query(data1,data,(err,result)=>{
        if(err){
            res.send(err.sqlMessage)
        }else{
            res.send({status:200,"response":result})
        }
    })
}


let destroy = (req, res) => {
    let data = [req.params.Account_number]
    const data1 = "DELETE FROM banking WHERE Accoung_number=?";
    con.query(data1, data, (err, result) => {
      if (err) {
        res.send(err.sqlMessage)
      } else {
        res.send({ status: 200, "response": result })
      }
    })
  }
  
  module.exports = {get, post, update, destroy} 