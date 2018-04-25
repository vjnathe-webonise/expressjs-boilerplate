var express = require('express');
var router = express.Router();
var userRoutes = require('./users');

router.use('/user', userRoutes);

module.exports = router;
