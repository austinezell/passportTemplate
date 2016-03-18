(function(){
  "use strict";
  angular.module("scaffold")
  .directive('scfldAuthModal', scfldAuthModal)

  function scfldAuthModal(){

    var directive = {
      link: link,
      templateUrl: "./js/directives/templates/loginModal.html",
      restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      scope.open = ()=>{
        scope.modalOpen = true;
        scope.modalIsClosing = false;
      }
      scope.close = ()=>{
        scope.modalOpen = false;
        scope.modalIsClosing = true;
      }
    }
  }
})()
