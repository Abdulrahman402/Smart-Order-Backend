const { Table } = require("../../Models/Table");

exports.removeTable = async function(req, res, next) {
  const table = await Table.findByIdAndRemove({ _id: req.params.tableId });

  res.send(`Table No. ${table.number} Removed`);
};
