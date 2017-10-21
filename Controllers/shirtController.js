baseWebPageApp.controller('shirtController', function shirtController($scope) {
  $scope.formalShirts = [];
  $scope.casualShirts = [];
  function typeofStyle(){
    var myStyle = document.getElementById("styleValue");
    if(myStyle.value == "Formal"){

    }
    else{
      $scope.casualShirts = [
        {img: "/images/crewneckSweater.jpg", name: "Crew Neck Sweater"},
        {img: "/images/flannel.jpg", name: "Flannel"}, 
        {img: "/images/LogoCrew.jpg", name: "Logo Crew"},
        {img: "/images/PocketT.jpg", name: "Pocket T"}
      ];
    }
  }
});
