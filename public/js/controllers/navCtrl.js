'use strict';
(function(){
  angular.module('scaffold')
  .controller('navCtrl', navCtrl)
  
  navCtrl.$inject = ["Auth"]

  function navCtrl(Auth) {
    let navVm = this;
    navVm.logout = function (){
      Auth.logOut();
    }
  };
})()
