var express = require('express');
var router = express.Router();

const verify = require("../controllers/verification.controller.js");

// Create a new Brand
router.post("/genOTP", verify.generateOTP);

// Update a Brand with brand_id
router.put("/verified/:otp_id", verify.updateStatus);

router.put("/validatePIN/:ride_id", verify.verifyRidePIN);

module.exports = router;