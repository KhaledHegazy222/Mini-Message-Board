const mongoose = require("mongoose");

messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, require: true },
  sentAt: { type: Date, default: () => Date.now() },
});

module.exports = mongoose.model("Message", messageSchema);
