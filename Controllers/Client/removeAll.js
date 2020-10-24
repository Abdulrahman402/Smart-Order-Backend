const { Client } = require("../../Models/Client");

exports.removeAll = async function(req, res, next) {
  await Client.deleteMany();

  res.send("All Clients Removed");
};
