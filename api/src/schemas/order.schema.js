const Joi = require("joi");

const id = Joi.string().uuid();
const date = Joi.date();
const totalAmount = Joi.number();

const createOrderSchema = Joi.object({
  date: date.required(),
  total: totalAmount,
});
const updateOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema };
