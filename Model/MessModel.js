const mongoose = require("mongoose");

const messSchema = mongoose.Schema(
  {
    type: String,
  },
  {
    versionKey: false,
  }
);

const MessModel = mongoose.model("data", messSchema);

module.exports = { MessModel };
