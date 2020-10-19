const { Table } = require("../../Models/Table");

exports.displayTables = async function(req, res, next) {
  let tables = await Table.find().select();

  res.send(tables);
};
