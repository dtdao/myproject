const mongoose = require("mongoose");


// Temporary schema model 
let cardSchema = new mongoose.Schema({
	name: { 
		type: String 
	},
	count: {
		type: Number
	}
})

mongoose.model("Card", cardSchema);