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
  },
  publishedAt: {
    type: Date,
    "default": Date.now
  }
})

mongoose.model("Article", articleSchema)
