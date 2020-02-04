const { Product } = require("../models");

module.exports = function(app) {

    app.get("/api/products", function(req, res) {
        Product.findAll({
            include: [Order]
        }).then(products => res.json(products))
        
    });

    app.get("/api/product/:product", function(req, res) {
        Product.findOne({
            where: {
                name: req.params.product
            },
            include: [Order]
        }).then(product => res.json(product))
        
    });

    app.post("/api/products", function (req, res) {
        Product.create({
            include: [Order]
        }).then(product => res.json(product))
        
    });

    app.delete("/api/products/:id", function (req, res) {
        Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(product => res.json(product))
        
    })
    
}