var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET info page. */
router.get("/info", function (req, res, next) {
  res.json({
    data: {
      fullName: "Au Cong Danh",
      studentCode: "QE170170",
    },
  });
});

module.exports = router;
