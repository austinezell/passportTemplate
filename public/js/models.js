'use strict';

var app = angular.module('passportTest');

app.factory('auth', ['$http', '$window', function($http, $window){
  var auth = {};

  this.saveToken = function (token){
    $window.localStorage['flapper-news-token'] = token;
  };

  this.getToken = function (){
    return $window.localStorage['flapper-news-token'];
  }

  return auth;
}])
