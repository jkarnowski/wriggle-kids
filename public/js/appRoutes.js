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
  .when('/playdates', {
    templateUrl: 'views/playdates/index.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about_us.html',
    controller: 'MainCtrl'
  })
  .when('/playdates/new', {
    templateUrl: 'views/playdates/new.html',
    controller: 'MainCtrl'
  })
  .otherwise('/');

  $locationProvider.html5Mode(true);
}]);