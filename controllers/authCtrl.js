var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
var passport = require('passport');
var db = require('../models');
var session = require('express-session');
var flash = require('connect-flash');
var ensureLogin = require('connect-ensure-login');
var chalk = require('chalk');


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});


router.get('/', function(req, res) {
    res.redirect('auth/login');
});

// gets the login page
router.get('/login', function(req, res) {
    res.render('auth/login');
});

// gets the register page
router.get('/register', function(req, res) {
    res.render('auth/register');

});


// login route 

router.post('/login', urlencodedParser, passport.authenticate('local', {
    successReturnToOrRedirect: '/users',
    failureRedirect: '/auth/login'
}));



// posts to sign up and request a newly created user
router.post('/register', urlencodedParser, function(req, res, next) {
    // makes sure both password and username are filled out.
    if (!req.body.password || !req.body.username) {
        req.flash('warning', 'Please choose a name and password to create an account.');
        res.render('auth/register');
    } else if (req.body.password.length < 5) {
        req.flash('warning', 'Please try a little bit harder to think of a secure password.  You must use at least 5 characters.');
        res.render('auth/register');
    } else if (!req.body.passwordCheck) {
        req.flash('warning', 'Please verify your password.');
        res.render('auth/register');
    } else if (req.body.password.toString() !== req.body.passwordCheck.toString()) {
        req.flash('warning', 'Password fields do not match. Please re-enter your password.');
        res.render('auth/register');
    } else {

        req.session.username = req.body.username;
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
                if (user) {
                    req.flash('danger', 'Username already exists.');
                    res.redirct('/auth/login');
                }

                if (created) {
                    res.render('users/', {
                        username: username
                    });
                }
            }).catch(function(error) {
                if (error) {
                    if (Array.isArray(error.errors)) {
                        error.errors.forEach(function(errorItem) {
                            req.flash('danger', errorItem.message);
                        });
                    } else {
                        req.flash('danger', error.message);
                    }
                    res.redirect('/');

                } else {
                    req.flash('danger', 'unknown error occurred during user registration.');
                    res.redirect('/');
                };
            });
        }
    });

// a route to logout the user and redirect them to the home page.
router.get('/logout', function(req, res) {
    delete req.session.passport.user;
    req.session.destroy(function(err) {
        console.log(chalk.red.underline(err));
    });
    req.logout();


    res.redirect('/');

});

module.exports = router;
