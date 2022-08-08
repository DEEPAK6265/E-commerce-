const con =require("../../model/model")

let get= async(req,res)=>{
    const data ="SELECT * FROM user";
    await con.query(data,(err, result)=>{
        if(err){
            res.send(err.sqlMessage);
        } else{
            res.send({status:200, "response":result})
        }
    });
};

let post = async (req, res) => {
    let data =req.body
    const data1 ="INSERT INTO user SET ?";
    await con.query(data1,data,(err,result)=>{
        if(err){
            res.send(err.sqlMessage);
        }else{
            res.send({status:200, "response":result})
        }
    });
};

let update =(req,res)=>{
        let data = [req.body, req.params.user_id]
        const data1="UPDATE user SET ? WHERE user_id=?"
        con.query(data1,data,(err,result) => {
            if(err){
                res.send(err.sqlMessage)
            }else{
         res.send({status:200, "response":result })
            }
        })
    }

    let destroy = (req, res) => {
        let data = [req.params.Registartion_number]
        const data1 = "DELETE FROM user WHERE user_id=?";
        con.query(data1, data, (err, result) => {
          if (err) {
            res.send(err.sqlMessage)
          } else {
            res.send({ status: 200, "response": result })
          }
        })
      }
      
      module.exports = {get, post, update, destroy} 
