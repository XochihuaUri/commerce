const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//Create User
router.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//Get all users
router.get("/user", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//Find a user
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//Update a user
router.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, mail, password } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, mail, password } })
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//Delete a user
router.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findOneAndRemove({ _id: id })
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

module.exports = router;
