var express = require('express'),
	bodyParser = require('body-parser'),
	mainCtrl = require('./controllers/mainCtrl.js'),
	userCtrl = require('./controllers/userCtrl.js'),
	schoolCtrl = require('./controllers/schoolCtrl.js');

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(function (req, res, next) {
	var time = new Date().toTimeString();
	console.log(time + ":  attempting " + req.method + " on " + req.originalUrl);
	next();
});

app.use('/', mainCtrl);
app.use('/user/', userCtrl);
app.use('/schools/', schoolCtrl);
app.use(express.static(__dirname + "/public"));


app.listen(process.env.PORT || 3000, function () {
	console.log("Server listening.");
});