const _ = require("lodash");
const joi = require("joi");

const { Table } = require("../../Models/Table");

exports.addTable = async function(req, res, next) {
  const { error } = addTable(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let table = await Table.findOne({ number: req.body.number });
  if (table)
    return res
      .status(400)
      .send(`Table with No. ${req.body.number} already exists`);

  table = new Table(_.pick(req.body, "number"));

  const token = await table.generateAuthToken();

  await table.save();

  res.header("x-auth-token", token).send(table);
};

function addTable(table) {
  const schema = joi.object({
    number: joi.number().required()
  });
  return schema.validate(table);
}
