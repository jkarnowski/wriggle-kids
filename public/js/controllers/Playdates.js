'use strict';

angular.module('PlaydatesCtrl', []).

.controller('PlaydatesCtrl', ['$scope', function($scope) {
  console.log('hello from the PLAYDATES controller!');
  $scope.tagline = 'can i show you something?'
  // $scope.playdates = response.data;
  // console.log('playdates from ctrl', $scope.playdates);
}])