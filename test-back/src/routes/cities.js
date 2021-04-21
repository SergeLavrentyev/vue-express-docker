const { Router } = require("express");
const router = Router();
const Cities = require("../controllers/cities.controller");

router.route("/").get(Cities.getAll);
router.route("/").post(Cities.getAll);

module.exports = router;
