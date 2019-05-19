const mongoose = require("mongoose");
let Card = mongoose.model("Card");

let sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

const removeCard = (card) =>{
	Card.findOneAndRemove({id: card}, (err, card) => {
		if(err){
			console.log(err)
		}
	})
}

module.exports.addNewCard = (req, res) =>{
	let newCard = {
		name: req.body.name,
		$inc: {count: 1},
		imageUrl: req.body.imgurl,
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

module.exports.updateCard = (req, res) => {
	Card.findOneAndUpdate({
		id: req.params.cardid
	}, {$inc: { count: 1} }, {new: true},  (err, card) =>{
		if(err){
			sendJSONresponse(res, 400, err)
		}
		else {

			sendJSONresponse(res, 200, card)
		}
	})
}

module.exports.removeCard = (req, res) => {
	console.log(req.params.cardid)
	Card.findOneAndUpdate({
		id: req.params.cardid
	}, {$inc: {count: -1}}, {new: true}, (err, card) =>{
		if(err){
			console.log(err)
			sendJSONresponse(res, 400, err)
		}
		else {
			if(card.count == 0){
				removeCard(card.id)
			}
			sendJSONresponse(res, 200, card)
		}
	})
}

module.exports.getCard = (req, res) =>{
	//Had to gointo mongodb and createindex for name db.cards.createIndex({name: "text"})
	if(req.params.cardname == ""){
		Card.find({}, (err, cards) => {
			if(err){
				console.log(err)
				sendJSONresponse(res, 400, err)
			}
			else {
				sendJSONresponse(res, 200, cards)
			}
		})
	}
	else {
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
} 