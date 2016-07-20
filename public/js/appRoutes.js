'use strict';

angular.module('wriggleApp', ['ngRoute'])
.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainCtrl'
  })
  .when('/playdates', {
    templateUrl: 'views/main.html',
    controller: 'PlaydatesCtrl'
  })
  .otherwise('/');

  $locationProvider.html5Mode(true);
}]);