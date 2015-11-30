'use strict';

var app = angular.module('passporttest', ['ui.router', 'ui.bootstrap']);

app.constant('localStorageKey', 'passporttest-token');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/general/home.html',
      controller: 'homeCtrl'
    })


  .state('users', {
      abstract: true,
      templateUrl: '/html/users/users.html'
    })
    .state('users.login', {
      url: '/login',
      templateUrl: '/html/users/form.html',
      controller: 'usersCtrl'
    })
    .state('users.register', {
      url: '/register',
      templateUrl: '/html/users/form.html',
      controller: 'usersCtrl'
    })
  $urlRouterProvider.otherwise('/');
});
