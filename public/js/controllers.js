'use strict';

var app = angular.module('passportTest');

app.controller('homeCtrl', function($scope) {

});

app.controller('navCtrl', function($scope) {

});

app.controller('usersCtrl', function($scope, $state, auth) {
  $scope.currentState = $state.current.name.split('.')[1].charAt(0).toUpperCase() + $state.current.name.split('.')[1].slice(1);
  if($scope.currentState.toUpperCase() === 'REGISTER'){
    $scope.submit = function(user){
      auth.register(user)
    }
  }
  if($scope.currentState.toUpperCase() === 'LOGIN'){
    $scope.submit = function(user){
      auth.logIn(user)
    }
  }


});
