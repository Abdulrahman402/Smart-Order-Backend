const express = require("express");

const router = express.Router();

const addClass = require("../Controllers/Class/addClass");

router.post("/addClass", addClass.addClass);

module.exports = router;
