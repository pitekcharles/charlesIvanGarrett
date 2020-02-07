const path = require("path");
const router = require("express").Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/customer", function(req, res) {
  res.render("customer");
});

// router.get("/product", function(req, res) {
//   res.render("product");
// });

router.get("/order", function(req, res) {
  res.render("order");
});

module.exports = router;
