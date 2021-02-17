// Author & Email: narandhran@gmail.com
// Purpose: Manage the webpush model and its functionalities.
// Date: 22 Dec 2020

const con = require("../helper/db.js");

// constructor
const WebPush = function (objPush) {
    this.endpoint = objPush.endpoint;
    this.expirationTime = objPush.expirationTime;
    this.p256dh = objPush.p256dh;
    this.auth = objPush.auth;
    this.customer_id = objPush.customer_id;
};


WebPush.create = (newPush, result) => {
    con.query("INSERT INTO tbl_webpush SET ?", newPush, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created new web subscription: ", { id: res.insertId, ...newPush });
        result(null, { id: res.insertId, ...newPush });
    });
};


WebPush.findById = (customer_id, result) => {
    var sql = `select * from tbl_webpush WHERE customer_id = ${customer_id}`

    con.query(sql, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

WebPush.updateById = (data, result) => {
    con.query(
        "UPDATE tbl_webpush SET endpoint = ?, p256dh = ?, auth = ? WHERE customer_id = ?",
        [data.endpoint, data.p256dh, data.auth, data.id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            result(null, res);
        }
    );
};
module.exports = WebPush;