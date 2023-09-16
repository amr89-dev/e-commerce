const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const User = sequelize.define("user", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "customer",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
});

module.exports = User;
