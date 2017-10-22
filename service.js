var baseWebPageApp = angular.module("baseWebPageApp", ["ngRoute"]);
baseWebPageApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "stylePage.html"
  })
  .when("/shirt", {
    templateUrl : "shirtPage.html"
  })
  .when("/pants", {
    templateUrl : "pantPage.html"
  });
});
