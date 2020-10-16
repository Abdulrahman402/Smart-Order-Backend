const express = require("express");

const router = express.Router();

const addMeal = require("../Controllers/Menu/addMeal");

router.post("/addMeal", addMeal.addMeal);

module.exports = router;
