const { Customer } = require('../models');

module.exports = function (app) {

    app.get('/api/customers', function (req, res) {
        Customer.findAll({
            include: [Order]
        }).then(function (dbCustomer) {
            res.json(dbCustomer)
        });
    });


    app.get('/api/customers/:id', function (req, res) {
        Customer.findOne({
            where: {
                id: req.params.id
            },
            include: [Order]
        }).then(function (dbCustomer) {
            res.json(dbCustomer)
        });
    });


    app.post('/api/customers', function (req, res) {
        Customer.create(req.body).then(function (dbCustomer) {
            res.json(dbCustomer)
        });
    });


    app.delete('/api/customers/:id', function ( req, res){
        Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbCustomer){
            res.json(dbCustomer)
        });
    });


}

