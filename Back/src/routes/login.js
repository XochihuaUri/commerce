const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { secret } = require("../config");
const User = require("../models/user");

async function login(req, res) {
  const { mail, password } = req.body;
  console.log("here");

  try {
    const user = await User.findOne({ mail });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "1d" });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = login;
