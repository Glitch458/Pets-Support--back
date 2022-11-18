const { Schema, model } = require("mongoose");
const Joi = require("joi");

const noticeSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
    },
    place: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
    },
    sex: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

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
