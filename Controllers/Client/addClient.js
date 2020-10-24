const _ = require("lodash");
const joi = require("joi");

const { Client } = require("../../Models/Client");

exports.addClient = async function(req, res, next) {
  const { error } = validateClient(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let client = await Client.findOne({ phone: req.body.phone });
  if (client) return res.status(400).send("client already registered");

  client = new Client(_.pick(req.body, ["firstName", "lastName", "phone"]));

  await client.save();

  res.send(client);
};

function validateClient(client) {
  const schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    phone: joi.string().required()
  });
  return schema.validate(client);
}
