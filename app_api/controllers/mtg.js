const mongoose = require("mongoose");
let Card = mongoose.model("Card");

let sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.addNewCard = (req, res) =>{
	let newCard = {
		name: req.body.name,
		$inc: {count: 1},
		imgurl: req.body.imgurl,
		id: req.body.id
	}

	Card.findOneAndUpdate({
		id: req.body.id
	}, newCard, {upsert: true}, (err, doc) =>{ 
		if(err){
			console.log(err);
			sendJSONresponse(res, 400, err)
		}
		else {
			sendJSONresponse(res, 200, doc)
		}
	})
}

module.exports.modifyCard = (req, res) => {

	sendJSONresponse(res, 200, {message: "modify card router success"})
}

module.exports.deleteCard = (req, res) => {
	Card.findOneAndDelete({
		id: req.params.cardid
	}, (err, doc) =>{
		if(err){
			console.log(err)
			sendJSONresponse(res, 400, err)
		}
		else {
			sendJSONresponse(res, 200, doc)
		}
	})
}

module.exports.getCard = (req, res) =>{
	//Had to gointo mongodb and createindex for name db.cards.createIndex({name: "text"})
	Card.find({$text: {$search: req.params.cardname}}, (err, cards) =>{
		if(err){
			console.log(err)
			sendJSONresponse(res, 400, err)
		}
		else {
			sendJSONresponse(res, 200, cards)
		}
	})
} 