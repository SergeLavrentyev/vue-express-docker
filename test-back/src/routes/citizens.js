const { Router } = require("express");
const router = Router();
const Citizens = require("../controllers/citizens.controller");

router.route("/").get(Citizens.getAll);
router.route("/").post(Citizens.create);
router.route("/:id").delete(Citizens.delete);

module.exports = router;
