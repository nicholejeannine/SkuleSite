var express = require('express'),
	router = express.Router(),
	ensureLogin = require('./ensureLogin'),
	db = require('../models'),
	flash = require('express-flash'),
	bodyParser = require('body-parser'),
	scraper = require('./scraper');

// When a request is made in the quicksearch text box, return the page corresponding to the short info of the school, if it is found.
// If found, get the original url to determine if the user is signed in.  Prompt the user to sign in if they are not. If they are, display the button "add to my schools".

router.get('/schools', function (req, res) {
	res.render('/schools/search');
});

router.get('/schools/search', function(req, res){
	var schoolName = req.query.q;
 var results = scraper(schoolName);
	res.render('/schools/show', {
		results: results
			   });
});
module.exports = router;