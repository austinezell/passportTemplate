'use strict';
app = angular.module('passporttest');

app.controller('navCtrl', function($scope, Auth, $state) {
  $scope.logout = function (){
    Auth.logOut();
  }
});
