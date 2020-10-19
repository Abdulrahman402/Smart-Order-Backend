const { Table } = require("../../Models/Table");

exports.deactivateTable = async function(req, res, next) {
  const table = await Table.findOneAndUpdate(
    { _id: req.params.tableId },
    { $set: { isActive: false } },
    { new: true }
  );
  res.send(table);
};
