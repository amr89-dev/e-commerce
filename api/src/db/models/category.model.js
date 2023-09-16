const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Category = sequelize.define("category", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Category;
