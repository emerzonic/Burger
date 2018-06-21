const express = require('express'),
       exphbs = require("express-handlebars"),
   bodyParser = require('body-parser'),
       router = require('./controllers/burgers_controllers');

const app = express();

// App config
const PORT = process.env.PORT || 8088;

app.use(router);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static("public"));

//Handlebars config
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// Application server.
app.listen(PORT, function () {
  // Log (server-side) server start message
  console.log("Server listening on: http://localhost:" + PORT);
});