var baseWebPageApp = angular.module('baseWebPageApp', []);

baseWebPageApp.controller('sidebarController', function sidebarController($scope) {
  $scope.dropdowns = [
    {
      name: 'Style',
      value: ''
    }, {
      name: 'Shirt',
      value: ''
    }, {
      name: 'Pants',
      value: ''
    }
  ];
});
