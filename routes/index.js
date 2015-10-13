'use strict';

var express = require('express');
var router = express.Router();
var Auth = require('../config/auth.js')

router.get('/', function(req, res, next) {
  res.render('index', {title: 'TITLE'});
});


module.exports = router;
