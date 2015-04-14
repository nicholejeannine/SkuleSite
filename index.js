var express = require('express'),
	// DO I NEED TO USE BODY PARSER HERE? IF I CALL IT DIRECTLY ON THE POST ROUTES?
	mainCtrl = require('./controllers/mainCtrl.js'),
	userCtrl = require('./controllers/userCtrl.js');
/**/
var app = express();

app.set('view engine', 'ejs');

app.use('/', mainCtrl);
app.use(express.static(__dirname + "/public"));

/*// DO I NEED THIS HERE?
app.use(bodyParser.urlencoded({
	extended: false
}));*/


app.use('/user/', userCtrl);

/* require your controllers and set app to use them, like this:

app.use('/articles',require('./controllers/articles.js'));

*/




app.listen(process.env.PORT || 3000, function () {
	console.log("Server listening.");
});