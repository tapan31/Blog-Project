const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      // Check if password needs to be updated
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
      console.log(error);
    }
  } else {
    res.status(401).json({ error: "You can only update your own account" });
  }
});

module.exports = router;
