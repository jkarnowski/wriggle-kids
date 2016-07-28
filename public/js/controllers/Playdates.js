'use strict';

angular.module('wriggleApp', ['ngRoute'])
.controller('PlaydatesCtrl', ['$scope', 'PlaydateFactory', function($scope, PlaydateFactory) {

  console.log('hello Playdates ctrl');

  $scope.playdateList = PlaydateFactory.getPlaydates();

}])