const boom = require("@hapi/boom");
const Customer = require("../db/models/customer.model");
const { randomUUID } = require("crypto");
const User = require("../db/models/user.model");
const crypto = require("crypto");

class CustomerService {
  constructor() {}
  async find() {
    const rta = await Customer.findAll({
      include: ["user"],
    });
    return rta;
  }
  async findOne(id) {
    const user = await Customer.findByPk(id);
    if (!user) {
      throw boom.notFound("customer not found");
    }
    return user;
  }
  async create(data) {
    const newCustomer = await Customer.create(data, {
      include: ["user"],
    });
    return newCustomer;
  }
  async update(id, changes) {
    const customer = await this.findOne(id);
    const rta = await customer.update(changes);
    return rta;
  }
  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { rta: true };
  }
}

module.exports = CustomerService;
