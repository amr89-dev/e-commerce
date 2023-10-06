const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const User = require("./user.model");

const Token = sequelize.define("token", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
  },
  token: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
});

module.exports = Token;
