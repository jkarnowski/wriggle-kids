'use strict';

angular.module('wriggleApp', ['ngRoute'])
.controller('PlaydatesCtrl', ['$scope', function($scope) {
  console.log('hello from the PLAYDATES controller!');

  var playdates = [
  {
    "title": "Swim at Lake MI" ,
    "host": "Christina Woods",
    "phoneNumbers": {
      "mobile": "810-111-2233",
    },
    "location": {
      "address": "111 Michigan Ave",
      "city": "Chicago",
      "state": "IL"
    }
  },
  {
    "title": "Nipples for Tots" ,
    "host": "Mason Bottles",
    "phoneNumbers": {
      "mobile": "415-333-1212",
    },
    "location": {
      "address": "312 Belmont Ave",
      "city": "Chicago",
      "state": "IL"
    }
  }
  ]
  $scope.playdates = playdates;
// $scope.tagline = 'can i show you something?'
  // $scope.playdates = response.data;
  // console.log('playdates from ctrl', $scope.playdates);
}])