var express = require('express');
var router = express.Router();

const vtype = require("../controllers/vehicle_type.controller.js");

// Retrieve all Brands
router.get("/list", vtype.findAll);

module.exports = router;