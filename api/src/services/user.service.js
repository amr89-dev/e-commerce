const boom = require("@hapi/boom");
const User = require("../db/models/user.model");
const crypto = require("crypto");
class UserService {
  constructor() {}

  async create(data) {
    const newUser = {
      id: crypto.randomUUID(),
      ...data,
    };
    const user = await User.create(newUser);
    return user;
  }

  async find() {
    const users = await User.findAll();
    return users;
  }

  async findOne(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw boom.notFound("User not found");
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    user.destroy();
    return id;
  }
}

module.exports = UserService;
