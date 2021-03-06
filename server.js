var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// session middleware
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// config/Passport
require('./config/passport');

// declare routes
var indexRouter = require('./routes/index')
var loginRouter = require('./routes/login')
var ridesRouter = require('./routes/rides')
var commentsRouter = require('./routes/comments');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// mount the session middleware
app.use(session({
  secret: 'Agent Orange',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user; // assinging a property to res.locals, makes that said property (user) availiable in every
  // console.log(res.locals.user, '<- this is my user')
  // single ejs view
  next();
});

// mount all routes with appropriate base paths
app.use('/', indexRouter);
app.use('/rides', ridesRouter);
app.use('/', commentsRouter);
app.use('/', loginRouter);



// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that');
});

module.exports = app;
