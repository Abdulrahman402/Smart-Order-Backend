const { Feedback } = require("../../Models/Feedback");

exports.displayFeedback = async function(req, res, next) {
  const feedback = await Feedback.find().select();

  res.send(feedback);
};
