var bcrypt = require('bcrypt');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var passport = require('passport');
var debug = require('debug');
var db = require('../models');


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})


// gets the login page
router.get('/', function(req, res) {
    res.render('auth/login');
});

// gets the register page
router.get('/register', function(req, res) {
    res.render('auth/register');

});


// posts to login page to request info about a returning user 

router.post('/login', urlencodedParser, function(req, res) {
    // Some logic here to create a new user or not
    passport.authenticate('local', {
            badRequestMessage: 'You must enter e-mail and password.'
        },
        function(err, user, info) {
            if (user) {
                req.login(user, function(err) {
                    if (err) throw err;
                    req.flash('success', 'welcome back!');
                    res.render('users/myHomepage');
                });
            } else {
                var errorMsg = info && info.message ? info.message : 'Unknown error.';
                req.flash('danger', errorMsg);
                res.redirect('/auth');
            }
        })(req, res);
});

// posts to sign up and request a newly created user
router.post('/register', urlencodedParser, function(req, res) {
    var userQuery = {
        username: req.body.username
    };
    var userData = {
        username: req.body.username,
        password: req.body.password
    };

    db.user.findOrCreate({
        where: userQuery,
        defaults: userData
    }).spread(function(user, created) {
        if (created) {
            req.flash('Welcome!');
            res.redirect('/users/');
        } else {
            req.flash('danger', 'that username already exists.');
            res.redirect('/auth/register');
        }
    }).catch(function(error) {
        if (error) {
            if (Array.isArray(error.errors)) {
                error.errors.forEach(function(errorItem) {
                    req.flash('danger', errorItem.message);
                });
            } else {
                req.flash('danger', 'unknown error');
                console.log('unknown error occurred during user registration :', error);
            }
        } else {
            req.flash('danger', 'unknown error');
            console.log('error, but no error ...');
        }
        res.redirect('/auth/register');
    })

    // assuming new user is created, send them over  to the signed-in homepage
    res.redirect('/users');
});

// a route to logout the user and redirect them to the home page.
router.get('/logout', function(req, res) {
    delete req.session.user;
    res.redirect('/');
})

module.exports = router;
