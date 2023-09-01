const casual = require("casual");
const crypto = require("crypto");

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: crypto.randomUUID(),
        name: `Producto ${i + 1}`,
        price: i + 1 * 10,
      });
    }
  }
  find() {
    return this.products;
  }
  findOne(email) {
    return this.products.filter((product) => product.email === email);
  }
  create() {}
}

module.exports = ProductService;
