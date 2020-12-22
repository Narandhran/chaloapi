var express = require('express');
var router = express.Router();

const languages = require("../controllers/languages.controller.js");

// Create a new Language
router.post("/create", languages.create);

// Retrieve all Language
router.get("/list", languages.findAll);

// Retrieve a single Language with language_id
router.get("/get/:language_id", languages.findOne);

// Update a Language with language_id
router.put("/update/:language_id", languages.update);

// Delete a Language with language_id
router.delete("/:language_id", languages.delete);

module.exports = router;
