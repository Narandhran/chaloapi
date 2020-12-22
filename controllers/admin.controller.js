// Author & Email: sysqua@hotmail.com
// Purpose: Manage the admin controller and its functionalities.
// Date: 21 Aug 2020

const Admins = require("../models/admin.model.js");
//const dtDateTime = require("../utils/crypto.js");
//var cDateTime = require("../utils/generic.js");
var crypto = require('../utils/cryptography');

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  var cDateTime = require("../utils/generic.js");
  var pwd = req.body.password;
  var salt;
  var hash;

  crypto.hash(pwd,function(err,result){
    if(err) {
      console.log(err);
      return res.json({
        'error': 'there is error in registration'
      });
    }
    salt = result.salt;
    hash = result.hash;
  });

  // Create a new admin
  const admin = new Admins({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    mobile_number: req.body.mobile_number,
    role_id: req.body.role_id,
    created_datetime: cDateTime.getDateTime(),
    active: req.body.active
  });

  // Save admin user in the database
  Admins.create(admin, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the admin user."
      });
    else res.send(data);
  });
};


// Find a single admin user with a admin_id
exports.findOne = (req, res) => {
  Admins.findById(req.params.admin_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Admin with id ${req.params.admin_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Admin with id " + req.params.admin_id
        });
      }
    } else res.send(data);
  });
};

// Retrieve all admins from the database.
exports.getAll = (req, res) => {
  Admins.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving admin."
      });
    else res.send(data);
  });
};

// // Update a admin identified by the admin_id in the request
// exports.update = (req, res) => {
//   // Validate Request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   console.log(req.body);

//   Admins.updateById(
//     req.params.admin_id,
//     new Admins(req.body),
//     (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found Admins with id ${req.params.admin_id}.`
//           });
//         } else {
//           res.status(500).send({
//             message: "Error updating Admin with id " + req.params.admin_id
//           });
//         }
//       } else res.send(data);
//     }
//   );
// };

// Delete an admin user with the specified admin_id in the request
exports.delete = (req, res) => {
  Admins.remove(req.params.admin_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Admin with id ${req.params.admin_id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Admin with id " + req.params.admin_id
        });
      }
    } else res.send({ message: `Brand was deleted successfully!` });
  });
};

