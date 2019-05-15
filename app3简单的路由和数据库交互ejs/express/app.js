var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'),
bodyParser = require('body-parser');// post 请求数据处理
var logger = require('morgan');//日志中间件
var app = express();




//这里处理请求，或可使用 路由组件处理
app.use(bodyParser.json());//处理post请求体数据问题
//引入路由  加载路由控件
var indexRouter = require('./routes');
var usersRouter = require('./routes/users')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//将路由设为中间件，有中间件控制
//在这里的路由解析后到具体文件中还会在路由前拼接一个解析路由
app.use('/', indexRouter);
app.use('/logins', usersRouter);

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
