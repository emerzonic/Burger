mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db", 
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});


 module.exports = connection;