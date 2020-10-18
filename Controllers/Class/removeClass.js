const { Class } = require("../../Models/Class");
const { Menu } = require("../../Models/Menu");

exports.removeClass = async function(req, res, next) {
  await Class.findOneAndRemove({ _id: req.params.classId });

  await Menu.deleteMany({ class: req.params.classId });

  res.send("Class removed");
};
