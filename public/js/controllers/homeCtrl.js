(function(){
  'use strict';
  angular.module('scaffold')
  .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ["$scope", "$state"]

  function HomeCtrl($scope, $state){
    let vm = this;

    $scope.$watch(
      ()=>$state.current.name,
      (current, previous)=>{
        $scope.toAbout = current === "home.about";
      })
    }
  })()
