const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const expressValidator = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");

const Book = require('../../models/Book');

router.post("/", auth, async (req, res) => {
  try {
    const newBook = await new Book({
      user: req.user.id,
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link
    });

    const book = await newBook.save()
    
    res.json({ book });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", auth, async(req, res) => {
  try {
    let books = await Book.find({ user: req.user.id });

    res.json({ books });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;