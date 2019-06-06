const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const exerciseCtrl = require("../controllers/exercise.js")
const mtgCtrl = require("../controllers/mtg.js")
const newsCtrl = require("../controllers/news.js")


let sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
// router for exercise api

router.post("/exercise/new/", exerciseCtrl.addNewExercise)
router.get("/exercise/", exerciseCtrl.exerciseQuery)

//router for mtg api
router.post("/mtg/add", mtgCtrl.addNewCard)
router.put("/mtg/add/:cardid", mtgCtrl.updateCard)
router.put("/mtg/remove/:cardid", mtgCtrl.removeCard)
router.get("/mtg/:cardname", mtgCtrl.getCard)

//router for news API
router.post("/news/add/", newsCtrl.addArticle);

module.exports = router
