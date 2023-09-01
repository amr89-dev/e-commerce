const express = require("express");
const ProductService = require("../services/product.service");
const productsRouter = express.Router();
const service = new ProductService();

productsRouter.get("/", (req, res) => {
  const products = service.find();
  res.status(200).json(products);
});
productsRouter.get("/:email", (req, res) => {
  const { email } = req.params;
  console.log(email);
  const product = service.findOne(email);
  res.status(200).json(product);
});

module.exports = productsRouter;
