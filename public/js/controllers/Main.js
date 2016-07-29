'use strict';

wriggleApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  var base = "http://localhost:8080"

  $http.get(base + '/playdates')
  .success(function(sResponse){
    $scope.playdatesList = sResponse;
  })

  $scope.getPlayDate = function(id){
    $http.get(base + '/playdates/' + id)
    .success(function(sResponse){
      // show playdate data for a profile page
      $scope.playdateData = sResponse;
    })
  }

  $scope.addPlaydate = function(newPlaydate){
    // adds the new playdate to the database
    // needs to send an email to wrigglekids
  }
}])