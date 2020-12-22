var express = require('express');
var router = express.Router();

const driver = require("../controllers/drivers.controller");

// Create a new driver
router.post("/create", driver.create);
router.post("/posttest", driver.postTest);

router.get("/add", driver.create);

// Retrieve all driver
router.get("/list", driver.getAll);

// Retrieve a single Brand with brand_id
router.get("/get/:driver_id", driver.findOne);

router.get("/profile/:mobile_number", driver.getbyMobileNo);

module.exports = router;