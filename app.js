(function () {
  'use strict';


angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

$scope.menu ="";
$scope.message="";

$scope.LunchDisplay = function(){
  $scope.message = LunchAssess($scope.menu) ;

}
//This function does not cover empty items
function LunchAssess(temp) {
  var sum = 0;
//  var temp = $scope.menu;
  var temparr;

if (temp.length == 0) {
return "Please enter data first!";
} else {
  temparr = temp.split(',');
  sum = temparr.length;

    if(sum<=3) return "Enjoy!";
    else return "Too much!";

}

  }

}


})();
