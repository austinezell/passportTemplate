'use strict';

var app = angular.module('passportTest', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/general/home.html', controller: 'homeCtrl' })
    
  $urlRouterProvider.otherwise('/');
});
