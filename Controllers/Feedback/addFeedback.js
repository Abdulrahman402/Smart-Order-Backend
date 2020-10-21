const joi = require("joi");

const { Feedback } = require("../../Models/Feedback");

exports.addFeedback = async function(req, res, next) {
  const { error } = addFeedback(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let feedback = new Feedback({
    "foodQuality.score": req.body.foodQuality,
    "placeCleanliness.score": req.body.placeCleanliness,
    "serviceSpeed.score": req.body.serviceSpeed,
    "appExperience.score": req.body.appExperience,
    "overallExperience.score": req.body.overallExperience,
    comment: req.body.comment
  });

  await feedback.save();

  res.send(feedback);
};

function addFeedback(comment) {
  const schema = joi.object({
    comment: joi.string(),
    foodQuality: joi
      .number()
      .min(1)
      .max(5),
    placeCleanliness: joi
      .number()
      .min(1)
      .max(5),
    serviceSpeed: joi
      .number()
      .min(1)
      .max(5),
    appExperience: joi
      .number()
      .min(1)
      .max(5),
    overallExperience: joi
      .number()
      .min(1)
      .max(5)
  });
  return schema.validate(comment);
}
