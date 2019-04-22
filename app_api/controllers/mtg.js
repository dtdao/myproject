const mongoose = require("mongoose");
let Card = mongoose.model("Card");

let sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.addNewCard = (req, res) =>{
	sendJSONresponse(res, 200, {message: "new card router success"})
}

module.exports.modifyCard = (req, res) => {
	sendJSONresponse(res, 200, {message: "modify card router success"})
}

module.exports.deleteCard = (req, res) => {
	sendJSONresponse(res, 200, {message: "delete card router sucess!"})
}

module.exports.getCard = (req, res) =>{
	sendJSONresponse(res, 200, {message: "get card router success!"})
}