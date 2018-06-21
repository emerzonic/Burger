//requiring packages and models
const express = require('express'),
   bodyParser = require('body-parser'),
       burger = require('../models/burger');

    //create express router
    const router = express.Router();

//router use body-parser
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
    burger.getAllBurgers(function (err, data) {
        if (err) {
            console.log(err);
            res.redirect('/index');
        } else {
            res.render("index.handlebars", {
                burgers: data
            });
        }
    });
});


//post route to submit burger
router.post('/index', function (req, res) {
    burger.addNewBurger("burger_name", "devoured", req.body.burger, false, function (err, data) {
        if (err) {
            console.log(err);
            res.redirect('/index');
        } else {
            res.redirect('/index');
        }
    });
});


//put route to update burger status
router.put('/index/:id', function (req, res) {
    let burgerID = req.params.id;
    burger.updateBurger("devoured", true, "ID", burgerID, function (err, data) {
        if (err) {
            console.log(err);
            res.redirect(303, '/index');
        } else {
            res.redirect(303, '/index');
        }
    });
});

module.exports = router;