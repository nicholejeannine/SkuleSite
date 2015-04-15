var express = require('express'),
	bodyParser = require('body-parser'),
	mainCtrl = require('./controllers/mainCtrl.js'),
	userCtrl = require('./controllers/userCtrl.js'),
	schoolCtrl = require('./controllers/schoolCtrl.js'),
	user = require('./models/user');

var app = express();

var loggedIn = express(); // the sub app

loggedIn.get('/', function (req, res) {
  console.log(admin.mountpath); // /admin
  res.render('My Homepage');
})

app.use('/admin', admin); // mount the sub app

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
	extended: false
}));

// My debugging thingie - outputs the current time, method and originating URL of each request.
app.use(function (req, res, next) {
	var time = new Date().toTimeString();
	console.log(time + ":  attempting " + req.method + " on " + req.originalUrl);
	next();
});

// attempting to do the authentication bit.
var passport = require('passport');
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
		user.find({
				where: {
					username: username
				}
			})
			.success(function (user) {

			if (user) {
				
			}
				if (!user)
				// if the user is not exist
					return done(null, false, {
					message: "The user is not exist"
				});
				else if (!hashing.compare(password, user.password))
				// if password does not match
					return done(null, false, {
					message: "Wrong password"
				});
				else
				// if everything is OK, return null as the error
				// and the authenticated user
					return done(null, user);

			})
			.error(function (err) {
				// if command executed with error
				return done(err);
			});
	}
));


app.use('/', mainCtrl);
app.use('/user/', userCtrl);
app.use('/schools/', schoolCtrl);
app.use(express.static(__dirname + "/public"));


app.listen(process.env.PORT || 3000, function () {
	console.log("Server listening.");
});