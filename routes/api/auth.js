const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const expressValidator = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth");

const User = require('../../models/User');

// @route      GET api/users
// @desc       Get data of logged in user
// @access     Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;