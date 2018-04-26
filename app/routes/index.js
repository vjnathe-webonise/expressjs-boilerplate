var express = require('express');
var router = express.Router();
var userRoutes = require('./users');

router.get('/', (req, res) => {
    res.render('index', { title: 'API', message: "specify request uri to access other api's" })
});

router.use('/user', userRoutes);

router.all('*', (req, res) => {
    res.status(404).send('Not found');
});

module.exports = router;
