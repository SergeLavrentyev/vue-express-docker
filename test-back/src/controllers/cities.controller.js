const Cities = require("../models/cities.model");
const genericController = require("./generic.controller");

module.exports = {
  ...genericController(Cities),
};
