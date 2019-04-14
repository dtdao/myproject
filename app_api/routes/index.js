const express = require('express');
const router = express.Router();
const exerciseCtrl = require("../controllers/exercise.js")

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

router.post("/exercise/new", exerciseCtrl.addNewExercise)
router.get("/exercise", exerciseCtrl.exerciseQuery)

module.exports = router

