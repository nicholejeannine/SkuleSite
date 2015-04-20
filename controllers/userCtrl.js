var express = require('express'),
	router = express.Router(),
	bcrypt = require('bcrypt'),
	mybug = require("debug"),
	passport = require('passport'),
	ensureLogin = require('./ensureLogin'),
	db = require('../models'),
	flash = require('express-flash'),
	bodyParser = require('body-parser');


// Post request comes to the route user/signin and is handled by the passport middleware.  If success, reroutes to the "myHomepage" located on the /auth route. If login fails, user is redirected to the root page. 
router.post('/signin', passport.authenticate('local', {
	successRedirect: '/auth',
	failureRedirect: '/'
}));

// Post request comes in through the /user/singup route
router.post('/signup', function (req, res, next) {
	if (!req.body.password || !req.body.username) {
		res.render('main/signup', {
			alerts: req.flash('warning', 'Please choose a name and password to create an account.')
		});
	} else if (req.body.password.length < 5) {
		req.flash('danger', 'Please try a little bit harder to come up with a secure password. You must use at least 5 characters.');
		res.redirect('/signup');
	}
	// if validation succeeds, create the user account.
	globalUsername = req.body.username;
	db.user.create({
			username: req.body.username,
			password: bcrypt.hashSync(req.body.password, 10)
		}, {
			fields: ['username', 'password']
		})
		.then(function (user) {

			req.login(user, function () {
				res.redirect('/auth');
			});
		})
		.catch(db.sequelize.ValidationError, function (err) {
			res.redirect('/main/signin', {
				alerts: req.flash('info', 'Username already exist. Please choose a different user name.')

			});
		})
		.catch(next);
});

router.get('/logout', function (req, res) {
	req.session.destroy(function (err) {
		res.redirect('/');
	});
});



module.exports = router;