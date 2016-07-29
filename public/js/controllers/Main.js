'use strict';

wriggleApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  var base = "http://localhost:8080"

  $http.get(base + '/playdates')
  .success(function(sResponse){
    $scope.playdatesList = sResponse;
  })

  $scope.addPlaydate = function(newPlaydate){
    // adds the new playdate to the database
    // needs to send an email to wrigglekids
  }
}])