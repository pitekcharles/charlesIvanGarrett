var path = require("path");
const router = require('express').Router();


router.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render("index");
});

// router.get("/customer", function (req, res) {
//     // res.sendFile(path.join(__dirname, "../public/customer.html"));
//     res.render("customer");
// });

router.get("/product", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/product.html"));
    res.render("product");
});

router.get("/order", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/order.html"));
    res.render("order");
});

module.exports = router;
