const joi = require("joi");

const { Menu } = require("../../Models/Menu");

exports.updateName = async function(req, res, next) {
  const { error } = updateName(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let meal = await Menu.findOneAndUpdate(
    { _id: req.params.mealId },
    { $set: { name: req.body.name } },
    { new: true }
  );

  res.send(meal);
};

function updateName(meal) {
  const schema = joi.object({
    name: joi.string().required()
  });
  return schema.validate(meal);
}
