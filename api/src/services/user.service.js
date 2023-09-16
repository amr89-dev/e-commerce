const crypto = require("crypto");
const boom = require("@hapi/boom");
const User = require("../db/models/user.model");

class UserService {
  constructor() {}

  async create(data) {
    const newUser = {
      id: crypto.randomUUID(),
      ...data,
    };
    await User.create(newUser);
    return newUser;
  }

  async find() {
    const users = User.findAll();
    return users;
  }

  async findOne(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    return product;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
