const boom = require("@hapi/boom");
const Order = require("../db/models/order.model");
const Customer = require("../db/models/customer.model");

class OrderService {
  constructor() {}
  async create(data) {
    const newOrder = await Order.create(data);
    return newOrder;
  }

  async find() {
    const orders = await Order.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await Order.findByPk(id, {
      include: [
        {
          association: "customer",
          include: ["user"],
        },
      ],
    });

    return order;
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

module.exports = OrderService;
