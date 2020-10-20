const joi = require("joi");

const { Offer } = require("../../Models/Offer");

exports.updateDescription = async function(req, res, next) {
  const { error } = updateDescription(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let offer = await Offer.findOneAndUpdate(
    { _id: req.params.offerId },
    { $set: { description: req.body.description } },
    { new: true }
  );

  res.send(offer);
};

function updateDescription(offer) {
  const schema = joi.object({
    description: joi.string().required()
  });
  return schema.validate(offer);
}
