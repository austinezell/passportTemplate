'use strict'

let jwt = require('express-jwt');
let constants = require('./constants')

let jwtAuth = jwt({secret: constants.SECRET, userProperty: 'user'});

module.exports = jwtAuth;
