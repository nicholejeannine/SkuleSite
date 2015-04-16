var express = require('express');
var router = express.Router(),
	ensureLogin = require('./ensureLogin'),
	db = require('../models'),
	flash = require('express-flash'),
	bodyParser = require('body-parser'),
	scraper = require('./scraper');

// When a request is made in the quicksearch text box, return the page corresponding to the short info of the school, if it is found.
// If found, get the original url to determine if the user is signed in.  Prompt the user to sign in if they are not. If they are, display the button "add to my schools".

router.get('/schools', function (req, res) {

	var schoolName = req.query.q;

	res.render('/schools/show')
});


module.exports = router;