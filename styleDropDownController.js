var baseWebPageApp = angular.module('baseWebPageApp', []);

baseWebPageApp.controller('styleDropDownController', function styleDropDownController($scope) {
  $scope.styles = [
    {
      name: 'Casual',
      id: 'CasualStyle'
    }, {
      name: 'Formal',
      id: 'FormalStyle'
    }
  ];
});
