var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodefirstdb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM nodefirstdb LIMIT 2";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});