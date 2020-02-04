module.exports = function(sequelize, DataTypes){
    var Order = sequelize.define("Order", {
        product: {
            type:DataTypes.TEXT,
            allowNull: false
        },
        customerid: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        quantity: {
            type: DataTypes.TEXT,
            allowNull:false
        }
        
    },
    {
        freezeTableName: true
    });

    Order.associate = function(models) {
        Order.belongsToMany(models.Product, {through: "productOrder"})
    }

    return Order;
}