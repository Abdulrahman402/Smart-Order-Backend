const { Offer } = require("../../Models/Offer");

exports.removeAll = async function(req, res, next) {
  await Offer.deleteMany();

  res.send("All Offers Removed");
};
