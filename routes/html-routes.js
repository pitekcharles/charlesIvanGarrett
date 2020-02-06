var path = require("path");
const router = require('express').Router();


router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/customer", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/customer.html"));
});

router.get("/product", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/product.html"));
});

router.get("/order", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/order.html"));
});

module.exports = router;
