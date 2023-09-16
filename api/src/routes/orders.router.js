const express = require("express");
const OrderService = require("../services/order.service");
const validatorHandler = require("../middlewares/validator.handler");
const { createOrderSchema } = require("../schemas/order.schema");

const router = express.Router();

const service = new OrderService();

router.get("/", async (req, res, next) => {
  try {
    const orders = await service.find();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  validatorHandler(createOrderSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      service.create(data);
      res.status(200).json();
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
