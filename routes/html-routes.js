const path = require("path");
const router = require("express").Router();

router.get("/", function(req, res) {
<<<<<<< HEAD
  res.render("index");
});

router.get("/customer", function(req, res) {
  res.render("customer");
});

router.get("/product", function(req, res) {
  res.render("product");
});

router.get("/order", function(req, res) {
=======
  // res.sendFile(path.join(__dirname, "../public/index.html"));
  res.render("index");
});

router.get("/order", function(req, res) {
  // res.sendFile(path.join(__dirname, "../public/order.html"));
>>>>>>> 1ce8b0a59863ddb360e301b9a514b34bb34ffa8a
  res.render("order");
});

module.exports = router;
