(function(){
  angular.module('scaffold')
  .config(StateConfig)
  StateConfig.$inject = ["$stateProvider", "$urlRouterProvider"]

  function StateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/general/home.html',
      controller: 'homeCtrl',
      controllerAs: "home"
    })
    $urlRouterProvider.otherwise('/');
  };
})()
