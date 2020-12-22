var express = require('express');
const { route } = require('.');
const { mountpath } = require('../app');
var router = express.Router();

const d = require("../controllers/drivers.controller");

router.post("/create", d.create);

module.exports = router;