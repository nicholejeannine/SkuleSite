var express = require('express'),
	router = express.Router(),
	bcrypt = require('bcrypt'),
	passport = require('passport'),
	ensureLogin = require('./ensureLogin'),
	db = require('../models'),
	bodyParser = require('body-parser');

// when the user clicks the "log in", a get request to "user" is made. Renders their homepage if user and password match; otherwise, sends an error.  
router.post('/signin', passport.authenticate('local', {
	successRedirect: '/user/myHomepage',
	failureRedirect: '/signin'
}));

router.post('/signup', function (req, res, next) {
	if (!req.body.password) {
		req.flash('info', 'No password.');
		return res.redirect('/user/signup');
	}
	db.user.create({
			username: req.body.username,
			password: bcrypt.hashSync(req.body.password, 10)
		}, {
			fields: ['username', 'password']
		})
		.then(function (user) {
			req.login(user, function () {
				req.flash('info', 'Welcome.');
				return res.redirect('/');
			});
		})
		.catch(db.sequelize.ValidationError, function (err) {
			req.flash('info', 'Username allready exist.');
			return res.redirect('/signup');
		})
		.catch(next);
});

router.get('/logout', function (req, res, next) {
	req.session.destroy(function (err) {
		req.flash('info', 'Logout');

		return res.redirect('/'); //Inside a callback… bulletproof!
	});
});

router.get('/myHomepage', function (req, res, next) {
	res.render('/user/myHomepage');
})
module.exports = router;