var express = require('express'),
	router = express.Router(),
	bcrypt = require('bcrypt'),
	passport = require('passport'),
	ensureLogin = require('./ensureLogin'),
	db = require('../models'),
	flash = require('express-flash'),
	sequealize = require('sequelize'),
	bodyParser = require('body-parser');

// when the user clicks the "log in", a get request to "user" is made. Renders their homepage if user and password match; otherwise, sends an error.  
router.post('/signin', passport.authenticate('local', {
	successRedirect: '/user/myHomepage',
	failureRedirect: '/signin'
}));

router.post('/signup', function (req, res, next) {
	if (!req.body.password || !req.body.username) {
		req.flash('info', 'Please choose a username and password that you will remember.');
		return res.redirect('/signup');
	} else if (req.body.password.length < 5) {
		req.flash('info', 'Please try a little bit harder to come up with a secure password. You must use at least 5 characters.');
		return res.redirect('/signup');
	}
	db.user.create({
			username: req.body.username,
			password: bcrypt.hashSync(req.body.password, 10)
		}, {
			fields: ['username', 'password']
		})
		.then(function (user) {
			req.login(user, function () {
				req.flash('info', 'Welcome ' + user.username + ' .');
				return res.redirect('/user/myHomepage');
			});
		})
		.catch(db.sequelize.ValidationError, function (err) {
			req.flash('info', 'Username allready exist. Please choose a different user name.');
			return res.redirect('/');
		})
		.catch(next);
});

router.get('/logout', function (req, res, next) {
	req.session.destroy(function (err) {
		//req.flash('info', 'Logout');

		return res.redirect('/');
	});
});

router.get('/myHomepage', function (req, res, next) {
	res.render('/user/myHomepage')
});

module.exports = router;