const express = require("express");

const router = express.Router();

const addOffer = require("../Controllers/Offer/addOffer");
const removeOffer = require("../Controllers/Offer/removeOffer");
const updateName = require("../Controllers/Offer/updateName");
const updateDescription = require("../Controllers/Offer/updateDescription");
const updatePrice = require("../Controllers/Offer/updatePrice");

router.post("/addOffer", addOffer.addOffer);

router.delete("/removeOffer/:offerId", removeOffer.removeOffer);

router.put("/updateName/:offerId", updateName.updateName);

router.put("/updateDescription/:offerId", updateDescription.updateDescription);

router.put("/updatePrice/:offerId", updatePrice.updatePrice);

module.exports = router;
