const express = require("express");
const ProductService = require("../services/product.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  getProductSchema,
  updateProductSchema,
  createProductSchema,
} = require("../schemas/product.schema");
const productsRouter = express.Router();
const service = new ProductService();

productsRouter.get("/", async (req, res, next) => {
  try {
    const products = await service.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

productsRouter.post(
  "/",
  validatorHandler(createProductSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const newProduct = await service.create(data);
      res.status(200).json(newProduct);
    } catch (err) {
      next(err);
    }
  }
);

productsRouter.put(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const productUpdated = service.update(id, data);
    res.status(200).json({
      message: "Producto actualizado correctamente",
      product: productUpdated,
    });
  }
);
productsRouter.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  (req, res, next) => {
    try {
      const { id } = req.params;
      const product = service.findOne(id);
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }
);
productsRouter.delete(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  (req, res) => {
    const { id } = req.params;
    const product = service.delete(id);
    res.status(200).json({
      message: "Producto eliminado correctamente",
      product,
    });
  }
);

module.exports = productsRouter;