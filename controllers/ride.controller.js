// Author & Email: sysqua@hotmail.com
// Purpose: Manage the rides controller and its functionalities.
// Date: 15 Sep 2020

const Ride = require("../models/ride.model.js");
const Rides = require("../models/ride.model.js");
const Token = require("../models/token.model.js");
let FCM = require("../helper/fcm");
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  var cDateTime = require("../utils/generic.js");

  // Create a new admin
  const ride_request = new Rides({
    requested_datetime: cDateTime.getDateTime(),
    customer_id: req.body.customer_id,
    pickup_address: req.body.pickup_address,
    pickup_gps: req.body.pickup_gps,
    drop_address: req.body.drop_address,
    drop_gps: req.body.drop_gps,
    status_id: req.body.status_id,
    pickup_lat: req.body.pickup_lat,
    pickup_lng: req.body.pickup_lng,
    drop_lat: req.body.drop_lat,
    drop_lng: req.body.drop_lng,
    tip: req.body.tip
  });

  console.log(ride_request)
  // Save admin user in the database
  Rides.create(ride_request, async (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ride."
      });
    else {
      await Token.findDriverTokens((err, data1) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the ride."
          });
        else {
          let tokens = data1.map(e => {
            return e.token;
          });
          console.log('token: ' + tokens);
          FCM.sendPushNofi.sendMulticast(
            FCM.message('A ride has initiated', 'OkChalo', tokens)
          ).then(result => {
            console.log('result: ' + JSON.stringify(result));
            res.send(data);
          }).catch(e => { res.send(e) });
        }
      });
    };
  });
};


exports.pasengerAccept = (req, res) => {
  Rides.pasengerAccept(req, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ride."
      });
    else res.send(data);
  });
}


// Retrieve all status and its id to be used in the application
exports.all_status = (req, res) => {
  Rides.status_list((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving status list."
      });
    else res.send(data);
  });
};


// Retrieve all customers from the database.
exports.get_all_requests = (req, res) => {
  Rides.get_all_requests((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the requests."
      });
    else res.send(data);
  });
};


// Retrieve all customers from the database.
exports.getAll = (req, res) => {
  Rides.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customer."
      });
    else res.send(data);
  });
};


// Update ride request with booking id, drive id, status id and booking number
exports.rideAcceptedByDriver = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Rides.driver_accept(
    req.params.ride_id,
    new Rides(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found ride request with ride_id ${req.params.ride_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error confirming the booking with ride_id " + req.params.ride_id
          });
        }
      } else {
        Token.findByUserId(req.body.customer_id, (err, data1) => {
          if (err) {
            res.status(500).send({
              message:
                err.message || "Some error occurred while fetching browser token."
            });
          } else {
            let tokens = data1.map(e => {
              return e.token;
            });
            FCM.sendPushNofi.sendMulticast(
              FCM.message('A ride has been confirmed', 'OkChalo', tokens)
            ).then(result => {
              console.log('result: ' + JSON.stringify(result));
              res.send(data);
            }).catch(e => { res.send(e) });
          }
        });
        // res.send(data);
      }
    }
  );

}
exports.confirm_ride = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  var objGeneric = require("../utils/generic.js");
  var confirm_otp = objGeneric.generateOTP();

  Rides.confirm_booking(
    req.params.ride_id,
    confirm_otp,
    new Rides(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found ride request with ride_id ${req.params.ride_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error confirming the booking with ride_id " + req.params.ride_id
          });
        }
      } else res.send(data);
    }
  );

};

// Find a ride by ride_id
exports.rideBygps_radius = (req, res) => {
  var driver_lat = req.body.driver_lat,
    driver_lng = req.body.driver_lng,
    driver_radius = req.body.driver_radius;


  Rides.rideByGPS(driver_lat, driver_lng, driver_radius, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No rides found with in this radius ${req.params.radius}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving ride with in this " + req.params.radius
        });
      }
    } else res.send(data);
  });
};

// Find a ride by ride_id
exports.rideById = (req, res) => {
  console.log(req.params.ride_id);
  Rides.rideById(req.params.ride_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ride with id ${req.params.ride_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving ride with id " + req.params.ride_id
        });
      }
    } else res.send(data);
  });
};


