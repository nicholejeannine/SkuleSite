var express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	db = require('../models'),
	bodyParser = require('body-parser'),
	localStrategy = require('passport-local').Strategy;

// when the user clicks the "log in", a get request to "user" is made. Renders their homepage if user and password match; otherwise, sends an error.  
router.get('/user', ensureLoggedIn('/login'), function (req, res) {
	res.render('user/myHomepage', {
		user: req.user
	});
});


/*

// called when the user clicks on the signin page.
router.get('/user', function (req, res) {

});

// 
router.get('users/signup', function (req, res) {

})


// check to see if that user exists, if not send back an error.
// if the user exists, then see if the password matches. If not, send back an error.
// if the user and password match, then retrieve the user's lists from the users-schools table and redirect them to their homepage.
// will have to set up the homepage using the colors referenced in the table.  
router.get('/user/:username', function (req, res, next) {
	var username = req.params.username;
	//	sql.run('get-user-by-email', [email], function (err, rows) {
	//		if (err) return next(err);
	//		if (!rows.length) return next(404);
	//
	//		return res.json(rows[0]);
	//	});
});




/*passport.use(new LocalStrategy({
				// set the field name here
				usernameField: 'username',
				passwordField: 'password'
			},
			function (username, password, done) {
				/* get the username and password from the input arguments of the function 

    // query the user from the database
    // don't care the way I query from database, you can use
    // any method to query the user from database
    User.find( { where: {username: username}} )
      .success(function(user){
      
        if(!user)
          // if the user is not exist
          return done(null, false, {message: "The user is not exist"});
        else if(!hashing.compare(password, user.password))
          // if password does not match
          return done(null, false, {message: "Wrong password"});
        else
          // if everything is OK, return null as the error
          // and the authenticated user
          return done(null, user);
        
      })
      .error(function(err){
        // if command executed with error
        return done(err);
      });
  }
));*/

/*/*/

module.exports = router;