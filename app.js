require('dotenv').config();
const pgtools = require('pgtools');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
const PassportLocal = require('passport-local').Strategy;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { initSequelize } = require('./services/initService');
const testRouter = require('./routes/test');
// DB
const category = require('./routes/category');
const signs = require('./routes/signs');

const peopletest = require('./routes/peopletest');


var cors = require('cors')
const app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// DataBase config
const config = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST
}

console.log(`pool. user: ${config.user} db: ${process.env.POSTGRES_DATABASE} host: ${config.host} pass: ${config.password} port: ${config.port}`)

/*pgtools.createdb(config, process.env.POSTGRES_DATABASE, (err, res) => {
  if (err) {
      if(err.name === 'duplicate_database'){
          console.log('Database already exists');
      }
      else{
        console.log("err")
          console.log(err);
      }
  }
  
  console.log('Database has been created successfully!');
  initSequelize();

});*/
initSequelize();

console.log("post base");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
// DB
app.use('/', category);
app.use('/', signs);
app.use('/', peopletest);

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
