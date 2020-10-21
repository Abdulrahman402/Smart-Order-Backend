const { Feedback } = require("../../Models/Feedback");

exports.removeAll = async function(req, res, next) {
  await Feedback.deleteMany();

  res.send("All Feedbacks Removed");
};
