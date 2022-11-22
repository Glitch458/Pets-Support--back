const Joi = require("joi");

const addUserPetSchema = Joi.object({
  name: Joi.string(),
  date: Joi.string(),
  breed: Joi.string(),
  coments: Joi.string(),
  photoURL: Joi.string(),
});

module.exports = { addUserPetSchema };
