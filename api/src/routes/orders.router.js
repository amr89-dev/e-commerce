const ordersRouter = require("express").Router();
const OrderService = require("../services/order.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createOrderSchema,
  updateOrderSchema,
} = require("../schemas/order.schema");

const service = new OrderService();

ordersRouter.get("/", async (req, res, next) => {
  try {
    const orders = await service.find();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
});

ordersRouter.post(
  "/",
  validatorHandler(createOrderSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const newOrder = await service.create(data);
      res.status(200).json(newOrder);
    } catch (err) {
      next(err);
    }
  }
);

ordersRouter.get(
  "/:id",
  validatorHandler(updateOrderSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.status(201).json(order);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = ordersRouter;
