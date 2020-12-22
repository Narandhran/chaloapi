var express = require('express');
var router = express.Router();

const blood = require("../controllers/blood.controller.js");

// Create a new Brand
router.post("/create", blood.create);

// Retrieve all blood groups
router.get("/list", blood.findAll);

module.exports = router;