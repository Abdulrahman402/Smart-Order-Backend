const express = require("express");

const router = express.Router();

const addOffer = require("../Controllers/Offer/addOffer");
const removeOffer = require("../Controllers/Offer/removeOffer");
const updateName = require("../Controllers/Offer/updateName");
const updateDescription = require("../Controllers/Offer/updateDescription");
const updatePrice = require("../Controllers/Offer/updatePrice");
const removeAll = require("../Controllers/Offer/removeAll");
const displayOffer = require("../Controllers/Offer/displayOffer");

router.post("/addOffer", addOffer.addOffer);

router.delete("/removeOffer/:offerId", removeOffer.removeOffer);

router.delete("/removeAll", removeAll.removeAll);

router.put("/updateName/:offerId", updateName.updateName);

router.put("/updateDescription/:offerId", updateDescription.updateDescription);

router.put("/updatePrice/:offerId", updatePrice.updatePrice);

router.get("/displayOffer", displayOffer.DisplayOffer);

module.exports = router;
