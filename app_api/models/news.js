const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  urlToImage: {
    type: String
  },
  url: {
    type: String
  }
})

mongoose.model("Article", articleSchema)
