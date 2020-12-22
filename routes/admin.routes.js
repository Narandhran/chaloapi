var express = require('express');
var router = express.Router();

const admin = require("../controllers/admin.controller.js");

// Create a new Brand
router.post("/create", admin.create);

// Retrieve all Brands
router.get("/list", admin.getAll);

// Retrieve a single Brand with brand_id
router.get("/get/:admin_id", admin.findOne);

// Update a Brand with brand_id
//router.put("/:brand_id", admin.update);

// Delete a Brand with brand_id
router.delete("/:admin_id", admin.delete);

module.exports = router;