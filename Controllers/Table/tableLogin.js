const _ = require("lodash");

const { Table } = require("../../Models/Table");

exports.tableLogin = async function(req, res, next) {
  const table = await Table.findOneAndUpdate(
    { number: req.params.number },
    { $set: { isActive: true } },
    { new: true }
  );

  const token = await table.generateAuthToken();

  res.header("x-auth-token", token).send("Welcome to Lamera");
};
