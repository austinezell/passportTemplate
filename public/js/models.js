'use strict';

var app = angular.module('passportTest');

app.factory('auth', ['$http', '$window', "localStorageKey", '$rootScope', function($http, $window, localStorageKey, $rootScope){
  var auth = {};

  auth.saveToken = function (token){
    $window.localStorage[localStorageKey] = token;
  };

  auth.getToken = function (){
    return $window.localStorage[localStorageKey];
  }

  $http.defaults.headers.common.Authorization = 'Bearer '+ auth.getToken()

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
      $rootScope.loggedIn = auth.isLoggedIn()
    });
  };

  auth.logIn = function(user){
    return $http.post('/users/login', user).success(function(data){
      auth.saveToken(data.token);
      $rootScope.loggedIn = auth.isLoggedIn()
    });
  };

  auth.logOut = function(){
    $window.localStorage.removeItem(localStorageKey);
    $rootScope.loggedIn = auth.isLoggedIn()
  };

  auth.test = function(){
    $http.get('/ping').then(function(data){
      console.log(data)
    })
  }

  auth.test()

  $rootScope.loggedIn = auth.isLoggedIn()
  return auth;
}])
