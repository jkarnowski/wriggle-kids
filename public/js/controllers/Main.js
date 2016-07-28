'use strict';

angular.module('wriggleApp', ['ngRoute', 'ngResource'])
.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('hello from the MainCtrl!');
  var base = "http://localhost:8080"

  $http.get(base + '/playdates')
  .success(function(sResponse){
    console.log(sResponse);
    $scope.test = "testing"
  })
  .error(function(sResponse){
    console.log('failing to get the main deal')
  })
}])