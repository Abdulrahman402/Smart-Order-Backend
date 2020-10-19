const { Table } = require("../../Models/Table");

exports.showTable = async function(req, res, next) {
  const table = await Table.findOne({ _id: req.params.tableId })
    .populate("order")
    .select();

  res.send(table);
};
