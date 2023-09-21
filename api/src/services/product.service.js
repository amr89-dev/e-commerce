const boom = require("@hapi/boom");
const Product = require("../db/models/product.model");
const { Op } = require("sequelize");

class ProductService {
  constructor() {}

  async find(query) {
    const options = {
      include: ["categories"],
      where: {},
    };

    const { limit, offset, price, price_min, price_max } = query;

    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    if (price) {
      options.where.price = price;
    }

    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max,
      };
    }
    const products = await Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw boom.notFound("Product not found");
    }
    return product;
  }

  async create(data) {
    const newProduct = await Product.create(data);
    return newProduct;
  }
  async update(id, data) {
    const product = await Product.findOne(id);
    const rta = await product.update(data);
    return rta;
  }
  async delete(id) {
    const product = await Product.findOne(id);
    const rta = await product.destroy();
    return rta;
  }
}

module.exports = ProductService;
