baseWebPageApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "stylePage.html"
    controller: "Controllers/styleController.js"
  })
  .when("/shirt", {
    templateUrl : "shirtPage.html"
    controller: "Controllers/shirtController.js"
  })
  .when("/pants", {
    templateUrl : "pantPage.html"
    controller: "Controllers/pantController.js"
  });
});
