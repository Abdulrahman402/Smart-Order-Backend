const { Offer } = require("../../Models/Offer");

exports.DisplayOffer = async function(req, res, next) {
  const offer = await Offer.find().select();

  res.send(offer);
};
