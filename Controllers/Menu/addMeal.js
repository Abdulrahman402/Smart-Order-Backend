const _ = require("lodash");

const { Menu } = require("../../Models/Menu");

const { Class } = require("../../Models/Class");

exports.addMeal = async function(req, res, next) {
  let meal = new Menu(
    _.pick(req.body, ["name", "description", "image", "price"])
  );

  await meal.save();

  const clas = await Class.findOneAndUpdate(
    { englishName: req.body.class },
    { $push: { meals: meal._id } },
    { new: true }
  );

  await Menu.findOneAndUpdate(
    { _id: meal._id },
    {
      $set: {
        class: clas._id
      }
    },
    { new: true }
  );
  res.send(meal);
};
