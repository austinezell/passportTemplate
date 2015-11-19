'use strict'

var jwt = require('express-jwt');

var auth = jwt({secret: (process.env.SECRET || "secret"), userProperty: 'payload'});

module.exports = auth;
