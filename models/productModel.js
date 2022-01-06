module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        defaultValue: "",
      },
    },
    {
      defaultScope: {
        attributes: { exclude: ["id"] },
      },
      scopes: {
        withoutPrice: {
          attributes: { exclude: ["id", "price"] },
        },
      },
    }
  );
  return Product;
};
