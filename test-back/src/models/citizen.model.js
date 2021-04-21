const { model, Schema } = require("mongoose");

const groupSchema = new Schema({
  _id: false,
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const citizenSchema = new Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  city_id: {
    type: Number,
    required: true,
  },
  groups: [groupSchema],
});

module.exports = model("citizens", citizenSchema);
