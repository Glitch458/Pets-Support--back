const { Schema, model } = require("mongoose");
const Joi = require("joi");

const noticeSchema = new Schema({}, { versionKey: false, timestamps: true });

const joiSchema = Joi.object({});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = { joiSchema, updateFavoriteSchema };

const Notice = model("notice", noticeSchema);

module.exports = {
  Notice,
  schemas,
};
