const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const category = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);
const images = Joi.array();

const createProductSchema = Joi.object({
  name: name.required(),
  category: category.optional(),
  price: price.required(),
  images: images.optional(),
});

const updateProductSchema = Joi.object({
  name,
  price,
  category,
  images,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
