// Author & Email: sysqua@hotmail.com
// Purpose: Manage the admin model and its functionalities.
// Date: 02 Sep 2020

const con = require("../helper/db.js");
const smsConfig = require("../config/sms.config");
var request = require("request");

// constructor
const Verification = function(objVerify) {
  this.user_type = objVerify.user_type;
  this.mobile_number = objVerify.mobile_number;
  this.otp = objVerify.otp;
  this.sent_timestamp = objVerify.sent_timestamp;
  this.expired = objVerify.expired;
  this.verified = objVerify.verified;
};

Verification.createOTP = (objVerify, result) => {
  con.query("INSERT INTO tbl_otp SET ?", objVerify, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("otp generated: ", { id: res.insertId, ...objVerify });
    result(null, { id: res.insertId, ...objVerify });
  });
};

Verification.sendSMS = (number, otp, result) => {
  var msg = otp + " is the otp for okChalo reigstration";
  var uri = smsConfig.URL + "uname="+ smsConfig.USERNAME + "&password="+ smsConfig.PASSWORD +"&sender=TRAKID&receiver="+ number + "&route=TA&msgtype=1&sms=" + msg
  console.log(uri);
  request(uri, function(error, response, body) {
    console.log(body);
  });
};

Verification.updateById = (id, mod_verify, result) => {
  con.query(
    "UPDATE tbl_otp SET verified = ? WHERE otp_id = ?",
    [mod_verify.verified, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found otp details with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("otp verified: ", { id: id, ...mod_verify });
      result(null, { id: id, ...mod_verify });
    }
  );
};


Verification.verifyPIN = (ride_id, pin_number, result) => {
  var sql = `SELECT ride_id, confirm_otp from tbl_rides where ride_id = ${ride_id}`

  con.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      var confirm_otp = res[0].confirm_otp;
      if(confirm_otp == pin_number){
        console.log("Ride PIN is confirmed!: ", res[0]);
        con.query(
          "UPDATE tbl_rides SET otp_verified = ? WHERE ride_id = ?",
          [1, ride_id],
          (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }
      
            if (res.affectedRows == 0) {
              // not found otp details with the id
              result({ kind: "not_found" }, null);
              return;
            }
            console.log("Ride PIN is confirmed! ", { ride_id: ride_id});
            result(null, "confirmed");
          }
        );
        return;
      } else {
        console.log("Ride PIN is incorrect!: ", ride_id);
        result(null, "incorrect");
        return;
      }
    }
    result({ kind: "not_found" }, null);
  });  
};


module.exports = Verification;