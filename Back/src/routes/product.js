const express = require("express");
const productSchema = require("../models/product");

const router = express.Router();

//Create User
router.post("/product", (req, res) => {
  const user = productSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//Get all users
router.get("/product", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//Find a user
router.get("/product/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//Update a user
router.put("/product/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, description, images, stock } = req.body;
  productSchema
    .updateOne(
      { _id: id },
      { $set: { name, price, description, images, stock } }
    )
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//Delete a user
router.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findOneAndRemove({ _id: id })
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

module.exports = router;
