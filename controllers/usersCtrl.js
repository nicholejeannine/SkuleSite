var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var db = require('../models');
var session = require('express-session');


//gets the request for the user's homepage, and renders it
router.get('/', function(req, res) {
    res.render('users/myHomepage');
});


// gets the request for the search for a school page, and renders it
router.get('/search', function(req, res) {
    // rendering of regular search page:
    // res.render('users/search');
    // rendering of advanced search page:
    res.render('users/advSearch');
});


//gets the request for results from the search page, and renders it.
router.get('/show', function(req, res) {
    // define q as the user's search request query thingie.
    // display the results for one search.
    res.render('users/show');
})

// gets the request for the detailed results for their school, and displays that
router.get('/show/:id/details', function(req, res) {
    res.render('users/showMore');
});


// a route to post a new favorite school
router.post('/', function(req, res) {
    // some logic for adding a new school to the user's favorites. Then reoute them back to the search page.
    res.redirect('users/')
});


// a route to edit stuff on the user's homepage.
router.put('/', function(req, res) {

    // some logic to edit the stuff on the user's homepage.
    res.redirect('/');
});

router.delete('/:id', function(req, res) {
    res.redirect('users');
});

module.exports = router;
