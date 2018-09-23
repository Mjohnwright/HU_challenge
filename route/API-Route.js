// Grabbing our models
var db = require("../model");

module.exports = function(app) {


  // POST route for saving a new todo. You can create an email lead using the data on req.body
  app.post("/api/email", function(req, res) {
    console.log("posted");
  });

};
