const Joi = require("joi");

const addSchema = Joi.object({
  category: Joi.string().required(),
  title: Joi.string().required(),
  name: Joi.string(),
  birthday: Joi.string(),
  breed: Joi.string(),
  sex: Joi.string().required(),
  place: Joi.string().required(),
  price: Joi.string(),
  photo: Joi.string(),
  comments: Joi.string(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  updateFavoriteSchema,
};
