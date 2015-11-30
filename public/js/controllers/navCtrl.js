'use strict';
let app = angular.module('passporttest');

app.controller('navCtrl', function($scope, auth, $state) {
  $scope.logout = function (){
    auth.logOut();
    $state.go('home');
  }
});
