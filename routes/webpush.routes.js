var express = require('express');
var router = express.Router();

const webpush = require("../controllers/webpush.controller.js");

// Create a new subscription
router.post("/subscribe", webpush.subscribe);

module.exports = router;