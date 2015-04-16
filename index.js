var express = require('express'),
	bodyParser = require('body-parser'),
	mainCtrl = require('./controllers/mainCtrl.js'),
	userCtrl = require('./controllers/userCtrl.js'),
	schoolCtrl = require('./controllers/schoolCtrl.js'),
	user = require('./models/user'),
	bcrypt = require('bcrypt'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	flash = require('express-flash'),
	passportSetting = require('./controllers/passportSetting');

var app = express();

app.set('view engine', 'ejs');

// My debugging thingie - outputs the current time, method and originating URL of each request.
app.use(function (req, res, next) {
	var time = new Date().toTimeString();
	console.log(time + ":  attempting " + req.method + " on " + req.originalUrl);
	next();
});

app.use(cookieParser(process.env.SECRET_COOKIE));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: process.env.SESSION_SECRET,

}));

app.use(flash());
passportSetting(app);

app.use(express.static(__dirname + "/public"));
app.use('/', mainCtrl);
app.use('/user/', userCtrl);
app.use('/schools/', schoolCtrl);


app.listen(process.env.PORT || 3000, function () {
	console.log("Server listening.");
});