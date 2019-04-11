const mongoose = require("mongoose")

let exerciseSchema = new mongoose.Schema({
	date: {
		type: Date,
		"default": Date.now
	},
	exercise: {
		type: String,
		require: true
	},
	weight: {
		type: Number,
		min: 1,
		require: true
	},
	sets: {
		type: Number,
		min: 1,
		require: true
	},
	reps: {
		type: Number,
		min: 1,
		require: true
	}
})

mongoose.model('Exercise', exerciseSchema);