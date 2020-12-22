var express = require('express');
var router = express.Router();

const vehicle = require("../controllers/vehicle.controller.js");

// Create a new driver
router.post("/create", vehicle.create);

// Retrieve all driver
router.get("/list", vehicle.getAll);

// Retrieve a single Brand with brand_id
router.get("/get_by_vehicle_id/:vehicle_id", vehicle.findOne);

router.get("/get_driver_vehicles/:driver_id", vehicle.getByDriverId);

// Update a Language with language_id
router.put("/set_live_status/:vehicle_id", vehicle.go_live_ride);

module.exports = router;