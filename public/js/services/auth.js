'use strict';

var app = angular.module('passporttest');

app.service('Auth', ['$http', '$window', "localStorageKey", '$rootScope', function($http, $window, localStorageKey, $rootScope){

  this.saveToken = (token) =>{
    $window.localStorage[localStorageKey] = token;
  };

  this.getToken = () =>{
    return $window.localStorage[localStorageKey];
  }

  this.isLoggedIn = () =>{
    var token = this.getToken();
    if(token){
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };

  this.currentUser = function(){
    if(this.isLoggedIn()){
      var token = this.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));

      return payload.username;
    }
  };

  this.register = function(user){
    return $http.post('/users/register', user).success(function(data){
      this.saveToken(data.token);
      $rootScope.loggedIn = this.isLoggedIn()
    });
  };

  this.logIn = function(user){
    return $http.post('/users/login', user).success(function(data){
      this.saveToken(data.token);
      $rootScope.loggedIn = this.isLoggedIn()
      $state.go('users')
    });
  };

  this.logOut = function(){
    $window.localStorage.removeItem(localStorageKey);
    $rootScope.loggedIn = this.isLoggedIn()
  };

  $rootScope.loggedIn = this.isLoggedIn()
}])
