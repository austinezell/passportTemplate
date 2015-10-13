'use strict';

var app = angular.module('passportTest');

app.factory('auth', ['$http', '$window', "localStorageKey", function($http, $window, localStorageKey){
  var auth = {};

  auth.saveToken = function (token){
    $window.localStorage[localStorageKey] = token;
  };

  auth.getToken = function (){
    return $window.localStorage[localStorageKey];
  }

  auth.isLoggedIn = function(){
    var token = auth.getToken();
    if(token){
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };

  auth.currentUser = function(){
    if(auth.isLoggedIn()){
      var token = auth.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));

      return payload.username;
    }
  };

  auth.register = function(user){
    return $http.post('/users/register', user).success(function(data){
      auth.saveToken(data.token);
    });
  };

  auth.logIn = function(user){
    return $http.post('/users/login', user).success(function(data){
      auth.saveToken(data.token);
    });
  };

  auth.logOut = function(){
    $window.localStorage.removeItem(localStorageKey);
  };

  return auth;
}])
