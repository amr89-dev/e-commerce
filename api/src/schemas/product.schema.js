const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const images = Joi.array().items(Joi.string().uri());
const categoriesId = Joi.string().uuid();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  images,
  categoriesId,
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description.required(),
  images,
  categoriesId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };