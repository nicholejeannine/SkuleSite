var express = require('express'),
	router = express.Router(),
	ensureLogin = require('./ensureLogin'),
	db = require('../models'),
	flash = require('express-flash'),
	bodyParser = require('body-parser');


router.get('user/:username/', function (req, res, next) {
	db.user.findOne({
		where: {
			username: req.param.username
		}
	}).then(function (user) {
			db.userschools.findOrCreate({where: {
				db.userschools.userId: user.id 
			} }).then(function(userschool, created){
				if (!created){
					db.userschools.findAll(db.school, where: userschool, function(user){
				
		
			}).then(function (schools) {
			console.log(schools);
			req.flash('info', 'Welcome ' + user.username + ' .');
			res.render('user/:username/myHomepage', function (req, res, next) {
				signedIn: true,
				schools: schools
			});

		}).catch(err) {
			console.log('error!', err);
			next();
		}



	});

return res.redirect('/');
})
db.userschools.findAll({
where: {

}
})
});