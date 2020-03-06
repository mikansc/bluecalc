require('dotenv').config();

const createError = require('http-errors');
const engine = require("ejs-mate");
const express = require('express');
const favicon = require("serve-favicon");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require("passport");
const User = require("./models/User");
const session = require("express-session");
const mongoose = require("mongoose");
const methodOverride = require("method-override");



// require routes
const index = require('./routes/index');
const materials = require('./routes/materials');
const products = require('./routes/products');
const users = require('./routes/users');

const app = express();

// DB Connection
mongoose.connect("mongodb://localhost:27017/bluecalc", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("BLUECALC Database Connected!");
});

// use ejs-locals for all ejs templates
app.engine("ejs", engine);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, "public/images/", "favicon.ico")));
app.use(methodOverride("_method"));

// add moment to every view
// app.locals.moment = require('moment');

// Configure passport and Sessions
app.use(
  session({
    secret: "cartonagem faz bem pra mente",
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// set local variables middleware
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.title = "Calculadora Blue Line";
  res.locals.success = req.session.success || "";
  delete req.session.success;
  res.locals.error = req.session.error || "";
  delete req.session.error;
  next();
});


// Mount routes
app.use('/', index);
app.use('/dashboard/materials', materials);
app.use('/dashboard/products', products);
app.use('/u', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  console.log(err.message);
  req.session.error = err.message;
  res.redirect("back");
});

module.exports = app;
