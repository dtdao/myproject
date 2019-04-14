const mongoose = require("mongoose");
let Exercise = mongoose.model("Exercise");

let sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.addNewExercise = (req, res) => {
	console.log(req.body)
	Exercise.create({
		date: req.body.date,
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
			console.log(exercise)
			sendJSONresponse(res, 201, exercise)
		}
	})
}

module.exports.exerciseQuery = (req, res) => {
	sendJSONresponse(res, 200, {message: "This should work"})
}