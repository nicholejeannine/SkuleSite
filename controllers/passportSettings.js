var db = require('../models');
var passport = require('passport');
var LocalStrategy = require('passport-local');


// creates some authentication logic - this takes care of verifying username and password, and returns either a failure message or a user that can be logged in. 
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
},
function(username, password, done) {
    db.user.find({
        where: {
            username: username
        }
    }).then(function(user) {
        if (user) {
            user.checkPassword(password, function(err, result) {
                if (err) {
                    return done(err);
                }
                if (result) {
                    done(null, user.get());
                } else {
                    done(null, false, {
                        message: 'Invalid username and password combination. Please sign up or reenter your password.'

                    });
                }
            });
        } else {
            done(null, false, {
                message: 'No account exists with that username.  Please sign up for an account, or re-enter your username.'
            });
        }
    });
}
));

/* saves the user to the session, and is called upon login. */
passport.serializeUser(function(user, done) {
    done(null, {id: user.id, username: user.username});
});

// deserializes user
passport.deserializeUser(function(id, done) {
    db.user.find(id).then(function(user) {
        done(null, user.get());
    }).catch(done);
});

module.exports = function(app) {
    app.use(passport.initialize());
    app.use(passport.session());
};
