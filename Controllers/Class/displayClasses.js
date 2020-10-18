const { Class } = require("../../Models/Class");

exports.displayClasses = async function(req, res, next) {
  let classes = await Class.find().select("englishName arabicName");

  res.send(classes);
};
