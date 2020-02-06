const path = require("path");
const router = require("express").Router();

router.get("/", function(req, res) {
  // res.sendFile(path.join(__dirname, "../public/index.html"));
  res.render("index");
});

<<<<<<< HEAD
// router.get("/customer", function (req, res) {
//     // res.sendFile(path.join(__dirname, "../public/customer.html"));
//     res.render("customer");
=======
// router.get("/customer", function(req, res) {
//   // res.sendFile(path.join(__dirname, "../public/customer.html"));
//   res.render("customer");
>>>>>>> e5b94be99b5344c29ed3808b3a81399e43107351
// });

// router.get("/product", function(req, res) {
//   // res.sendFile(path.join(__dirname, "../public/product.html"));
//   res.render("product");
// });

router.get("/order", function(req, res) {
  // res.sendFile(path.join(__dirname, "../public/order.html"));
  res.render("order");
});

module.exports = router;
