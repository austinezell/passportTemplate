(function(){
  angular.module("scaffold")
  .config(MaterialConfig);

  MaterialConfig.$inject = ["$mdThemingProvider"];

  function MaterialConfig($mdThemingProvider){
    $mdThemingProvider.theme('default')
    .primaryPalette("blue-grey")
    .accentPalette("indigo");
  }
})()
