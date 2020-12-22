var express = require('express');
var router = express.Router();

const brands = require("../controllers/brands.controller.js");

// Create a new Brand
router.post("/create", brands.create);

// Retrieve all Brands
router.get("/list", brands.findAll);

// Retrieve a single Brand with brand_id
router.get("/get/:brand_id", brands.findOne);

// Update a Brand with brand_id
router.put("/update/:brand_id", brands.update);

// Delete a Brand with brand_id
router.delete("/:brand_id", brands.delete);

module.exports = router;