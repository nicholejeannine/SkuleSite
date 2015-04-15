var passport = require('passport');
var bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
		// set the field name here
		usernameField: 'username',
		passwordField: 'password'
	},
	function (username, password, done) {
		/* get the username and password from the input arguments of the function */


		// query the user from the database
		// don't care the way I query from database, you can use
		// any method to query the user from database
		user.findOne({
				where: {
					username: username
				}
			})
			.then(function (user) {
				if (!user) {
					return done(null, false, {
						message: "The user is not exist"
					});
				}
				// if the user is not exist
				bcrypt.compare(password, user.password, function (err, result) {
					if (!result) return done(null, false, {
						message: "Wrong password"
					});
					return done(null, user);
				});

			})
			.catch(function (err) {
				// if command executed with error
				return done(err);
			});
	}
));

module.exports = function (req, res, next) {
	passport.initialize()(req, res, next);
	passport.session()(req, res, next);
};