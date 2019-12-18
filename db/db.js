const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "note_takerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // afterConnection();
});

/**
  function afterConnection() {
    connection.query("SELECT * FROM notes", function(err, res) {
      if (err) throw err;
      // console.log(res);
      // connection.end();
    });
  }
  
*/
module.exports = connection;