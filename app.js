var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var bodyParser = require('body-parser');
var dotenv = require('dotenv')
var mongoose = require('mongoose')

dotenv.config()
// var routes = require('./routes/index');
// var users = require('./routes/users');
// var post = require('./routes/post')
// var about = require('./routes/about')
// var category = require('./routes/category')
// // var edit = require('./routes/edit')
var api = require('./routes/api')
var admin  = require('./routes/admin')

var app = express();
if( mongoose.connect(process.env.MONGODB) ){
  console.log('connected to mongodb: '+process.env.MONGODB)
}else{
  throw new Error('mongodb not connected.')
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(favicon(__dirname+'/public/images/favicon.ico'))

// app.use(logger('dev'));
const sess = {
  secret: 'a  secret key',
  maxAge: 3600,
  cookie: {},
  resave: false,
  saveUninitialized: true,
}
app.use(session(sess))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use('/img', express.static(path.join(__dirname, 'public', 'images')))
app.use('/js', express.static(path.join(__dirname, 'public', 'javascripts')))
app.use('/css', express.static(path.join(__dirname, 'public', 'stylesheets')))
app.use('/modules', express.static(path.join(__dirname, 'node_modules')))

// app.use('/', routes);
// app.use('/users', users);
// app.use('/post',post)
// app.use('/about',about)
// app.use('/cat',category)
// app.use('/edit',edit)
app.use('/api', api)
app.use('/admin', admin)
app.route('*')
.get((req, res)=>{
  res.render('index.jade')
}) 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
