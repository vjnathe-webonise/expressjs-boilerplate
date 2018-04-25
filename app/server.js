var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');
var app = express();
var winston = require('../configs/winston-config');

// view engine setup
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

/*app.use('*', (req, res) => {
    // 404
})*/

// Error handler
app.use((err, req, res, next) => {
    winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(500).send({ error: err })
});

app.listen(4001, () => console.log('Application running on port:4001'));
