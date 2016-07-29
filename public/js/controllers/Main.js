'use strict';

wriggleApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('hello from the MainCtrl!');
  var base = "http://localhost:8080"

  $http.get(base + '/playdates')
  .success(function(sResponse){
    $scope.playdatesList = sResponse;
  })
}])