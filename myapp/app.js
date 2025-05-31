var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = require('./database/models');



const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");


var app = express();
const session = require('express-session');

app.use(cookieParser());

app.use(session({
  secret: 'Bocaa123', 
  resave: false,
  saveUninitialized: true
}));

//
app.use(function(req, res, next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user;
  }
  next();
});

// 
app.use(async function(req, res, next) {
  try {
    if (req.cookies.user != undefined && req.session.user == undefined) {
      const usuarioId = req.cookies.recordarme;
      const usuario = await db.Usuario.findByPk(usuarioId);
      if (usuario) {
        req.session.user = usuario;   
        res.locals.user = usuario;    
      } else {
        res.clearCookie('recordame');
      }
    }
    next();
  } catch (error) {
    console.error("Error al cargar usuario desde cookie:", error);
    next();
  }
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


//Prefijos//
app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);
//Prefijos//

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
