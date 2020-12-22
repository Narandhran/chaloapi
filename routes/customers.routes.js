var express = require('express');
var router = express.Router();

const customer = require("../controllers/customers.controller.js");

// Create a new customer
router.post("/create", customer.create);

// Retrieve all Brands
router.get("/list", customer.getAll);

// Retrieve a single Brand with brand_id
router.get("/get/:customer_id", customer.findOne);

router.get("/profile/:mobile_number", customer.getByMobileNo);

module.exports = router;