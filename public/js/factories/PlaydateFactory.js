'use strict';

angular.module('wriggleApp', ['ngRoute'])
.factory('PlaydateFactory', ['$http', function($http) {
  var baseurl = 'http://localhost:8080';
  var exports = {};
  exports.getPlaydates = function(){
    $http.get('/playdates')
    .success(function(response){
      console.log('response', response);
    })
  }
  return exports;
}]);