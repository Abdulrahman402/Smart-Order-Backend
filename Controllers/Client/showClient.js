const { Client } = require("../../Models/Client");

exports.showClient = async function(req, res, next) {
  const client = await Client.findOne({ phone: req.query.phone });

  res.send(client);
};
