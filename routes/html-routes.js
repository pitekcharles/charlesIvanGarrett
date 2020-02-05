var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/customer", function(req, res){
        res.sendFile(path.join(__dirname, "../public/customer.html"));
    });

    app.get("/product", function(req, res){
        res.sendFile(path.join(__dirname, "../public/product.html"));
    });

    app.get("/order", function(req, res){
        res.sendFile(path.join(__dirname, "../public/order.html"));
    });


}