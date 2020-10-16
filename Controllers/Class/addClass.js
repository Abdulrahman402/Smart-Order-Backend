const _ = require("lodash");

const { Class } = require("../../Models/Class");

exports.addClass = async function(req, res, next) {
  let clas = new Class(_.pick(req.body, ["arabicName", "englishName"]));

  await clas.save();

  res.send(clas);
};
