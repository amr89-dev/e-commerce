const boom = require("@hapi/boom");
const Product = require("../db/models/product.model");

class ProductService {
  constructor() {}

  async find() {
    const products = await Product.findAll({
      include: ["categories"],
    });
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