var express = require('express');
var router = express.Router();

// get request made to home page. Response: "here's your generic home page."
router.get('/', function (req, res) {
	console.log(req.user);
	res.render('main/index', ({
		signedIn: req.isAuthenticated(),
	}));
});

//GET /about  page is requested, respond with the static "about" page.
router.get('/about', function (req, res) {
	res.render('main/about', ({
		signedIn: req.isAuthenticated(),
	}));
});

// signin page is requested, respond with the signin page.
router.get('/signin', function (req, res) {
	res.render('main/signin', ({
		signedIn: req.isAuthenticated(),
	}));
});


//sign-up page is requested, respond with the signup page.
router.get('/signup', function (req, res) {
	res.render('main/signup', ({
		signedIn: req.isAuthenticated(),
	}));
});



module.exports = router;