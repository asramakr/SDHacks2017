baseWebPageApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "stylePage.html"
    controller: "styleController.js"
  })
  .when("/shirt", {
    templateUrl : "shirtPage.html"
    controller: "shirtController.js"
  })
  .when("/pants", {
    templateUrl : "pantPage.html"
    controller: "pantController.js"
  });
});
