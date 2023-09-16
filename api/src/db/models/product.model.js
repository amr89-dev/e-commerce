const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Product = sequelize.define("product", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});

module.exports = Product;
