var express = require('express'),
	router = express.Router(),

db.user.findOne({
		where: {
			username: req.param.username
		}
	}).then(function (user) {
		db.userschools.findAll({
			where: {
				db.userschools.userId: user.id
			}
		}).spread(function (schools) {

			res.render('user/myHomepage', {
				schools: schools
			})
		}).catch(err) {
			console.log('error!', err);
			next();
		}
	});