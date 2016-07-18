'use strict';

angular.module('wriggleApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'MainCtrl'
  })
  // home page, gets all playdates by default
  .when('/playdates', {
    templateUrl: 'playdates/main.html',
    controller: 'PlaydatesCtrl',
    resolve: {
      playdates: function(Playdates) {
        return Playdates.getPlaydates();
      }
    }
  })

  // get a new playdate form
  // .when('/playdates/new', {
  //   templateUrl: 'views/new.html',
  //   controller: 'PlaydatesCtrl',
  //   resolve: {
  //     newPlaydate: function(){
  //       return Playdates.newPlaydateForm();
  //     }
  //   }
  // })

  // return one playdate by ID
  // .when('/playdates/:id', {
  //   templateUrl: 'views/playdate.html',
  //   controller: 'PlaydatesCtrl',
  //   resolve: {
  //     playdate: function(id) {
  //       return Playdates.getPlaydate(id);
  //     }
  //   }
  // })

  // post a new playdate
  // .when('/playdates', {
  //   templateUrl: '',
  //   controller: '',
  //   resolve: {

  //   }
  // })
  .otherwise('/');

  // $locationProvider.html5Mode(true);
}]);