const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    order: {
      type: String,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    },
    confirmedBy: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = {
  Card
};
