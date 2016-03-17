(function(){
  'use strict';
  angular.module('scaffold', [
    'ui.router',
    'ngAnimate',
    'ngMessages',
    'ngAria',
    'ngMaterial'
  ])
  .constant('localStorageKey', 'scaffold-token')
})()
