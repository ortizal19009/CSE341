const { getDb } = require("../DB/conection");
const { ObjectId } = require("mongodb");
//const express = require("express");
const getContacts = (req, res) => {
  const db = getDb();
  let clients = [];
  db.collection("contacts")
    .find()
    .forEach((client) => clients.push(client))
    .then(() => {
      res.status(200).send(clients);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not found the documents" });
    });
};
const getContactsById = (req, res) => {
  const db = getDb();
  db.collection("contacts")
    .findOne({ _id: ObjectId(req.params.id) })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the document by id" });
    });
};
const postContact = (req, res) => {
  const db = getDb();
  const contact = req.body;
  db.collection("contacts")
    .insertOne(contact)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create a new json " });
    });
};
const deleteContact = (req, res) => {
  const db = getDb();
  db.collection("contacts")
    .deleteOne({ _id: ObjectId(req.params.id) })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not delete the document by id" });
    });
};
const updateContact = (req, res) => {
  const db = getDb();
  const contact = req.body;
  db.collection("contacts")
    .updateOne({ _id: ObjectId(req.params.id) }, { $set: contact })
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not update the document by id" });
    });
};
module.exports = {
  getContacts,
  getContactsById,
  postContact,
  deleteContact,
  updateContact,
};
