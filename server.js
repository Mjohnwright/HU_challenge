// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./model");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./route/API-Route.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});






// var Sequelize = require('sequelize');
// //var DataTypes = require('mysql');

// // Server
// var express = require('express')
// var app = express();
// var bodyParser = require("body-parser");

// var PORT = process.env.PORT || 8080;

// // Requiring our model & controller for syncing
// var db = require("./model");
// require("./controllers/HTML-Routes.js")(app);

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// // parse application/json
// app.use(bodyParser.json());

// // Requiring our model & controller for syncing
// var db = require("./model");
// require("./controllers/HTML-Routes.js")(app);

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world')
// })

// var connection = new Sequelize('health_union', 'root', 'root', {
//   dialect: 'mysql',
//   pool: {
//     max: 10,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });



// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//       console.log("App listening on PORT " + PORT);
//   })
// });



