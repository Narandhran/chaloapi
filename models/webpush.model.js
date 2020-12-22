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

module.exports = WebPush;