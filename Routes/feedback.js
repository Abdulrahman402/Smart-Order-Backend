const express = require("express");

const router = express.Router();

const addFeedback = require("../Controllers/Feedback/addFeedback");
const displayFeedback = require("../Controllers/Feedback/displayFeedback");
const showFeedback = require("../Controllers/Feedback/showFeedback");
const removeFeedback = require("../Controllers/Feedback/removeFeedback");
const removeAll = require("../Controllers/Feedback/removeAll");

router.post("/addFeedback", addFeedback.addFeedback);

router.get("/displayFeedback", displayFeedback.displayFeedback);

router.get("/showFeedback/:feedbackId", showFeedback.showFeedback);

router.delete("/removeFeedback/:feedbackId", removeFeedback.removeFeedback);

router.delete("/removeAll", removeAll.removeAll);

module.exports = router;
