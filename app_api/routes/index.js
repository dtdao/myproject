const express = require('express');
const router = express.Router();
const exerciseCtrl = require("../controllers/exercise.js")
const mtgCtrl = require("../controllers/mtg.js")
const mongoose = require("mongoose");

// router for exercise api

router.post("/exercise/new/", exerciseCtrl.addNewExercise)
router.get("/exercise/", exerciseCtrl.exerciseQuery)

//router for mtg api

router.post("/mtg/add", mtgCtrl.addNewCard)
router.put("/mtg/:cardid", mtgCtrl.modifyCard)
router.delete("/mtg/:cardid", mtgCtrl.deleteCard)
router.get("/mtg", mtgCtrl.getCard)

module.exports = router

