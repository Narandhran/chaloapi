// Author & Email: narandhrant@outlook.com
// Purpose: storing browser tokens for push notifications.
// Date: 09 Mar 2021

const con = require("../helper/db.js");
var request = require("request");

// constructor
const Token = function (objVerify) {
    this.token = objVerify.token;
    this.user_id = objVerify.user_id;
    this.type = objVerify.type;
};

Token.createTkn = (objVerify, result) => {
    con.query("INSERT INTO tbl_token SET ?", objVerify, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("token created: ", { id: res.insertId, ...objVerify });
        result(null, { id: res.insertId, ...objVerify });
    });
};

Token.findByUserId = (user_id, result) => {
    var sql = `select * from tbl_token WHERE user_id = ${user_id}`

    con.query(sql, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
}

Token.updateByUserId = (data, result) => {
    console.log('token: ' + data.token + ' ' + 'user_id: ' + data.user_id);
    con.query(
        "UPDATE tbl_token SET token = ? WHERE user_id = ?",
        [data.token, data.user_id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            result(null, res);
        }
    );
}

Token.findDriverTokens = (result) => {
    let type = 'driver';
    var sql = `select token from tbl_token WHERE type = '${type}'`

    con.query(sql, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
}

Token.findPassengerTokens = (result) => {
    let type = 'passenger';
    var sql = `select token from tbl_token WHERE type = '${type}'`

    con.query(sql, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
}
module.exports = Token;