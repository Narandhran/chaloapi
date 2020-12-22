const Blood = require("../models/blood_group.model.js");



exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a brand
    const bg = new Blood({
      blood_group: req.body.blood_group
    });
  
    // Save brand in the database
    Blood.create(bg, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the blood group."
        });
      else res.send(data);
    });
  };
  
// Retrieve all blood group from the database.
exports.findAll = (req, res) => {
    Blood.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving blood group."
      });
    else res.send(data);
  });
};


