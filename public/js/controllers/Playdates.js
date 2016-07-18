'use strict';

angular.module('wriggleApp')
.controller('PlaydatesCtrl', ['$scope', function($scope, response) {
  console.log('hello from the PLAYDATES controller!');
  $scope.tagline = 'can i show you something?'
  $scope.playdates = response.data;
  console.log('playdates from ctrl', $scope.playdates);
}])