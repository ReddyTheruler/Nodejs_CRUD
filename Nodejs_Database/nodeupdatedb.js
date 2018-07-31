var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "",  
database: "nodefirstdb"  
});  
con.connect(function(err) {  
if (err) throw err;  
var sql = "UPDATE nodefirstdb SET city = 'Delhi' WHERE city = 'Highway 37'";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log(result.affectedRows + " record(s) updated");  
});  
});  