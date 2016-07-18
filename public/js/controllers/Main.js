'use strict';

angular.module('wriggleApp', ['ngRoute'])
.controller('MainCtrl', ['$scope', function($scope) {
  console.log('hello from the MainCtrl!');
  $scope.tagline = 'to infinity and beyond!'
}])