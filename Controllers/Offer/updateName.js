const joi = require("joi");

const { Offer } = require("../../Models/Offer");

exports.updateName = async function(req, res, next) {
  const { error } = updateName(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let offer = await Offer.findOneAndUpdate(
    { _id: req.params.offerId },
    { $set: { name: req.body.name } },
    { new: true }
  );

  res.send(offer);
};

function updateName(offer) {
  const schema = joi.object({
    name: joi.string().required()
  });
  return schema.validate(offer);
}
