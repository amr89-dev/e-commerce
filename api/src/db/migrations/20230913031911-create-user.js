"use strict";

const User = require("../models/user.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable("user", User);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("user", User);
  },
};
