(function(){
  'use strict';

  angular.module('scaffold')

  .service('Auth', Auth);

  Auth.$inject = ['$http', '$window', "localStorageKey", '$rootScope', '$state']

  function Auth($http, $window, localStorageKey, $rootScope, $state){

    this.saveToken = (token) =>{
      $window.localStorage[localStorageKey] = token;
    };

    this.getToken = () =>{
      return $window.localStorage[localStorageKey];
    }

    this.isLoggedIn = () =>{
      var token = this.getToken();
      if(token){
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    this.register = (user) =>{
      $http.post('/users/register', user)
      .then( res => {
        this.saveToken(res.data);
        $rootScope.loggedIn = this.isLoggedIn()
      })
      .catch(err => {
        console.error(err);
      })
    };

    this.login = (user) =>{
      $http.post('/users/login', user)
      .then(res => {
        this.saveToken(res.data);
        $rootScope.loggedIn = this.isLoggedIn();
        $state.go('home');
      }).catch(err => {
        console.error(err);
      })
    };

    this.logOut = () =>{
      $window.localStorage.removeItem(localStorageKey);
      $rootScope.loggedIn = this.isLoggedIn();
      $state.go('home');
    };

    $rootScope.loggedIn = this.isLoggedIn();
  }
})()
