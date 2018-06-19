var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var router = require('./controllers/burgers_controllers');

var app = express();

// App PORT setting
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8088;

app.use(router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static("public"));

//Handlebars config
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Application server.
app.listen(PORT, function() {
    // Log (server-side) server start message
    console.log("Server listening on: http://localhost:" + PORT);
  });