'use strict';

angular.module('MainCtrl', [])

.controller('MainCtrl', ['$scope', function($scope) {
  console.log('hello from the controller!');
  $scope.tagline = 'to infinity and beyond!'
  // $scope.playdates = response.data;
  // console.log('playdates from ctrl', $scope.playdates);
}])