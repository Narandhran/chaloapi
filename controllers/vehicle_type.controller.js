const VType = require("../models/vehicle_type.model.js");

// Retrieve all brands from the database.
exports.findAll = (req, res) => {
    VType.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving make."
      });
    else res.send(data);
  });
};

