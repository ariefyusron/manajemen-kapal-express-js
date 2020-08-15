require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const saltRounds = 10;

const indexRouter = require('./routes/index');
const kapalRouter = require('./routes/kapal');
const userRouter = require('./routes/user');
const kapalTypeRouter = require('./routes/kapalType');
const surveyTypeRouter = require('./routes/surveyType');
const rabRouter = require('./routes/rab');
const standarTarifRouter = require('./routes/standarTarif');
const persetujuanRab = require('./routes/persetujuanRab');
const dashboard = require('./routes/dashboard');
const history = require('./routes/history');

const app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.jwt = jwt;
  req.secretKey = process.env.JWT_SECRET_KEY;
  req.bcrypt = bcrypt;
  req.saltRounds = saltRounds;
  next();
});

app.use('/', indexRouter);

// api v1
app.use('/api/v1/kapal', kapalRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/kapal-type', kapalTypeRouter);
app.use('/api/v1/survey-type', surveyTypeRouter);
app.use('/api/v1/rab', rabRouter);
app.use('/api/v1/standar-tarif', standarTarifRouter);
app.use('/api/v1/persetujuan-rab', persetujuanRab);
app.use('/api/v1/dashboard', dashboard);
app.use('/api/v1/history', history);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
