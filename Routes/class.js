const express = require("express");

const router = express.Router();

const addClass = require("../Controllers/Class/addClass");
const showClass = require("../Controllers/Class/showClass");
const updateName = require("../Controllers/Class/updateName");
const removeClass = require("../Controllers/Class/removeClass");

router.post("/addClass", addClass.addClass);

router.put("/updateName/:classId", updateName.updateName);

router.get("/showClass/:englishName", showClass.showClass);

router.delete("/removeClass/:classId", removeClass.removeClass);

module.exports = router;
