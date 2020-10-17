const joi = require("joi");

const { Menu } = require("../../Models/Menu");

exports.updateDescription = async function(req, res, next) {
  const { error } = updateDescription(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let meal = await Menu.findOneAndUpdate(
    { _id: req.params.mealId },
    { $set: { description: req.body.description } },
    { new: true }
  );

  res.send(meal);
};

function updateDescription(meal) {
  const schema = joi.object({
    description: joi.string().required()
  });
  return schema.validate(meal);
}
