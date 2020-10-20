const joi = require("joi");

const { Offer } = require("../../Models/Offer");

exports.addOffer = async function(req, res, next) {
  const { error } = addOffer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let meal = new Offer({
    name: req.body.name,
    description: req.body.description,
    oldPrice: req.body.oldPrice,
    newPrice: req.body.newPrice
  });

  await meal.save();

  res.send(meal);
};

function addOffer(offer) {
  const schema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    oldPrice: joi.number(),
    newPrice: joi.number().required()
  });
  return schema.validate(offer);
}
