'use strict';

var expect = require('chai').expect;
var User = require('../../models/user.js')
var atob = require('atob')
require('dotenv').load();
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/testingDB')


describe('User', function(){
  describe('saves', function(){
    User.remove({}, function(err){})

    var user = new User({username: 'username'})
    user.save()
    it('saves to the database', function(done){
      var user = new User({username: 'user'})
      user.save(function(err, saveduser){
        expect(err).to.not.be.ok;
        expect(saveduser.username).to.equal(user.username)
        done()
      })
    })
    it('will not save duplicate usernames', function(done){
      var user = new User({username: "username"})
      user.save(function(err, saveduser){
        expect(err).to.be.ok;
        expect(saveduser).to.not.be.ok;
        done()
      })
    })
    after(function(done){
      User.remove({}, function(err){
        done()
      });
    })

  })

  describe('.setPassword', function(){
    var user;
    beforeEach(function(){
      user = new User({username: 'user'});
    })
    it('should set the password.', function(done){
      user.setPassword('password')
      expect(user.salt).to.be.ok;
      expect(user.hash).to.have.length(128);
      done()
    })
    it('should not set ungiven password.', function(done){
      user.setPassword()
      expect(user.salt).to.not.be.ok;
      expect(user.hash).to.not.be.ok;
      done()
    })
  })

  describe('.validPassword', function(){
    var user = new User({username: 'user'})
    user.setPassword('password')
    it('should declare the same password to be valid', function(done){
      expect(user.validPassword('password')).to.be.true
      done()
    })
    it('should declare the different passwords to be false', function(done){
      expect(user.validPassword('notpassword')).to.be.false
      done()
    })
  })

  describe('.generateJWT', function(){
    var user = new User({username: "user"})
    var jwt = user.generateJWT()
    it("should encode the user name and id", function(done){
      var payload = JSON.parse(atob(jwt.split(".")[1]))
      expect(payload.username).to.equal(user.username)
      expect(payload._id).to.equal(user._id.toString())
      done()
    })
  })

})
