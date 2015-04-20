var express = require('express'),
	mybug = require("debug"),
	db = require('../models'),
	userschool = db.userschool,
	school = db.school,
	user = db.user;

function doStuff() {

	var q = "college";

	var query = {};

	if (q) {
		query = {
			'where': {
				'name': {
					'$ilike': '%' + q + '%'
				}
			}
		};
	}
	// will return an array of all the articles, plus a bunch of other miscellaneous data.  An array of items with data values and not really what we want.  What we want to do is map the articles to get the actual values.

	/*f (q) {
			db.school.findAll(query).then(function (schools) {


				console.log(schools[0]['dataValues']['unitId']);

			});*/


	db.school.findAll(query).then(function (schools) {
		var index = 0;
		var mySchools = schools.map(function (school, index) {
			return {
				unitId: schools[index]['dataValues']['unitId'],
				name: schools[index]['dataValues']['name'],
				address: schools[index]['dataValues']['address'],
				website: schools[index++]['dataValues']['website']
			}
		});

		console.log(mySchools);


	});

};


doStuff();








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



/*greenList: {
		type: DataTypes.ARRAY[Sequelize.INTEGER[100]],
		get: function () {

			return this.getDataValue();
		},
		set: function (value, method) {
			var tempArray = this.getDataValue();
			if (method = 'add') {
				tempArray = tempArray.push(value);

			}
			if (method = 'delete') {
				var index = tempArray.indexOf(value);
				if (index > -1) {
					tempArray = tempArray.splice(index, 1);
				} else {
					tempArray = tempArray;
				}

			}
			this.setDataValue(tempArray);
		},
		getCount: function () {
			return this.length;
		}
	},
	yellowList: {
		type: DataTypes.ARRAY[Sequelize.INTEGER[100]],
		get: function () {

			return this.getDataValue();
		},
		set: function (value, method) {
			var tempArray = this.getDataValue();
			if (method = 'add') {
				tempArray = tempArray.push(value);

			}
			if (method = 'delete') {
				var index = tempArray.indexOf(value);
				if (index > -1) {
					tempArray = tempArray.splice(index, 1);
				} else {
					tempArray = tempArray;
				}

			}
			this.setDataValue(tempArray);
		},
		getCount: function () {
			return this.length;
		}
	},
	orangeList: {
		type: DataTypes.ARRAY[Sequelize.INTEGER[100]],
		get: function () {

			return this.getDataValue();
		},
		set: function (value, method) {
			var tempArray = this.getDataValue();
			if (method = 'add') {
				tempArray = tempArray.push(value);

			}
			if (method = 'delete') {
				var index = tempArray.indexOf(value);
				if (index > -1) {
					tempArray = tempArray.splice(index, 1);
				} else {
					tempArray = tempArray;
				}

			}
			this.setDataValue(tempArray);
		},
		getCount: function () {
			return this.length;
		}
	},
	greyList: {
		type: DataTypes.ARRAY[Sequelize.INTEGER[100]],
		get: function () {

			return this.getDataValue();
		},
		set: function (value, method) {
			var tempArray = this.getDataValue();
			if (method = 'add') {
				tempArray = tempArray.push(value);

			}
			if (method = 'delete') {
				var index = tempArray.indexOf(value);
				if (index > -1) {
					tempArray = tempArray.splice(index, 1);
				} else {
					tempArray = tempArray;
				}

			}
			this.setDataValue(tempArray);
		},
		getCount: function () {
			return this.length;
		}
	}


var db = require('../models'),
	user = db.user;

function getId(name) {

	var aList = user.greenList.get({
		where: {
			username: name
		}
	})

	console.log(aList);

}



getId("Marion");*/

/*module.exports = util;*/