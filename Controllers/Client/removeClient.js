const { Client } = require("../../Models/Client");

exports.removeClient = async function(req, res, next) {
  const client = await Client.findOneAndRemove({ _id: req.params.clientId });

  res.send(`Client with phone number ${client.phone} removed`);
};
