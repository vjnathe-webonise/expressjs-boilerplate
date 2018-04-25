var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('User List');
});

router.get('/:id', function(req, res, next) {
  res.send(`User: ${req.params.id}`);
});

module.exports = router;
