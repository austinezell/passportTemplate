(function(){
  "use strict";
  angular.module("scaffold")
  .directive('scfldAuthModal', scfldAuthModal)

  function scfldAuthModal(){
    let directive = {
      link: link,
      templateUrl: "./js/directives/templates/loginModal.html",
      restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      let firstInput = element.find("input")[0];

      scope.open = () => {
        scope.modalOpen = true;
        scope.modalIsClosing = false;
        firstInput.focus();
      }

      scope.close = () => {
        scope.modalOpen = false;
        scope.modalIsClosing = true;
      }
    }
  }
})()
