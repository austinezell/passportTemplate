(function(){
  'use strict';
  angular.module('scaffold', [
    'ui.router',
    'ngAnimate',
    'ngMaterial',
    'ngAria'
  ])
  .constant('localStorageKey', 'scaffold-token')
})()
