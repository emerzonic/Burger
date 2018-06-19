var express = require('express');
var burger = require('../models/burger');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

//Catch all routes and redirect to home page
router.get('/', function (req, res) {
    res.redirect('/index');
});


//Home page route
router.get('/index', function (req, res) {
    burger.selectAll(function (data) {
        res.render("index.handlebars", {
            burgers: data
        });
    });
});


//post route to submit burger
router.post('/index', function (req, res) {
    burger.create("burger_name", "devoured", req.body.burger, false, function (err) {
        // res.redirect('/index');
    });
    res.redirect('/index');
});


//put route to update burger status
router.put('/index/:id', function (req, res) {
    var devouredValue = req.body.devoured;
    var burgerID = req.params.id;
    burger.Update("devoured", devouredValue, "ID", burgerID, function (err) {
        // res.redirect('/index');
    });
    res.redirect(303, '/index');
});



module.exports = router;