const express = require('express');
const router = express.Router();
const exerciseCtrl = require("../controllers/exercise.js")
const mongoose = require("mongoose");
let Exercise = mongoose.model("Exercise");

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

// router for exercise api

router.post("/exercise/new/", exerciseCtrl.addNewExercise)
router.get("/exercise/", exerciseCtrl.exerciseQuery)

//router for mtg api

router.post("/mtg/add", sendJsonResponse(res, 200, {message: "add router work"}))
router.put("/mtg/:cardid", sendJsonResponse(res, 200, {message: "router for modify card"}))
router.delete("/mtg/:cardid", sendJsonResponse(res, 200, {message: "router for delete card"}))
router.get("/mtg", sendJsonResponse(res, 200, {message: "router for get card"}))

module.exports = router

