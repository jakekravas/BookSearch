const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const expressValidator = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

const User = require('../../models/User');

// @route      GET api/users
// @desc       Register user & get token
// @access     Private
router.post("/", [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Please enter a password with six or more characters").isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    // if there are any errors
    return res.status(400).json({
      errors: errors.array(),
    });
  };

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    
    if (user) {
      return res.status(400).json({
        errors: [
          {
            msg: "User already exists"
          }
        ],
      });
    }

    user = new User({ email, password });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      // mongoose allows us to use id instead of _id
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, config.get("jwtSecret"), {
      expiresIn: "1h"
    }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }

});

module.exports = router;