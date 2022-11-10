const { Contact, schemas } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const updateContact = async (req, res) => {
  const { error } = schemas.joiSchema.validate(req.body);
  if (error) {
    throw RequestError(400, error.message);
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw RequestError(404, "Not Found");
  }
  res.json(result);
};

module.exports = updateContact;
