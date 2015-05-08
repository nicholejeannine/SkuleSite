var express = require('express');
var db = require('../models');
session = require('express-session');


var ensureLogin = function(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash('danger', 'You can\'t go there. Please log in or sign up if you want to see that page!');
        res.redirect('/');
    }
};

module.exports = ensureLogin;
