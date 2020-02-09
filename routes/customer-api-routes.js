const { Customer, Order } = require('../models');

module.exports = function (app) {

    app.get('/customer', function (req, res) {
        
        Customer.findAll({
            include: [Order]
        }).then(function (dbCustomer) {
            console.log('customer-api-routes')
            dbCustomer = dbCustomer.map(customer => customer.toJSON());
            res.render('customer', { dbCustomer })
            // res.json(dbCustomer)
        });
    });


    app.get('/customers/:id', function (req, res) {
        Customer.findOne({
            where: {
                id: req.params.id
            },
            include: [Order]
        }).then(function (dbCustomer) {
            res.json(dbCustomer)
        });
    });
 
  app.post("/api/customers", function(req, res) {
    console.log('supposed to be req.body', req.body)
    Customer.create(req.body).then(dbCustomer => res.json(dbCustomer));
  });
  
  app.delete("/api/customers/:id", function(req, res) {
    Customer.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });
 };
