// Author & Email: sysqua@hotmail.com
// Purpose: Manage the vehicle controller and its functionalities.
// Date: 10 Sep 2020

const Vehicles = require("../models/vehicle.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a new vehicle
  const newVehicle = new Vehicles({
    vehicle_type_id : req.body.vehicle_type_id,
    driver_id : req.body.driver_id,
    vehicle_registration_number : req.body.vehicle_registration_number,
    capacity : req.body.capacity,
    active : req.body.active
  });

  // Save driver in the database
  Vehicles.create(newVehicle, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the driver."
      });
    else res.send(data);
  });
};


// Find a single vehicle user with a vehicle_id
exports.findOne = (req, res) => {
    Vehicles.findById(req.params.vehicle_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found vehicle with id ${req.params.vehicle_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving vehicle with id " + req.params.vehicle_id
        });
      }
    } else res.send(data);
  });
};


// Find a single driver user with a driver_id
exports.getByDriverId = (req, res) => {
    Vehicles.getByDriverId(req.params.driver_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No vehicles found for the driver id ${req.params.driver_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving vehicle with drive id " + req.params.driver_id
        });
      }
    } else res.send(data);
  });
};

// Retrieve all Vehicles from the database.
exports.getAll = (req, res) => {
    Vehicles.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Vehicles."
      });
    else res.send(data);
  });
};

// Update a brand identified by the brand_id in the request
exports.go_live_ride = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    Vehicles.go_live(
      req.params.vehicle_id,
      new Vehicles(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found vehicle with id ${req.params.vehicle_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating vehicle with id " + req.params.vehicle_id
            });
          }
        } else res.send(data);
      }
    );
  };
