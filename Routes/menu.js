const express = require("express");

const router = express.Router();

const addMeal = require("../Controllers/Menu/addMeal");
const removeMeal = require("../Controllers/Menu/removeMeal");
const updateName = require("../Controllers/Menu/updateName");
const updateDescription = require("../Controllers/Menu/updateDescription");
const updatePrice = require("../Controllers/Menu/updatePrice");

router.post("/addMeal/:classId", addMeal.addMeal);

router.put("/removeMeal/:classId/:mealId", removeMeal.removeMeal);

router.put("/updateName/:mealId", updateName.updateName);

router.put("/updateDescription/:mealId", updateDescription.updateDescription);

router.put("/updatePrice/:mealId", updatePrice.updatePrice);

module.exports = router;
