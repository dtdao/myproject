const mongoose = require("mongoose");
let Exercise = mongoose.model("Exercise");

let sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.addNewExercise = (req, res) => {
	Exercise.create({
		date: req.body.date instanceof Date ? req.body.date.toDateString() : new Date(),
		exercise: req.body.exercise,
		weight: req.body.weight,
		sets: req.body.sets,
		reps: req.body.reps
	}, (err, exercise) => {
		if(err) {
			console.log(err)
			sendJSONresponse(res, 400, err)
		}
		else {
			sendJSONresponse(res, 201, exercise)
		}
	})
}

module.exports.exerciseQuery = (req, res) => {
	Exercise.find({}).sort({date: 'desc'}).exec(function(err, data) {
		if(err){
			console.log(err)
      sendJSONresponse(res, 400, err)
		}
		sendJSONresponse(res, 200, data)
	})
}
