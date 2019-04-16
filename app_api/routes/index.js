const express = require('express');
const router = express.Router();
const exerciseCtrl = require("../controllers/exercise.js")
const mongoose = require("mongoose");
let Exercise = mongoose.model("Exercise");

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

router.post("/exercise/new/", exerciseCtrl.addNewExercise)
router.get("/exercise/", exerciseCtrl.exerciseQuery)

module.exports = router

