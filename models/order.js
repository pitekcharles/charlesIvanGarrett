module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define(
    "Order",
    {
      product: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  Order.associate = function(models) {
    Order.belongsToMany(models.Product, { through: "productOrder" });
    Order.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Order;
};
