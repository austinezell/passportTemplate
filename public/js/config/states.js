(function(){
  angular.module('scaffold')
  .config(StateConfig)
  StateConfig.$inject = ["$stateProvider", "$urlRouterProvider"]

  function StateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('home', {
      template: "<div ui-view ng-class='{\"on-about\": location.onAbout}' class='slide'></div>",
      controller: 'homeCtrl',
      controllerAs: "home"
    })
    .state('home.landing',{
      url: '/',
      templateUrl: '/html/general/home.html'
    })
    .state('home.about',{
      url: '/about',
      templateUrl: '/html/general/about.html'
    })
    $urlRouterProvider.otherwise('/');
  };
})()
