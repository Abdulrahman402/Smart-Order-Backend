const joi = require("joi");

const { Offer } = require("../../Models/Offer");

exports.updatePrice = async function(req, res, next) {
  const { error } = updatePrice(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let offer = await Offer.findOneAndUpdate(
    { _id: req.params.offerId },
    { $set: { oldPrice: req.body.oldPrice, newPrice: req.body.newPrice } },
    { new: true }
  );

  res.send(offer);
};

function updatePrice(offer) {
  const schema = joi.object({
    oldPrice: joi.number().required(),
    newPrice: joi.number().required()
  });
  return schema.validate(offer);
}
