const mongoose = require("mongoose");

let mtgSchema = new mongoose.Schema({
	name: { 
		type: String 
	},
	count: {
		type: Number
	}
})

mongoose.Model("Card", mtgSchema)