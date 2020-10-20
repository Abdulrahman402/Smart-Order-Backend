const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const offerSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    image: String,
    oldPrice: Number,
    newPrice: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Offer = mongoose.model("Offer", offerSchema);

module.exports = {
  Offer
};
