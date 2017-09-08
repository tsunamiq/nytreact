var express = require("express");

var articleController = require("../controllers/articleController");

var router = new express.Router();

// Get all saved articles
router.get("/api/saved", articleController.collect);
// Create a new saved article using data passed in req.body
router.post("/api/saved", articleController.add);
//delete saved entry
router.delete("/api/saved/:id", articleController.destroy);

module.exports = router;
