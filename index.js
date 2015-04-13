var express = require('express'),
	// DO I NEED TO USE BODY PARSER HERE? IF I CALL IT DIRECTLY ON THE POST ROUTES?
	bodyParser = require('body-parser'),
	/**/
	app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use('/', require('./controllers/main.js'));

/* require your controllers and set app to use them, like this:

app.use('/articles',require('./controllers/articles.js'));

*/




app.listen(process.env.PORT || 3000, function () {
	console.log("Server listening.");
});