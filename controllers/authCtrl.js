var express = require('express'),
	router = express.Router();


router.get('/', function (req, res, next) {
	res.render('auth/myHomepage');
});


router.get('/schools/', function (req, res) {
	res.render('auth/schools/search');
});

router.get('/schools/search/:q', function (req, res) {
	var schoolName = req.query.q;
	res.render('auth/schools/show', {
		results: results
	});
});
module.exports = router;