const { Schema, model } = require("mongoose");
const { handleSaveErrors } = require("../helpers");

const userPetSchema = new Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  breed: {
    type: String,
  },
  coments: {
    type: String,
  },
  photoURL: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

userPetSchema.post("save", handleSaveErrors);

const UserPet = model("userPet", userPetSchema);

module.exports = { UserPet };