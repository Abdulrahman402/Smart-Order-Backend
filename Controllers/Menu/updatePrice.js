const joi = require("joi");

const { Menu } = require("../../Models/Menu");

exports.updatePrice = async function(req, res, next) {
  const { error } = updatePrice(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let meal = await Menu.findOneAndUpdate(
    { _id: req.params.mealId },
    { $set: { price: req.body.price } },
    { new: true }
  );

  res.send(meal);
};

function updatePrice(meal) {
  const schema = joi.object({
    price: joi.number().required()
  });
  return schema.validate(meal);
}
