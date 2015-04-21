var express = require('express'),
	router = express.Router(),
	mybug = require("debug"),
	db = require('../models'),
	session = require('express-session');

/* IMPORTANT!!! DO NOT DELETE!!! ACCESS FROM ANYWHERE IN AUTH:
	//var username = req.user['dataValues']['username']; */

router.get('/', function (req, res, next) {
	var greenList = [],
		yellowList = [],
		orangeList = [],
		greyList = [];

	var query = {
		'where': {
			'username': req.user['dataValues']['username']

		}
	};

	db.userschool.findAll(query).then(function (schools) {
		var index = 0;
		var mySchools = schools.map(function (school, index) {
			return {
				unitId: schools[index]['dataValues']['unitId'],
				schoolname: schools[index]['dataValues']['schoolname'],

				color: schools[index++]['dataValues']['color']
			}
		});


		mySchools.forEach(function (school) {
			if (school['color'] == 1) {
				greyList.push(school);
			} else if (school['color'] == 2) {
				yellowList.push(school);
			} else if (school['color'] == 3) {
				orangeList.push(school);
			} else if (school['color'] == 4) {
				greenList.push(school);
			}
		});
	}).then(function () {

		res.render('auth/myHomepage', {
			values: {
				welcomeName: req.user['dataValues']['username'],
				greenList: greenList,
				yellowList: yellowList,
				orangeList: orangeList,
				greyList: greyList
			}
		});
	});
});

router.get('/about', function (req, res) {
	res.render('/main/about');
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

router.post('/', function (req, res) {
	var unitId = req.body.unitId;
	var schoolname = req.body.schoolname;
	var username = req.user['dataValues']['username'];
	db.userschool.findOrCreate({
			where: {
				username: username,
				unitId: unitId,
				schoolname: schoolname,
				color: this.color || 1
			}
		}).then(function (created) {
			res.redirect('/auth');
		})
		//	});
		//	res.redirect('/');
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