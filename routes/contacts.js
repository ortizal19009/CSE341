const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContactsById,
  postContact,
  deleteContact,
  updateContact,
} = require("../controllers/contacts");
router.get("/", getContacts);
router.get("/:id", getContactsById);
router.post("/", postContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);
module.exports = router;
