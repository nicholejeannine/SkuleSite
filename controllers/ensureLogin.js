var express = require('express'),
	router = express.Router(),
	window.myDebug = require("debug"),

	flash = require('express-flash'),
	session = require('express-session');


var ensureLogin = function (req, res, next) {
	if (req.isAuthenticated()) {
		next();
	} else {
		req.flash('You can\'t go there. Please log in or sign up if you want to see that page!');
		res.redirect('/');
	}
};

module.exports = ensureLogin;