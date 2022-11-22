const Joi = require("joi");

const addUserPetSchema = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .min(2)
    .max(16),
  date: Joi.date(),
  breed: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .min(2)
    .max(16),
  coments: Joi.string().min(18).max(120),
  photoURL: Joi.string(),
});

module.exports = { addUserPetSchema };
