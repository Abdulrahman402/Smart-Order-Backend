const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: String,
  price: Number,
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class"
  }
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = {
  Menu
};
