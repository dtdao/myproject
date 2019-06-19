const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true
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

articleSchema.plugin(uniqueValidator)
mongoose.model("Article", articleSchema)
