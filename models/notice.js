const { Schema, model } = require("mongoose");
const { handleSaveErrors } = require("../helpers");

const noticeSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  birthday: {
    type: String,
  },
  breed: {
    type: String,
  },
  sex: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  photoURL: {
    type: String,
  },
  comments: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

noticeSchema.post("save", handleSaveErrors);

const Notice = model("notice", noticeSchema);

module.exports = { Notice };
