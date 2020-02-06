module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      cost: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      category: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );

  Product.associate = function(models) {
    Product.belongsToMany(models.Order, { through: "productOrder" });
  };

  return Product;
};
