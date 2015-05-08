var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
var passport = require('passport');
var db = require('../models');



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

router.post('/login', urlencodedParser, function(req, res, next) {
    // makes sure both password and username are filled out.
    if (!req.body.password || !req.body.username) {
        req.flash('warning', 'Please enter username and password to create an account');
        next();
    }

    var username = req.body.username;
    // Some logic here to create a new user or not
    passport.authenticate('local', {
            badRequestMessage: 'You must enter e-mail and password.'
        },
        function(err, user, info) {
            if (user) {
                req.login(user, function(err) {
                    if (err) throw err;
                    req.flash('success', 'welcome back!');
                    res.render('users/' + username + '/myHomepage');
                });
            } else {
                var errorMsg = info && info.message ? info.message : 'Unknown error.';
                req.flash('danger', errorMsg);
                res.redirect('/auth');
            }
        })(req, res);
});

// posts to sign up and request a newly created user
router.post('/register', urlencodedParser, function(req, res, next) {
    // makes sure both password and username are filled out.
    if (!req.body.password || !req.body.username) {
        req.flash('warning', 'Please enter username and password to create an account');
        res.render('auth/register');
    }
    // makes sure validation password is also filled out
    if (!req.body.passwordCheck) {
        req.flash('warning', 'Please verify your password.');
        res.render('auth/register');
    }
    // ensures password is at least 5 characters.
    if (req.body.password.length < 5) {
        req.flash('danger', 'Please try a little bit harder to think of a secure password.  You must use at least 5 characters.');
        res.render('auth/register');
    }

    // checks that email fields match
    if (req.body.password !== req.body.passwordCheck) {
        req.flash('warning', 'Password fields do not match. Please re-enter your password.');
        res.render('auth/register');
    }


    var userQuery = {
        username: req.body.username
    };
    var userData = {
        username: req.body.username,
        password: req.body.password
    };

    // if validation succeeds, check the database for existing user by same name.
    db.user.findOrCreate({
        where: userQuery,
        defaults: userData
    }).spread(function(user, created) {
        if (created) {
            req.flash('Welcome, ' + userData.username);
            res.redirect('/users/' + req.body.username + '/myHomepage');
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
    // res.redirect('/users');
});

// a route to logout the user and redirect them to the home page.
router.get('/logout', function(req, res) {
    delete req.session.user;
    res.redirect('/');
})

module.exports = router;
