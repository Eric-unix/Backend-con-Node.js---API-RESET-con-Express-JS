const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max();
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  name: name,
  price: price,
});

const updateProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {createProductSchema, updateProductSchema, getProductSchema }
