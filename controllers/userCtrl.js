var express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	db = require('../models'),
	bodyParser = require('body-parser')

// when the user clicks the "log in", a get request to "user" is made. Renders their homepage if user and password match; otherwise, sends an error.  
router.post('/login', passport.authenticate('local', {
	successRedirect: '/user/myHomepage',
	failureRedirect: '/user/login'
}));

router.post('/', function (req, res, next) {
	if (!req.body.password) {
		req.flash('info', 'No password.');
		return res.redirect('/user/myHomepage');
	}
	db.user.create(req.body, {
			fields: ['username', 'password']
		})
		.then(function (user) {
			req.flash('info', 'Welcome.');
			return res.redirect('/user/myHomepage');
		})
		.catch(db.sequelize.ValidationError, function (err) {
			req.flash('info', 'Username allready exist.');
			return res.redirect('/user/signup');
		})
		.catch(next);
});

module.exports = router;