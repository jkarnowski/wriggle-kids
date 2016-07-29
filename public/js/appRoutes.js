'use strict';

var wriggleApp = angular.module('wriggleApp', ['ngRoute', 'ngResource']);


wriggleApp.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/playdates/new', {
    templateUrl: 'views/playdates/new.html',
    controller: 'PlaydatesCtrl'
  })
  // .when('/playdates/:id', {
  //   templateUrl: 'views/playdates/show.html',
  //   controller: 'PlaydatesCtrl'
  // })
  .otherwise('/');

  $locationProvider.html5Mode(true);
}]);

// wriggleApp.controller('MainCtrl', ['$scope', function($scope){
//   $scope.testing = 'hello from MAIN bitches';
// }])
// .controller('PlaydatesCtrl', ['$scope', function($scope){
//   $scope.testing = 'hello from playdates bitches';
// }])