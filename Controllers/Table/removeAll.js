const { Table } = require("../../Models/Table");

exports.removeAll = async function(req, res, next) {
  await Table.deleteMany();

  res.send("All Tables Removed");
};
