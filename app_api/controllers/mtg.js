const mongoose = require("mongoose");
let Card = mongoose.model("Card");

let sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


