var express = require('express'),
	router = express.Router(),
	bcrypt = require('bcrypt'),
	mybug = require("debug"),
	passport = require('passport'),
	ensureLogin = require('./ensureLogin'),
	db = require('../models'),
	flash = require('express-flash'),
	bodyParser = require('body-parser');

// when the user clicks the "log in", a get request to "user" is made. Renders their homepage if user and password match; otherwise, sends an error.  
router.post('/signin', passport.authenticate('local', {
	successRedirect: '/auth',
	failureRedirect: '/'
}));

router.post('/signup', function (req, res, next) {
	var doFlash = req.flash();
	if (!req.body.password || !req.body.username) {
		req.flash('info', 'Please choose a username and password.');
		return res.render('main/signup', doFlash);
	} else if (req.body.password.length < 5) {
		req.flash('danger', 'Please try a little bit harder to come up with a secure password. You must use at least 5 characters.');
		return res.render('/signup');
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
				res.redirect('/user/myHomepage');
			});
		})
		.catch(db.sequelize.ValidationError, function (err) {
			req.flash('info', 'Username allready exist. Please choose a different user name.');
			return res.redirect('/main/signin');
		})
		.catch(next);
});

router.get('/logout', function (req, res, next) {
	req.session.destroy(function (err) {
		//req.flash('info', 'Logout');

		return res.redirect('/');
	});
});



module.exports = router;