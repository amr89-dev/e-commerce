const casual = require("casual");
const crypto = require("crypto");
const boom = require("@hapi/boom");

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: crypto.randomUUID(),
        name: `Producto ${i + 1}`,
        price: i + 1 * 10,
        isBlock: Math.random() < 0.5,
      });
    }
  }
  find() {
    return this.products;
  }
  findOne(id) {
    const product = this.products.filter((product) => product.id === id);

    if (!product.length) {
      throw boom.notFound("Producto no encontrado");
    }
    if (product[0].isBlock) {
      throw boom.conflict("Producto bloqueado");
    }
    return product;
  }
  create(data) {
    const newProduct = {
      id: crypto.randomUUID(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id, data) {
    const index = this.products.findIndex((product) => product.id === id);

    const productToUpdate = this.products[index];
    this.products[index] = {
      ...productToUpdate,
      ...data,
    };
    return this.products[index];
  }
  delete(id) {
    this.products = this.products.filter((product) => product.id !== id);
    return this.products;
  }
}

module.exports = ProductService;
