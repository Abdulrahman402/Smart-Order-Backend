const joi = require("joi");

const { Class } = require("../../Models/Class");

exports.updateName = async function(req, res, next) {
  const { error } = updateName(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let clas = await Class.findOneAndUpdate(
    { _id: req.params.classId },
    {
      $set: {
        arabicName: req.body.arabicName,
        englishName: req.body.englishName
      }
    },
    { new: true }
  );

  res.send(clas);
};

function updateName(clas) {
  const schema = joi.object({
    arabicName: joi.string().required(),
    englishName: joi.string().required()
  });
  return schema.validate(clas);
}
