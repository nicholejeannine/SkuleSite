var express = require('express');
var db = require('../models');
session = require('express-session');


var ensureLogin = function(req, res, next) {
    if (req.isAuthenticated) {
        next();
    } else {
        res.render('/');
    }
};

module.exports = ensureLogin;
