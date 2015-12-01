'use strict';

let router = require('express').Router();
let jwtAuth = require('../config/auth.js');


let User = require('../models/user.js');


router.post('/register', (req, res) =>{
  if(!req.body.username || !req.body.password){
    return res.status(401).send('Username and password are required fields');
  }

  let user = new User();
  user.username= req.body.username;
  user.email= req.body.email;
  user.setPassword(req.body.password);



  user.save( (err, data) => {
    console.log(err, data);
    if(err) return res.status(499).send(err)

    console.log(data);
    let jwt = user.generateJWT();
    console.log(jwt);
    res.send(jwt);
  })
});

router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(401).send('Please fill out all fields');
  }

  User.findOne({username: req.body.username}, function(err, user){
    if(err) return res.status(499).send(err)

    else if(!user || !user.validPassword(req.body.password)){
      return res.status(401).send('Invalid login credentials')
    }

    let jwt = user.generateJWT();
    res.send(jwt)
  })
});

module.exports = router;
