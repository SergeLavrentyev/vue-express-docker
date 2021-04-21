const Citizens = require("../models/citizen.model");
const genericController = require("./generic.controller");

module.exports = {
  ...genericController(Citizens),
};
