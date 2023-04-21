const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const login = require("./routes/login");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.post("/api/login", login);
app.use("/api", userRoutes);
app.use("/api", productRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("connected to mongo"))
  .catch((e) => console.error(e));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
