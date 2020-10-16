const { User } = require("../../Models/User");

exports.allCashiers = async function(req, res, next) {
  const cashier = await User.find({ role: "Cashier" }).select(
    "-password -username"
  );

  res.send(cashier);
};
