// Author & Email: sysqua@hotmail.com
// Purpose: Manage the admin controller and its functionalities.
// Date: 21 Aug 2020

const Verification = require("../models/verification.model.js");



exports.generateOTP = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  var objGeneric = require("../utils/generic.js");
  
  // Create a new admin
  const verify = new Verification({
    user_type: req.body.user_type,
    mobile_number: req.body.mobile_number,
    otp: objGeneric.generateOTP(),
    sent_timestamp: objGeneric.getDateTime(),
    expired: 0,
    verified: 0
  });

  console.log("SMS Confirmation Number: " + Verification.sendSMS(verify.mobile_number,verify.otp));

  // Save admin user in the database
  Verification.createOTP(verify, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while generating otp!."
      });
    else res.send(data);
  });
};


// Update a otp identified by the brand_id in the request
exports.updateStatus = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    Verification.updateById(
      req.params.otp_id,
      new Verification(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found otp with id ${req.params.otp_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating otp status with id " + req.params.otp_id
            });
          }
        } else res.send(data);
      }
    );

    
  };


// Verify the Ride PIN 
exports.verifyRidePIN = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);
  console.log("ride_id: ", req.params.ride_id, "pin_number: ", req.body.pin_number)

  Verification.verifyPIN(
    req.params.ride_id,
    req.body.pin_number,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found pin with id ${req.params.ride_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating pin status with id " + req.params.ride_id
          });
        }
      } else res.send(data);
    }
  );

  
};