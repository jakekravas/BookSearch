const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  // authors: [
  //   {
  //     name:  {
  //       type: String
  //     }
  //   }
  // ],
  authors: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = Book = mongoose.model("book", BookSchema);