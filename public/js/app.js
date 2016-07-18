'use strict';

// var wriggleApp = angular.module('wriggleApp', ['ngRoute', 'ngResource', 'appRoutes', 'MainCtrl', 'PlaydatesCtrl', 'PlaydateService']);

angular.module('wriggleApp', ['ngRoute', 'ngResource'])



// wriggleApp.service('Playdates', function($http){
//   this.getPlaydates = function(){
//     return $http.get('/playdates')
//     .then(function(response){
//       return response;
//     }, function(response){
//       alert('error returning playdates');
//     });
//   }
// })