const Joi = require("joi");

const addSchema = Joi.object({
  category: Joi.string().required(),
  title: Joi.string().required(),
  name: Joi.string(),
  birthday: Joi.string(),
  breed: Joi.string(),
  sex: Joi.string().required(),
  location: Joi.string().required(),
  price: Joi.string(),
  // photoURL: Joi.string(),
  comments: Joi.string(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  updateFavoriteSchema,
};
