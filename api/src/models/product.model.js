const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Product = sequelize.define("product", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
    type: DataTypes.ARRAY,
  },
});

module.exports = Product;
