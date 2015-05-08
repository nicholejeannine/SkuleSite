var express = require('express');
var db = require('./models');
var passportSettings = require('./controllers/passportSettings');
var debug = require('debug');
var flash = require('connect-flash');
var mainCtrl = require('./controllers/mainCtrl');
var usersCtrl = require('./controllers/usersCtrl');
var authCtrl = require('./controllers/authCtrl');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var NODE_ENV = process.env.NODE_ENV || 'development';
var BASE_URL = (NODE_ENV === 'production') ? 'https://skulesite.herokuapps.com' : 'http://localhost:3000';
var ensureLogin = require('./controllers/ensureLogin');


// creates an instance of express
var app = express();

// sets express templates to use ejs
app.set('view engine', 'ejs');


// loads session middleware
app.use(session({
    store: new FileStore,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));


//custom middleware - is user logged in (stolen from Lenny)
app.use(function(req, res, next) {
    req.getUser = function() {
        return req.session.user || false;
    }

    //trigger next middleware
    next();
});

// sets up flash messages
app.use(flash());
app.use(function(req, res, next) {
    res.locals.alerts = req.flash();
    next();
});

// loads passport settings into app
passportSettings(app);

// loads routes
// loads public static directory
app.use(express.static(__dirname + '/public'));
app.use('/', mainCtrl);
app.use('/auth', authCtrl);
app.use('/users/', ensureLogin, usersCtrl);

// finally, tells the server to listen for connections
app.listen(process.env.PORT || 3000, function() {
    console.log("Server listening.");
});
