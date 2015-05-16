var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var db = require('../models');
var session = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var chalk = require('chalk');

// protects the route by verifying that the current user is authorized to view the current page
router.use(function(req,res,next){
 if (req.session.passport.user.username) {
    console.log(chalk.white.bold.underline("Value of req.session.passport.user.id: " + (req.session.passport.user.id || "false")));
    console.log(chalk.white.bold.underline("Value of req.session.passport.user.username: " + (req.session.passport.user.username || "false")));
    next();
} else {
    req.flash("danger", "you must be logged in in order to do that!");
    res.redirect('/auth/login');
}
});

// hooray for route chaining!!
router.route('/').get(function(req, res){
    res.render('users/myHomepage', {
        username: req.session.passport.user.username
    });
}).post(function(req, res) {
    // some logic for adding a new school to the user's favorites. Then reoute them back to the search page.
    res.redirect('/users')
}).put(function(req, res) {
    // some logic to edit the stuff on the user's homepage.
    res.redirect('/users');
});  

router.delete('/:id', function(req, res) {
 // some logic to remove school from users favorites in the database.
 res.redirect('/users');
});


// displays the blank "search for a school" page
router.get('/search', function(req, res) {
    // rendering of regular search page:
    // res.render('users/search');
    // rendering of advanced search page:
    res.render('users/advSearch');
});


// displays search results after initial search - will return all matches as clickable links.
router.get('/show', function(req, res) {
    // define q as the user's search request query thingie.
    // display the results for one search.
    res.render('users/show');
})

// displays the "more details" page a link has been clicked.
router.get('/show/:id', function(req, res) {
    res.render('users/showMore');
});




module.exports = router;
