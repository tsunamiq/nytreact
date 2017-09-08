var Article = require("../models/article");

module.exports = {
  // This method is used to query all saved articles
   collect: function(req, res) {
    Quote.find({}).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles creating new quotes
  add: function(req, res) {
    Quote.create(req.body).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },

  // This method handles deleting quotes
  destroy: function(req, res) {
    Quote.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};