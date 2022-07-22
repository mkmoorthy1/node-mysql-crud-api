const mysql      = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'sa123',
    database : 'nodemysql1'
  });

connection.connect((error)=>{
    if(error) throw error;

    console.log("Database Connected Successfully...")

})

module.exports= connection;