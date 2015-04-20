var express = require('express'),
	router = express.Router(),
	mybug = require("debug"),
	db = require('../models'),
	session = require('express-session');

/* IMPORTANT!!! DO NOT DELETE!!! ACCESS FROM ANYWHERE IN AUTH:
	//var username = req.user['dataValues']['username']; */

router.get('/', function (req, res, next) {
	var username = req.body.globalUsername;
	console.log("this  dot user", this.user);

	res.render('auth/myHomepage', {
		welcomeName: req.user['dataValues']['username'],
		greenList: [17, 33, 12, 4],
		yellowList: [4, 5, 3, 4],
		orangeList: [54, 25, 224, 464],
		greyList: [3333, 555, 11],
	});
});


router.get('/search/', function (req, res) {
	var query = {};

	if (req.query.q) {
		query = {
			'where': {
				'name': {
					'$ilike': '%' + req.query.q + '%'
				}
			}
		};
	}
	// will return an array of all the articles, plus a bunch of other miscellaneous data.  An array of items with data values and not really what we want.  What we want to do is map the articles to get the actual values.
	if (req.query.q) {
		db.school.findAll(query).then(function (schools) {
			var index = 0;
			var mySchools = schools.map(function (school, index) {
				return {
					unitId: schools[index]['dataValues']['unitId'],
					name: schools[index]['dataValues']['name'],
					address: schools[index]['dataValues']['address'],
					website: schools[index++]['dataValues']['website']
				}
			})

			console.log(mySchools);
			res.render('auth/search', {
				schools: mySchools,
				searchTerm: req.query.q || ''
			});
		});
	} else {
		res.render('auth/search', {
			schools: '',
			searchTerm: ''
		});
	}
});

router.post('/search/:id/new', function (req, res) {
	var unitId = req.param.id;
	var color = 1;
	var currentUser = session.getUser();
	console.log(currentUser);
	db.userschools.create({
		where: {
			username: currentUser,
			unitId: unitId,
			color: color
		}
	});
});









/*router.get('schoolsearch/:q', function (req, res) {


	res.render('auth/show', {


	});
});

router.post('', function (req, res) {


	res.redirect('/');
});

router.delete('', function (req, res) {


	res.render('auth/schools/show', {


	});
});*/



module.exports = router;