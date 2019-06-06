const mongoose = require("mongoose");

let cardSchema = new mongoose.Schema({
	name: {
		type: String
	},
	count: {
		type: Number
	},
	imageUrl: {
		type: String
	},
	id: {
		type: String
	}
})

mongoose.model("Card", cardSchema);
