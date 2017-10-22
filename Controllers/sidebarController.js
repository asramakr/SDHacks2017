var baseWebPageApp = angular.module('baseWebPageApp', []);

baseWebPageApp.controller('sidebarController', function sidebarController($scope) {
  $scope.dropdowns = [
    {
      name: 'Style',
      value: 'Casual'
    }, {
      name: 'Shirt',
      value: 'T-Shirt'
    }, {
      name: 'Pants',
      value: 'Jeans'
    }
  ];

  // $scope.updateDropDown = function(){
  //   var myStyle = document.getElementById("styleValue");
  //   var styleDropdown = document.getElementById("StyleDropdown");
  //   styleDropdown.innerHTML = myStyle.innerHTML;
  //   styleDropdown.setAttribute("hidden", "false");
  // }
});
