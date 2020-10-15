const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const keys = require("../Config/keys");

const Schema = mongoose.Schema;

const tableSchema = new Schema({
  number: {
    type: Number,
    required: true
  },
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card"
    }
  ],
  isActive: {
    type: Boolean,
    default: false
  }
});

userSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign(
    { _id: this._id, number: this.number, isActive: this.isActive },
    keys.tokenSecretKey
  );

  return token;
};

const Table = mongoose.model("Table", tableSchema);

module.exports = {
  Table
};
