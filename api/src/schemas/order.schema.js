const Joi = require("joi");

const id = Joi.string().uuid();
const customerId = Joi.string().uuid();
const status = Joi.valid(
  "pending",
  "processing",
  "shipped",
  "delivered",
  "canceled"
);

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
  status,
});
const updateOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema };
