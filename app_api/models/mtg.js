const mongoose = require("mongoose");


// Temporary schema model 
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