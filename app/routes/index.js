var express = require('express');
var router = express.Router();
var userRoutes = require('./users');
var winston = require('../../configs/winston-config.js');

router.get('/', (req, res) => {
    res.render('index', { title: 'API', message: "specify request uri to access other api's" })
});

router.use('/user', userRoutes);

router.all('*', (req, res) => {
    winston.error(`${404} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(404).send('Not found');
});

module.exports = router;
