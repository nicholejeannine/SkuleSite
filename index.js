var express = require('express');
var db = require('./models');
var passportSettings = require('./controllers/passportSettings');
var debug = require('debug');
var flash = require('connect-flash');
var mainCtrl = require('./controllers/mainCtrl');
var usersCtrl = require('./controllers/usersCtrl');
var authCtrl = require('./controllers/authCtrl');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var NODE_ENV = process.env.NODE_ENV || 'development';
var BASE_URL = (NODE_ENV === 'production') ? 'https://skulesite.herokuapps.com' : 'http://localhost:3000';

//var cookieParser = require('cookie-parser');
var chalk = require('chalk');

var sassMiddleware = require('sass-stream');
// var srcPath = __dirname + '/sass';
// var destPath = __dirname + '/public/styles';

// creates an instance of express
var app = express();

// sets express templates to use ejs
app.set('view engine', 'ejs');

// loads session middleware
app.use(session({
	store: new FileStore,
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 60000
	}
}));


// sets up flash messages
app.use(flash());
app.use(function(req, res, next) {
	res.locals.alerts = req.flash();
	next();
});



// loads passport settings into app
passportSettings(app);

var ensureLogin = function(req, res, next) {
	if (req.isAuthenticated()) {
		next();
	} else {
		//ensure an empty passport object with no user, since no user is authenticated
		req.session.passport = {};
		res.render('auth/login');
	}
};

// app.use(sassMiddleware({
//     src: express.static(__dirname + '/public/sass');
//     dest: express.static(__dirname + '/public/css');
//     debug: true,
//     outputStyle: 'expanded',
//     prefix:  '/sass'
// }));
// loads public static directory
app.use(express.static(__dirname + '/public'));

//debugging middleware for sessions
//TODO : DELETE THIS ENTIRE BLOCK AFTER /AUTH and /USERS routes are good!
app.use(function(req, res, next){
	console.log(chalk.white.bold.underline("is user authenticated? " + req.isAuthenticated()));
	console.log(chalk.white.bold.underline("Session Object keys at route path " + req.url + ": " + Object.keys(req.session)));
	console.log(chalk.white.bold.underline("Passport (from session) Object keys at route path " + req.url + ": " + Object.keys(req.session.passport)));
	next();

});

// loads routes
app.use('/', mainCtrl);
app.use('/auth', authCtrl);
app.use('/users/', ensureLogin, usersCtrl);


// finally, tells the server to listen for connections
app.listen(process.env.PORT || 3001, function() {
	console.log("Server listening.");
});
