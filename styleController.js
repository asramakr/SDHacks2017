var baseWebPageApp = angular.module('baseWebPageApp', []);

baseWebPageApp.controller('styleController', function styleController($scope) {
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
