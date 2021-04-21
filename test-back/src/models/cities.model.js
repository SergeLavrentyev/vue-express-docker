const { Schema, model } = require("mongoose");

const citiesSchema = new Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

module.exports = model("cities", citiesSchema);
