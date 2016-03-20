(function(){
  angular.module('scaffold')
  .config(StateConfig)
  StateConfig.$inject = ["$stateProvider", "$urlRouterProvider"]

  function StateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    // .state('auth', {
    //   abstract: true,
    //   views: {
    //     "auth@":{
    //       template: "<ui-view/>"
    //     }
    //   }
    // })
    // .state('auth.register', {
    //   template: '<a ui-sref="auth">hehe</a>'
    // })
    // .state('auth.login', {
    //   template: '<a ui-sref="auth.register">hallo</a>'
    // })

    .state('home', {
      url: '/',
      templateUrl: '/html/general/home.html',
      controller: 'homeCtrl',
      controllerAs: "home"
    })
    .state('about',{
      url: '/about',
      templateUrl: '/html/general/about.html',
      controller: 'aboutCtrl',
      controllerAs: "about"
    })
    $urlRouterProvider.otherwise('/');
  };
})()
