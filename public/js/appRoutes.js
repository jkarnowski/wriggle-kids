'use strict';

angular.module('wriggleApp', ['ngRoute', 'MainCtrl'])
.config([
  '$routeProvider',
  '$locationProvider',
  'MainCtrl',

  function($routeProvider, $locationProvider){

  $routeProvider
  .when('/main', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  // .when('/playdates', {
  //   templateUrl: 'views/main.html',
  //   controller: 'PlaydatesCtrl'
  // })
  // .when('/playdates/new', {
  //   templateUrl: 'views/playdates/new.html',
  //   controller: 'PlaydatesCtrl'
  // })
  // .when('/playdates/:id', {
  //   templateUrl: 'views/playdates/show.html',
  //   controller: 'PlaydatesCtrl'
  // })
  .otherwise('/main');

  $locationProvider.html5Mode(true);
}]);