var express = require('express');
var router = express.Router();

// Retrieves the homepage to show to the viewer.
router.get('/', function(req, res){
	res.render('main/index');
});

// Retrieves the about page to show to the viewer.
router.get('/about', function(req,res){
	res.render('main/about');
});

module.exports = router;

