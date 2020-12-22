// Author & Email: sysqua@hotmail.com
// Purpose: Manage the driver controller and its functionalities.
// Date: 10 Sep 2020

const Drivers = require("../models/drivers.model.js");

exports.create = (req, res) => {
  console.log("I am in create")
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  var cDateTime = require("../utils/generic.js");

  // Create a new driver
  const newDriver = new Drivers({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    mobile_number : req.body.mobile_number,
    gender : req.body.gender,
    blood_group_id : req.body.blood_group_id,
    country_id : req.body.country_id,
    city : req.body.city,
    language_id : req.body.language_id,
    registered_date :  cDateTime.getDateTime()
  });
  console.log("driver data", newDriver);
  // Save driver in the database
  Drivers.create(newDriver, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the driver."
      });
    else res.send(data);
  });
};

exports.postTest = (req, res) => {
  console.log("I am in Post Test")  
  res.status(200).send({
    message:
      "Working post test!"
  });
};

// Find a single driver user with a driver_id
exports.findOne = (req, res) => {
    Drivers.findById(req.params.driver_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found driver with id ${req.params.driver_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Driver with id " + req.params.driver_id
        });
      }
    } else res.send(data);
  });
};


// Find a single driver user with a driver_id
exports.getbyMobileNo = (req, res) => {
  Drivers.getByMobileNumber(req.params.mobile_number, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found driver with mobile number ${req.params.mobile_number}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Driver with mobile number " + req.params.mobile_number
        });
      }
    } else res.send(data);
  });
};

// Retrieve all driver from the database.
exports.getAll = (req, res) => {
  console.log("i am driver list")
    Drivers.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving driver."
      });
    else res.send(data);
  });
};
