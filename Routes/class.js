const express = require("express");

const router = express.Router();

const addClass = require("../Controllers/Class/addClass");
const showClass = require("../Controllers/Class/showClass");

router.post("/addClass", addClass.addClass);
router.get("/showClass/:englishName", showClass.showClass);

module.exports = router;
