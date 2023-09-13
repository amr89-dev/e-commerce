const casual = require("casual");
const crypto = require("crypto");
const boom = require("@hapi/boom");
const Product = require("../db/models/product.model");

class ProductService {
  constructor() {
    this.products = [];
  }

  async find() {
    const products = await Product.findAll();
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
    const newProduct = {
      id: crypto.randomUUID(),
      ...data,
    };
    await Product.create(newProduct);
    return newProduct;
  }
  async update(id, data) {
    const product = await this.findOne(id);
    const rta = await product.update(data);
    return rta;
  }
  async delete(id) {
    const product = await this.findOne(id);
    const rta = await product.destroy();
    return rta;
  }
}

module.exports = ProductService;
