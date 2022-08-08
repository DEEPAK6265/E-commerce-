const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "newcart",
});

con.connect((err) => {
  if (err) {
    console.log(err.sqlMessage);
  } else {
    console.log("mysql connected");
  }
});
module.exports = con;
