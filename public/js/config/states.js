(function(){
  angular.module('scaffold')
  .config(StateConfig)
  StateConfig.$inject = ["$stateProvider", "$urlRouterProvider"]

  function StateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('home', {
      templateUrl: "./html/general/home.html",
      controller: 'HomeCtrl',
      controllerAs: "Home"
    })
    .state('home.landing',{
      url: '/',
      templateUrl: '/html/general/landing.html'
    })
    .state('home.about',{
      url: '/about',
      templateUrl: '/html/general/about.html'
    })
    $urlRouterProvider.otherwise('/');
  };
})()
