const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    // fetch user from db
    const username = req.body.username;
    const passwrd = req.body.password;
    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ error: "User not found" });

    const match = await bcrypt.compare(passwrd, user.password);

    const { password, ...others } = user._doc;

    if (match) {
      res.json(others);
    } else res.status(400).json({ failure: "Password not matched" });

    // res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
