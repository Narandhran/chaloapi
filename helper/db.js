const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
    connectionLimit : dbConfig.CONNECTIONLIMIT,
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})
connection.getConnection(function(err) {
    if(err) throw err;
    console.log("Connected to MySQL!");
});

module.exports = connection;
