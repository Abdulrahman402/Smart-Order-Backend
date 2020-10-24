const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

const Client = mongoose.model("Client", clientSchema);

module.exports = {
  Client
};
