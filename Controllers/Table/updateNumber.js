const joi = require("joi");

const { Table } = require("../../Models/Table");

exports.updateNumber = async function(req, res, next) {
  const { error } = updateNumber(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let table = await Table.findOne({ number: req.body.number });
  if (table)
    return res
      .status(400)
      .send(`Table with No. ${req.body.number} already exists`);

  table = await Table.findOneAndUpdate(
    { _id: req.params.tableId },
    { $set: { number: req.body.number } },
    { new: true }
  );
  res.send(table);
};

function updateNumber(table) {
  const schema = joi.object({
    number: joi.number().required()
  });
  return schema.validate(table);
}
