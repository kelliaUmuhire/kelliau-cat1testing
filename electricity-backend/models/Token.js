const mongoose = require("mongoose");

const Token = mongoose.model(
  "tokens",

  new mongoose.Schema({
    days: {
      type: Number,
      required: true,
    },
    token_id: {
      type: Number,
      required: true,
    },
    meter_num: {
      type: Number,
      required: true,
    },
    status: String,
    created_at: Date,
    // expires_at: Date,
  })
);

module.exports = Token;
