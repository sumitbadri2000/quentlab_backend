const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  text: String,
});

const ChatModel = mongoose.model("chat", chatSchema);

module.exports = { ChatModel };
