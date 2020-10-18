const _ = require("lodash");
const joi = require("joi");

const { Class } = require("../../Models/Class");

exports.addClass = async function(req, res, next) {
  const { error } = addClass(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let clas = new Class(_.pick(req.body, ["arabicName", "englishName"]));

  await clas.save();

  res.send(clas);
};

function addClass(clas) {
  const schema = joi.object({
    arabicName: joi.string().required(),
    englishName: joi.string().required()
  });
  return schema.validate(clas);
}
