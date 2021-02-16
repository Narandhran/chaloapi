// Author & Email: sysqua@hotmail.com
// Purpose: Manage the customers model and its functionalities.
// Date: 15 Sep 2020

const con = require("../helper/db.js");
const smsConfig = require("../config/sms.config");
var request = require("request");

// constructor
const Ride = function (objRide) {
  this.requested_datetime = objRide.requested_datetime;
  this.customer_id = objRide.customer_id;
  this.pickup_address = objRide.pickup_address;
  this.pickup_gps = objRide.pickup_gps;
  this.drop_address = objRide.drop_address;
  this.drop_gps = objRide.drop_gps;
  this.ride_start_time = objRide.ride_start_time;
  this.ride_end_time = objRide.ride_end_time;
  this.status_id = objRide.status_id;
  this.driver_id = objRide.driver_id;
  this.booking_number = objRide.booking_number;
  this.pickup_lat = objRide.pickup_lat;
  this.pickup_lng = objRide.pickup_lng;
  this.drop_lat = objRide.drop_lat;
  this.drop_lng = objRide.drop_lng;
  // this.confirm_otp = objRide.confirm_otp;
  this.tip = objRide.tip;
};

// Create a new request on the db when a users creates.
Ride.create = (newRide, result) => {
  con.query("INSERT INTO tbl_rides SET ?", newRide, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created new request : ", { id: res.insertId, ...newRide });
    result(null, { id: res.insertId, ...newRide });
  });
};


Ride.pasengerAccept = (req, result) => {

  con.query(
    "UPDATE tbl_rides SET passenger_accept = ?, driver_id =? WHERE ride_id = ?",
    [1, req.body.customer_id, req.body.ride_id],
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
      req.body.pasengerAccept = true;
      result(null, { ...req.body });
    }
  );
}

Ride.status_list = result => {
  con.query("SELECT * FROM tbl_status", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("status: ", res);
    result(null, res);
  });
};


// Get all the requested rides with status id = 1 (Requested)
Ride.get_all_requests = result => {
  var sql = `SELECT r.ride_id, r.requested_datetime, r.customer_id, c.first_name, c.last_name, c.gender,c.mobile_number,c.city,r.pickup_address,r.pickup_gps,r.drop_address,r.drop_gps,r.status_id,s.status FROM tbl_rides r  JOIN tbl_customers c USING (customer_id) INNER JOIN tbl_status s USING (status_id) where status_id = 1`

  con.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("open rides: ", res);
    result(null, res);
  });
};

// incomplete
Ride.get_all_rides = result => {
  var sql = `SELECT r.ride_id, r.requested_datetime, r.customer_id, c.first_name, c.last_name, c.gender,c.mobile_number,c.city,r.pickup_address,r.pickup_gps,r.drop_address,r.drop_gps, r.ride_start_time,r.ride_end_time, r.status_id,s.status, d.first_name ``driver_fname``, d.last_name ``driver_lname``, d.mobile_number ``driver_mobile``, d.gender ``driver_gender`` FROM tbl_rides r  JOIN tbl_customers c USING (customer_id) INNER JOIN tbl_drivers d USING(driver_id) INNER JOIN tbl_status s USING (status_id)`
  con.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("open rides: ", res);
    result(null, res);
  });
};

Ride.rideById = (ride_id, result) => {
  var sql = `SELECT r.ride_id, r.requested_datetime, r.customer_id, c.first_name, c.last_name, c.gender,c.mobile_number,c.city,r.pickup_address,r.pickup_gps,r.drop_address,r.drop_gps, r.ride_start_time,r.ride_end_time, r.status_id,s.status, d.first_name driver_fname, d.last_name driver_lname, d.mobile_number driver_mobile, d.gender driver_gender FROM tbl_rides r  JOIN tbl_customers c USING (customer_id) INNER JOIN tbl_drivers d USING(driver_id) INNER JOIN tbl_status s USING (status_id) where r.ride_id = ${ride_id}`

  con.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found the ride: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found ride with the id
    result({ kind: "not_found" }, null);
  });
};



Ride.rideByGPS = (driver_lat, driver_lng, driver_radius, result) => {
  var sql = `SELECT r.ride_id, r.requested_datetime, r.customer_id, c.first_name, c.last_name, 
    c.gender,c.mobile_number,c.city,
    r.pickup_address,r.pickup_gps,r.pickup_lat, r.pickup_lng, 
    r.drop_address,r.drop_gps, r.drop_lat, r.drop_lng,r.status_id,s.status, 
    lat_lng_distance(r.pickup_lat,r.pickup_lng, ${driver_lat}, ${driver_lng}) distance,
    r.driver_accept, r.passenger_accept
    FROM tbl_rides r  JOIN tbl_customers c USING (customer_id) INNER JOIN tbl_status s USING (status_id) 
    where status_id = 1 and lat_lng_distance(pickup_lat,pickup_lng,${driver_lat}, ${driver_lng}) < ${driver_radius}/1000;`;

  con.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("open rides: ", res);
    result(null, res);
  });
};


Ride.getAll = result => {
  con.query("SELECT * FROM tbl_rides", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("open rides: ", res);
    result(null, res);
  });
};

Ride.driver_accept = (id, objConfirm, result) => {

  con.query(
    "UPDATE tbl_rides SET driver_accept = ?, driver_id =? WHERE ride_id = ?",
    [objConfirm.driver_accept, objConfirm.driver_id, id],
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
      objConfirm.driver_accept = true;
      result(null, { id: id, ...objConfirm });
    }
  );
}

Ride.confirm_booking = (id, confirm_otp, objConfirm, result) => {
  var b_number = "BN-" + id;
  objConfirm.confirm_otp = confirm_otp;
  con.query(
    "UPDATE tbl_rides SET status_id = ?, driver_id =?, booking_number = ?, confirm_otp = ? WHERE ride_id = ?",
    [objConfirm.status_id, objConfirm.driver_id, b_number, confirm_otp, id],
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

      console.log("Your booking is confirmed: ", { id: id, confirm_otp, ...objConfirm });
      console.log(sendConfirmationSMS(id, confirm_otp));
      result(null, { id: id, confirm_otp, ...objConfirm });
    }
  );
};

sendConfirmationSMS = (ride_id, confirm_otp, result) => {
  var sql = `SELECT r.ride_id, r.booking_number, r.requested_datetime, r.customer_id, c.first_name, c.mobile_number, 
    d.first_name driver_fname, d.mobile_number driver_mobile FROM tbl_rides r  
    JOIN tbl_customers c USING (customer_id) INNER JOIN tbl_drivers d USING(driver_id) 
    INNER JOIN tbl_status s USING (status_id) where ride_id = ${ride_id}`
  con.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found the ride: ", res[0]);
      var booking_number = res[0].booking_number;
      var driver_mobile = res[0].driver_mobile;
      var customer_number = res[0].mobile_number;
      var first_name = '';
      var driver_name = '';
      if (res[0].first_name != '') {
        first_name = res[0].first_name;
      }
      if (res[0].first_name != '') {
        driver_name = res[0].driver_fname;
      }

      var customer_msg = "Dear Customer, " + confirm_otp + " is the PIN for your confirmed ride " + booking_number;
      var driver_msg = "Dear Driver, " + confirm_otp + " is the PIN for your confirmed ride " + booking_number;

      console.log("send otp to driver");
      sendSMS(customer_number, customer_msg);
      //console.log("send otp to customer");
      //sendSMS(driver_mobile,driver_msg);
      //result(null, res[0]);
      return;
    }

    // not found ride with the id
    result({ kind: "not_found" }, null);
  });
};

// Ride.sendSMS = (number, otp, result) => {
//   var msg = otp + " is the otp for okChalo reigstration";
//   var uri = smsConfig.URL + "uname="+ smsConfig.USERNAME + "&password="+ smsConfig.PASSWORD +"&sender=TRAKID&receiver="+ number + "&route=TA&msgtype=1&sms=" + msg
//   console.log(uri);
//   request(uri, function(error, response, body) {
//     console.log(body);
//   });
// };

sendSMS = (number, msg, result) => {
  var uri = smsConfig.URL + "uname=" + smsConfig.USERNAME + "&password=" + smsConfig.PASSWORD + "&sender=TRAKID&receiver=" + number + "&route=TA&msgtype=1&sms=" + msg
  console.log(uri);
  request(uri, function (error, response, body) {
    console.log(body);
  });
};


module.exports = Ride;
