var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var logMiddleware = require('./middleware/logger');
const mongoose = require('mongoose');
const { db } = require('./config/database');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
let customRouter = require('./routes/customs');
let todoRouter = require('./routes/todos');
let movieRouter = require('./routes/movies');
let reviewRouter = require('./routes/reviews');
let userRouter = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(logMiddleware.log);
app.use(logMiddleware.auth);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

app.use('/', indexRouter);
app.use('/api/users', userRouter);
app.use('/api/customs', customRouter);
app.use('/api/todos', todoRouter);
app.use('/api/movies', movieRouter);
app.use('/api/reviews', reviewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
