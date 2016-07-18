'use strict';

angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  $routeProvider

  // home page, gets all playdates by default
  .when('/playdates', {
    templateUrl: 'views/home.html',
    controller: 'MainCtrl',
    resolve: {
      playdates: function(Playdates) {
        return Playdates.getPlaydates();
      }
    }
  })

  // get a new playdate form
  .when('/playdates/new', {
    templateUrl: 'views/new.html',
    controller: 'PlaydatesCtrl',
    resolve: {
      newPlaydate: function(){
        return Playdates.newPlaydateForm();
      }
    }
  })

  // return one playdate by ID
  .when('/playdates/:id', {
    templateUrl: 'views/playdate.html',
    controller: 'PlaydatesCtrl',
    resolve: {
      playdate: function(id) {
        return Playdate.getPlaydate(id);
      }
    }
  })

  // post a new playdate
  // .when('/playdates', {
  //   templateUrl: '',
  //   controller: '',
  //   resolve: {

  //   }
  // })
  .otherwise('/');

  $locationProvider.html5Mode(true);
}]);