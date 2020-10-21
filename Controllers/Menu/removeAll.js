const { Menu } = require("../../Models/Menu");

exports.removeAll = async function(req, res, next) {
  await Menu.deleteMany();

  res.send("All Meals Removed");
};
