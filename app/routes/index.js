var express = require('express');
var router = express.Router();
var userRoutes = require('./users');

router.get('/', (req, res) => {
    res.send('Request uri missing');
});

router.use('/user', userRoutes);

module.exports = router;
