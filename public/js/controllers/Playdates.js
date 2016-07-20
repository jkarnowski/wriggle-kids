'use strict';

angular.module('wriggleApp', ['ngRoute'])
.controller('PlaydatesCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.getPlaydates = function(){
    $http.get('/playdates')
    .success(function(response){
      console.log('response', response)
    })
  }
}])