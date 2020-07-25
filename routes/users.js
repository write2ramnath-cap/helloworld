var express = require('express');
const members = require('../Members');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(members);
});

module.exports = router;
