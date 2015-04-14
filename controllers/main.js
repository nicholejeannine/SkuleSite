var express = require('express');
var router = express.Router();

//root route  -- GET /
//home page route
router.get('/', function (req, res) {
	console.log('home page route');
	res.render('main/index');
});

//GET /about
router.get('/about', function (req, res) {
	res.render('main/about');
});


router.get('/signin', function (req, res) {
	res.render('main/signin');
});



module.exports = router;