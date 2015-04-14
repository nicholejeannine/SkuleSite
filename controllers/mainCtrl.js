var express = require('express');
var router = express.Router();

//root route  -- GET /
//home page route
router.get('/', function (req, res) {
	console.log('home page route');
	res.render('main/index', ({
		signedIn: false,
	}));
});

//GET /about  page is requested, respond with the page.
router.get('/about', function (req, res) {
	res.render('main/about');
});

// signin page is requested, respond with the signin page.
router.get('/signin', function (req, res) {
	res.render('main/signin');
});




module.exports = router;