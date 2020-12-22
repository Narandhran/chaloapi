const Brands = require("../models/brands.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a brand
  const brand = new Brands({
    brand_name: req.body.brand_name
  });

  // Save brand in the database
  Brands.create(brand, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Brand."
      });
    else res.send(data);
  });
};


// Find a single brand with a brand_id
exports.findOne = (req, res) => {
  Brands.findById(req.params.brand_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Brand with id ${req.params.brand_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Brand with id " + req.params.brand_id
        });
      }
    } else res.send(data);
  });
};

// Retrieve all brands from the database.
exports.findAll = (req, res) => {
  Brands.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving make."
      });
    else res.send(data);
  });
};

// Update a brand identified by the brand_id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Brands.updateById(
    req.params.brand_id,
    new Brands(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Brand with id ${req.params.brand_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Brand with id " + req.params.brand_id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Brands.remove(req.params.brand_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Brand with id ${req.params.brand_id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Brand with id " + req.params.brand_id
        });
      }
    } else res.send({ message: `Brand was deleted successfully!` });
  });
};

